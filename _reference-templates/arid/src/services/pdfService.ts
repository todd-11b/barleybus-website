import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Receipt } from '@/types/receipt';

export interface PDFOptions {
  filename?: string;
  format?: 'a4' | 'letter';
  orientation?: 'portrait' | 'landscape';
  quality?: number;
  scale?: number;
}

export class PDFService {
  /**
   * Generate PDF from HTML element
   */
  static async generateFromElement(
    element: HTMLElement,
    options: PDFOptions = {}
  ): Promise<Blob> {
    const {
      format = 'a4',
      orientation = 'portrait',
      quality = 1,
      scale = 2,
    } = options;

    try {
      // Convert HTML to canvas
      const canvas = await html2canvas(element, {
        scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      // Create PDF
      const imgData = canvas.toDataURL('image/png', quality);
      const pdf = new jsPDF({
        orientation,
        unit: 'mm',
        format,
      });

      const imgWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add image to PDF
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      return pdf.output('blob');
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Failed to generate PDF');
    }
  }

  /**
   * Generate receipt PDF with custom styling
   */
  static async generateReceiptPDF(
    receipt: Receipt,
    options: PDFOptions = {}
  ): Promise<Blob> {
    const { filename = `receipt-${receipt.receiptNumber}.pdf` } = options;
    
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Set up fonts and colors
    const primaryColor = '#2563eb';
    const secondaryColor = '#64748b';
    const lightGray = '#f8fafc';
    const darkGray = '#1e293b';

    // Helper functions
    const addText = (text: string, x: number, y: number, options: any = {}) => {
      pdf.setFontSize(options.fontSize || 10);
      pdf.setTextColor(options.color || darkGray);
      pdf.text(text, x, y);
    };

    const addLine = (x1: number, y1: number, x2: number, y2: number, color: string = darkGray) => {
      pdf.setDrawColor(color);
      pdf.line(x1, y1, x2, y2);
    };

    const addRect = (x: number, y: number, width: number, height: number, fillColor?: string, strokeColor?: string) => {
      if (fillColor) {
        pdf.setFillColor(fillColor);
        pdf.rect(x, y, width, height, 'F');
      }
      if (strokeColor) {
        pdf.setDrawColor(strokeColor);
        pdf.rect(x, y, width, height);
      }
    };

    // Page dimensions
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 15;
    let currentY = margin;

    // Header with company logo and info
    addRect(0, 0, pageWidth, 40, lightGray);
    
    // Company name
    pdf.setFontSize(20);
    pdf.setTextColor(primaryColor);
    pdf.text(receipt.company.name, margin, currentY + 15);

    // Company address
    pdf.setFontSize(10);
    pdf.setTextColor(secondaryColor);
    const companyAddress = [
      receipt.company.address.street,
      `${receipt.company.address.city}, ${receipt.company.address.state} ${receipt.company.address.zipCode}`,
      receipt.company.address.country,
      `Phone: ${receipt.company.phone}`,
      `Email: ${receipt.company.email}`,
      `Website: ${receipt.company.website}`,
    ];
    
    companyAddress.forEach((line, index) => {
      pdf.text(line, margin, currentY + 25 + (index * 4));
    });

    currentY += 50;

    // Receipt title and number
    addText('RECEIPT', pageWidth - margin - 20, currentY, { fontSize: 24, color: primaryColor });
    currentY += 10;
    addText(`Receipt #: ${receipt.receiptNumber}`, pageWidth - margin - 20, currentY, { fontSize: 12, color: secondaryColor });
    currentY += 8;
    addText(`Date: ${receipt.issueDate.toLocaleDateString()}`, pageWidth - margin - 20, currentY, { fontSize: 10, color: secondaryColor });
    currentY += 15;

    // Customer information
    addText('BILL TO:', margin, currentY, { fontSize: 12, color: primaryColor });
    currentY += 8;
    addText(receipt.customer.name, margin, currentY);
    currentY += 5;
    addText(receipt.customer.email, margin, currentY);
    if (receipt.customer.phone) {
      currentY += 5;
      addText(receipt.customer.phone, margin, currentY);
    }
    if (receipt.customer.address) {
      currentY += 5;
      addText(receipt.customer.address.street, margin, currentY);
      currentY += 5;
      addText(`${receipt.customer.address.city}, ${receipt.customer.address.state} ${receipt.customer.address.zipCode}`, margin, currentY);
      currentY += 5;
      addText(receipt.customer.address.country, margin, currentY);
    }

    currentY += 20;

    // Items table header - better column positioning with borders
    const tableWidth = pageWidth - (margin * 2);
    const descWidth = tableWidth * 0.5; // 50% for description
    const qtyWidth = tableWidth * 0.15; // 15% for quantity
    const priceWidth = tableWidth * 0.175; // 17.5% for unit price
    const totalWidth = tableWidth * 0.175; // 17.5% for total
    
    // Header background
    addRect(margin, currentY, tableWidth, 12, primaryColor);
    
    // Column borders for header
    addLine(margin + descWidth, currentY, margin + descWidth, currentY + 12, '#ffffff');
    addLine(margin + descWidth + qtyWidth, currentY, margin + descWidth + qtyWidth, currentY + 12, '#ffffff');
    addLine(margin + descWidth + qtyWidth + priceWidth, currentY, margin + descWidth + qtyWidth + priceWidth, currentY + 12, '#ffffff');
    
    addText('DESCRIPTION', margin + 5, currentY + 8, { fontSize: 10, color: '#ffffff' });
    addText('QTY', margin + descWidth + 5, currentY + 8, { fontSize: 10, color: '#ffffff' });
    addText('UNIT PRICE', margin + descWidth + qtyWidth + 5, currentY + 8, { fontSize: 10, color: '#ffffff' });
    addText('TOTAL', margin + descWidth + qtyWidth + priceWidth + 5, currentY + 8, { fontSize: 10, color: '#ffffff' });
    currentY += 14;

    // Items with proper column alignment and borders
    receipt.items.forEach((item, index) => {
      // Handle long descriptions by wrapping text
      const maxDescWidth = descWidth - 10;
      const descLines = pdf.splitTextToSize(item.description, maxDescWidth);
      
      // Calculate row height based on description lines
      const rowHeight = Math.max(10, 6 + (descLines.length - 1) * 6);
      
      // Add row border
      addRect(margin, currentY, tableWidth, rowHeight, undefined, '#e5e7eb');
      
      // Column borders for this row
      addLine(margin + descWidth, currentY, margin + descWidth, currentY + rowHeight, '#e5e7eb');
      addLine(margin + descWidth + qtyWidth, currentY, margin + descWidth + qtyWidth, currentY + rowHeight, '#e5e7eb');
      addLine(margin + descWidth + qtyWidth + priceWidth, currentY, margin + descWidth + qtyWidth + priceWidth, currentY + rowHeight, '#e5e7eb');
      
      // Draw first line with all data
      addText(descLines[0], margin + 5, currentY + 7);
      addText(item.quantity.toString(), margin + descWidth + 5, currentY + 7);
      addText(`${receipt.currency} ${item.unitPrice.toFixed(2)}`, margin + descWidth + qtyWidth + 5, currentY + 7);
      addText(`${receipt.currency} ${item.totalPrice.toFixed(2)}`, margin + descWidth + qtyWidth + priceWidth + 5, currentY + 7);
      currentY += 8;
      
      // Draw additional description lines if needed
      for (let i = 1; i < descLines.length; i++) {
        addText(descLines[i], margin + 5, currentY + 7);
        currentY += 6;
      }
      
      currentY += 2; // Extra spacing between rows
    });

    currentY += 10;

    // Totals section - aligned with table columns
    const totalsStartY = currentY;
    const totalsWidth = 100;
    // Align totals with the rightmost columns of the table
    const totalsStartX = margin + descWidth + qtyWidth + priceWidth - 10; // Align with UNIT PRICE column start

    // Subtotal
    addText('Subtotal:', totalsStartX, currentY + 7);
    addText(`${receipt.currency} ${receipt.subtotal.toFixed(2)}`, totalsStartX + 50, currentY + 7);
    currentY += 8;

    // Taxes
    receipt.taxes.forEach((tax) => {
      addText(`${tax.name}:`, totalsStartX, currentY + 7);
      addText(`${receipt.currency} ${tax.amount.toFixed(2)}`, totalsStartX + 50, currentY + 7);
      currentY += 6;
    });

    // Discounts
    receipt.discounts.forEach((discount) => {
      addText(`${discount.name}:`, totalsStartX, currentY + 7);
      addText(`-${receipt.currency} ${discount.amount.toFixed(2)}`, totalsStartX + 50, currentY + 7);
      currentY += 6;
    });

    currentY += 5;
    addLine(totalsStartX, currentY, totalsStartX + totalsWidth, currentY, primaryColor);
    currentY += 8;

    // Total
    addText('TOTAL:', totalsStartX, currentY + 7, { fontSize: 12, color: primaryColor });
    addText(`${receipt.currency} ${receipt.totalAmount.toFixed(2)}`, totalsStartX + 50, currentY + 7, { fontSize: 12, color: primaryColor });

    currentY += 20;

    // Payment information
    if (receipt.payment) {
      addText('PAYMENT INFORMATION:', margin, currentY, { fontSize: 12, color: primaryColor });
      currentY += 8;
      addText(`Method: ${receipt.payment.method.replace('_', ' ').toUpperCase()}`, margin, currentY + 7);
      currentY += 6;
      addText(`Transaction ID: ${receipt.payment.transactionId}`, margin, currentY + 7);
      currentY += 6;
      addText(`Processed: ${receipt.payment.processedAt.toLocaleString()}`, margin, currentY + 7);
      if (receipt.payment.authorizationCode) {
        currentY += 6;
        addText(`Auth Code: ${receipt.payment.authorizationCode}`, margin, currentY + 7);
      }
    }

    currentY += 20;

    // QR Code (if available)
    if (receipt.qrCode) {
      try {
        // Add QR code placeholder (in real implementation, you'd embed the actual QR code)
        addRect(pageWidth - margin - 40, currentY, 35, 35, lightGray);
        addText('QR', pageWidth - margin - 25, currentY + 20, { fontSize: 8, color: secondaryColor });
        addText('Code', pageWidth - margin - 25, currentY + 25, { fontSize: 8, color: secondaryColor });
      } catch (error) {
        console.error('Error adding QR code to PDF:', error);
      }
    }

    currentY += 50;

    // Notes and terms
    if (receipt.notes) {
      addText('NOTES:', margin, currentY, { fontSize: 12, color: primaryColor });
      currentY += 8;
      const notes = pdf.splitTextToSize(receipt.notes, pageWidth - (margin * 2));
      notes.forEach((line: string) => {
        addText(line, margin, currentY + 7);
        currentY += 6;
      });
      currentY += 10;
    }

    if (receipt.terms) {
      addText('TERMS & CONDITIONS:', margin, currentY, { fontSize: 12, color: primaryColor });
      currentY += 8;
      const terms = pdf.splitTextToSize(receipt.terms, pageWidth - (margin * 2));
      terms.forEach((line: string) => {
        addText(line, margin, currentY + 7);
        currentY += 6;
      });
    }

    // Footer
    const footerY = pageHeight - 20;
    addLine(margin, footerY, pageWidth - margin, footerY, secondaryColor);
    addText(`Thank you for your business!`, margin, footerY + 10, { fontSize: 10, color: secondaryColor });
    addText(`Generated on ${new Date().toLocaleString()}`, pageWidth - margin - 50, footerY + 10, { fontSize: 8, color: secondaryColor });

    return pdf.output('blob');
  }

  /**
   * Download PDF blob as file
   */
  static downloadPDF(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * Open PDF in new window
   */
  static openPDF(blob: Blob): void {
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    // Clean up after a delay
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

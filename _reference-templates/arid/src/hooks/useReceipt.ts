import { useState, useCallback } from 'react';
import { Receipt } from '@/types/receipt';
import { PDFService } from '@/services/pdfService';
import { QRCodeService } from '@/services/qrCodeService';

export interface UseReceiptOptions {
  autoGenerateQR?: boolean;
  defaultCompany?: Receipt['company'];
}

export interface UseReceiptReturn {
  // State
  isLoading: boolean;
  error: string | null;
  
  // Actions
  generateReceipt: (receiptData: Partial<Receipt>) => Promise<Receipt>;
  downloadReceiptPDF: (receipt: Receipt) => Promise<void>;
  printReceipt: (receipt: Receipt) => Promise<void>;
  generateQRCode: (receipt: Receipt) => Promise<string>;
  shareReceipt: (receipt: Receipt) => Promise<void>;
  
  // Utilities
  formatCurrency: (amount: number, currency: string) => string;
  formatDate: (date: Date) => string;
  validateReceipt: (receipt: Partial<Receipt>) => string[];
}

export const useReceipt = (options: UseReceiptOptions = {}): UseReceiptReturn => {
  const { autoGenerateQR = true, defaultCompany } = options;
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateReceipt = useCallback(async (receiptData: Partial<Receipt>): Promise<Receipt> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Generate receipt ID and number if not provided
      const receiptId = receiptData.id || `receipt-${Date.now()}`;
      const receiptNumber = receiptData.receiptNumber || `RCP-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;
      
      // Create complete receipt object
      const receipt: Receipt = {
        id: receiptId,
        receiptNumber,
        type: receiptData.type || 'booking',
        status: receiptData.status || 'pending',
        issueDate: receiptData.issueDate || new Date(),
        dueDate: receiptData.dueDate,
        currency: receiptData.currency || 'USD',
        
        company: receiptData.company || defaultCompany || {
          name: 'Arid Travel & Tours',
          address: {
            street: '123 Travel Street',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            country: 'United States',
          },
          phone: '+1 (555) 123-4567',
          email: 'info@aridtravel.com',
          website: 'www.aridtravel.com',
        },
        
        customer: receiptData.customer || {
          name: '',
          email: '',
        },
        
        items: receiptData.items || [],
        subtotal: receiptData.subtotal || 0,
        taxes: receiptData.taxes || [],
        discounts: receiptData.discounts || [],
        
        totalAmount: receiptData.totalAmount || 0,
        amountPaid: receiptData.amountPaid || 0,
        balanceDue: receiptData.balanceDue || 0,
        
        payment: receiptData.payment || {
          method: 'credit_card',
          transactionId: `TXN-${Date.now()}`,
          processedAt: new Date(),
        },
        
        notes: receiptData.notes,
        terms: receiptData.terms,
        
        serviceType: receiptData.serviceType,
        serviceDetails: receiptData.serviceDetails,
      };

      // Generate QR code if enabled
      if (autoGenerateQR && receipt.company) {
        try {
          const qrCode = await QRCodeService.generateReceiptQR(
            receipt.id,
            receipt.receiptNumber,
            receipt.company.website
          );
          receipt.qrCode = qrCode;
        } catch (qrError) {
          console.warn('Failed to generate QR code:', qrError);
        }
      }

      return receipt;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate receipt';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [autoGenerateQR, defaultCompany]);

  const downloadReceiptPDF = useCallback(async (receipt: Receipt): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const blob = await PDFService.generateReceiptPDF(receipt);
      PDFService.downloadPDF(blob, `receipt-${receipt.receiptNumber}.pdf`);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to download PDF';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const printReceipt = useCallback(async (receipt: Receipt): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const blob = await PDFService.generateReceiptPDF(receipt);
      PDFService.openPDF(blob);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to print receipt';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const generateQRCode = useCallback(async (receipt: Receipt): Promise<string> => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!receipt.company) {
        throw new Error('Company information is required to generate QR code');
      }
      
      const qrCode = await QRCodeService.generateReceiptQR(
        receipt.id,
        receipt.receiptNumber,
        receipt.company.website
      );
      
      return qrCode;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate QR code';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const shareReceipt = useCallback(async (receipt: Receipt): Promise<void> => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Receipt ${receipt.receiptNumber}`,
          text: `Receipt for ${receipt.customer.name}`,
          url: window.location.href,
        });
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        // You might want to show a toast notification here
        console.log('Receipt link copied to clipboard');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to share receipt';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  }, []);

  const formatCurrency = useCallback((amount: number, currency: string): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
    }).format(amount);
  }, []);

  const formatDate = useCallback((date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(date));
  }, []);

  const validateReceipt = useCallback((receipt: Partial<Receipt>): string[] => {
    const errors: string[] = [];
    
    if (!receipt.customer?.name) {
      errors.push('Customer name is required');
    }
    
    if (!receipt.customer?.email) {
      errors.push('Customer email is required');
    }
    
    if (!receipt.items || receipt.items.length === 0) {
      errors.push('At least one item is required');
    }
    
    if (!receipt.company?.name) {
      errors.push('Company name is required');
    }
    
    if (!receipt.company?.address) {
      errors.push('Company address is required');
    }
    
    if (receipt.totalAmount && receipt.totalAmount <= 0) {
      errors.push('Total amount must be greater than zero');
    }
    
    return errors;
  }, []);

  return {
    isLoading,
    error,
    generateReceipt,
    downloadReceiptPDF,
    printReceipt,
    generateQRCode,
    shareReceipt,
    formatCurrency,
    formatDate,
    validateReceipt,
  };
};

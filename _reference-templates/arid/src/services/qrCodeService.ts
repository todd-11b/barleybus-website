import QRCode from 'qrcode';

export interface QRCodeOptions {
  width?: number;
  height?: number;
  margin?: number;
  color?: {
    dark?: string;
    light?: string;
  };
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
}

export class QRCodeService {
  /**
   * Generate QR code as data URL
   */
  static async generateDataURL(
    data: string,
    options: QRCodeOptions = {}
  ): Promise<string> {
    const defaultOptions = {
      width: 200,
      height: 200,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M' as const,
      ...options,
    };

    try {
      return await QRCode.toDataURL(data, defaultOptions);
    } catch (error) {
      console.error('Error generating QR code:', error);
      throw new Error('Failed to generate QR code');
    }
  }

  /**
   * Generate QR code as SVG string
   */
  static async generateSVG(
    data: string,
    options: QRCodeOptions = {}
  ): Promise<string> {
    const defaultOptions = {
      width: 200,
      height: 200,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M' as const,
      ...options,
    };

    try {
      return await QRCode.toString(data, {
        type: 'svg',
        ...defaultOptions,
      });
    } catch (error) {
      console.error('Error generating QR code SVG:', error);
      throw new Error('Failed to generate QR code SVG');
    }
  }

  /**
   * Generate QR code for receipt verification
   */
  static async generateReceiptQR(
    receiptId: string,
    receiptNumber: string,
    companyWebsite: string
  ): Promise<string> {
    const verificationData = {
      type: 'receipt_verification',
      receiptId,
      receiptNumber,
      verificationUrl: `${companyWebsite}/verify-receipt/${receiptId}`,
      timestamp: new Date().toISOString(),
    };

    return this.generateDataURL(JSON.stringify(verificationData), {
      width: 150,
      height: 150,
      errorCorrectionLevel: 'H', // High error correction for better reliability
    });
  }

  /**
   * Generate QR code for payment verification
   */
  static async generatePaymentQR(
    transactionId: string,
    amount: number,
    currency: string,
    companyWebsite: string
  ): Promise<string> {
    const paymentData = {
      type: 'payment_verification',
      transactionId,
      amount,
      currency,
      verificationUrl: `${companyWebsite}/verify-payment/${transactionId}`,
      timestamp: new Date().toISOString(),
    };

    return this.generateDataURL(JSON.stringify(paymentData), {
      width: 150,
      height: 150,
      errorCorrectionLevel: 'H',
    });
  }

  /**
   * Generate QR code for booking reference
   */
  static async generateBookingQR(
    bookingReference: string,
    companyWebsite: string
  ): Promise<string> {
    const bookingData = {
      type: 'booking_reference',
      bookingReference,
      detailsUrl: `${companyWebsite}/booking/${bookingReference}`,
      timestamp: new Date().toISOString(),
    };

    return this.generateDataURL(JSON.stringify(bookingData), {
      width: 150,
      height: 150,
      errorCorrectionLevel: 'H',
    });
  }

  /**
   * Generate QR code with custom data
   */
  static async generateCustomQR(
    data: any,
    options: QRCodeOptions = {}
  ): Promise<string> {
    const jsonData = typeof data === 'string' ? data : JSON.stringify(data);
    return this.generateDataURL(jsonData, options);
  }
}

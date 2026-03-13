export interface ReceiptItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  category?: 'service' | 'tax' | 'discount' | 'fee';
}

export interface ReceiptCustomer {
  name: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface ReceiptCompany {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phone: string;
  email: string;
  website: string;
  taxId?: string;
  registrationNumber?: string;
  logo?: string;
}

export interface ReceiptPayment {
  method: 'credit_card' | 'debit_card' | 'bank_transfer' | 'paypal' | 'cash' | 'check';
  cardLast4?: string;
  transactionId: string;
  authorizationCode?: string;
  processedAt: Date;
}

export interface ReceiptTax {
  name: string;
  rate: number;
  amount: number;
  type: 'sales' | 'vat' | 'service' | 'city' | 'state' | 'federal';
}

export interface ReceiptDiscount {
  name: string;
  type: 'percentage' | 'fixed';
  value: number;
  amount: number;
}

export interface Receipt {
  id: string;
  receiptNumber: string;
  type: 'booking' | 'payment' | 'refund' | 'invoice';
  status: 'paid' | 'pending' | 'refunded' | 'cancelled';
  
  // Main details
  issueDate: Date;
  dueDate?: Date;
  currency: string;
  
  // Parties
  company: ReceiptCompany;
  customer: ReceiptCustomer;
  
  // Financial details
  items: ReceiptItem[];
  subtotal: number;
  taxes: ReceiptTax[];
  discounts: ReceiptDiscount[];
  totalAmount: number;
  amountPaid: number;
  balanceDue: number;
  
  // Payment details
  payment: ReceiptPayment;
  
  // Additional info
  notes?: string;
  terms?: string;
  qrCode?: string;
  
  // Service specific
  serviceType?: 'travel' | 'flight' | 'hotel' | 'visa';
  serviceDetails?: {
    bookingReference?: string;
    checkIn?: Date;
    checkOut?: Date;
    passengers?: number;
    rooms?: number;
    flightDetails?: {
      departure: string;
      arrival: string;
      flightNumber: string;
      date: Date;
    };
  };
}

export interface ReceiptTemplate {
  id: string;
  name: string;
  type: 'standard' | 'detailed' | 'minimal' | 'corporate';
  company: ReceiptCompany;
  styling: {
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
    logoPosition: 'left' | 'center' | 'right';
    showQRCode: boolean;
    showBarcode: boolean;
  };
}

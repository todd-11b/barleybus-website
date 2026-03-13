import { Receipt } from '@/types/receipt';

export const sampleReceipts: Receipt[] = [
  {
    id: '1',
    receiptNumber: 'RCP-2024-001',
    type: 'booking',
    status: 'paid',
    issueDate: new Date('2024-01-15'),
    dueDate: new Date('2024-01-15'),
    currency: 'USD',
    
    company: {
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
      taxId: 'TAX-123456789',
      registrationNumber: 'REG-987654321',
    },
    
    customer: {
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 987-6543',
      address: {
        street: '456 Customer Ave',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90210',
        country: 'United States',
      },
    },
    
    items: [
      {
        id: '1',
        description: 'Cox\'s Bazar Beach Adventure Tour',
        quantity: 2,
        unitPrice: 120,
        totalPrice: 240,
        category: 'service',
      },
      {
        id: '2',
        description: 'Airport Transfer Service',
        quantity: 1,
        unitPrice: 50,
        totalPrice: 50,
        category: 'service',
      },
      {
        id: '3',
        description: 'Travel Insurance',
        quantity: 2,
        unitPrice: 25,
        totalPrice: 50,
        category: 'service',
      },
    ],
    
    subtotal: 340,
    taxes: [
      {
        name: 'Sales Tax',
        rate: 0.08,
        amount: 27.2,
        type: 'sales',
      },
    ],
    discounts: [
      {
        name: 'Early Bird Discount',
        type: 'percentage',
        value: 10,
        amount: 34,
      },
    ],
    
    totalAmount: 333.2,
    amountPaid: 333.2,
    balanceDue: 0,
    
    payment: {
      method: 'credit_card',
      cardLast4: '4242',
      transactionId: 'TXN-789012345',
      authorizationCode: 'AUTH-456789',
      processedAt: new Date('2024-01-15T14:30:00'),
    },
    
    notes: 'Thank you for choosing Arid Travel & Tours. We hope you have an amazing adventure!',
    terms: 'All bookings are subject to our terms and conditions. Cancellations must be made 48 hours in advance for full refund.',
    
    serviceType: 'travel',
    serviceDetails: {
      bookingReference: 'BT-2024-001',
      checkIn: new Date('2024-02-15'),
      checkOut: new Date('2024-02-18'),
      passengers: 2,
    },
  },
  {
    id: '2',
    receiptNumber: 'RCP-2024-002',
    type: 'booking',
    status: 'pending',
    issueDate: new Date('2024-01-20'),
    currency: 'USD',
    
    company: {
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
      taxId: 'TAX-123456789',
      registrationNumber: 'REG-987654321',
    },
    
    customer: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 456-7890',
    },
    
    items: [
      {
        id: '1',
        description: 'Flight to Paris - Economy Class',
        quantity: 1,
        unitPrice: 450,
        totalPrice: 450,
        category: 'service',
      },
      {
        id: '2',
        description: 'Seat Selection Fee',
        quantity: 1,
        unitPrice: 25,
        totalPrice: 25,
        category: 'fee',
      },
    ],
    
    subtotal: 475,
    taxes: [
      {
        name: 'Airport Tax',
        rate: 0.05,
        amount: 23.75,
        type: 'sales',
      },
    ],
    discounts: [],
    
    totalAmount: 498.75,
    amountPaid: 0,
    balanceDue: 498.75,
    
    payment: {
      method: 'credit_card',
      transactionId: 'TXN-PENDING-001',
      processedAt: new Date('2024-01-20T10:15:00'),
    },
    
    serviceType: 'flight',
    serviceDetails: {
      bookingReference: 'BF-2024-002',
      flightDetails: {
        departure: 'JFK',
        arrival: 'CDG',
        flightNumber: 'AF123',
        date: new Date('2024-03-15'),
      },
    },
  },
  {
    id: '3',
    receiptNumber: 'RCP-2024-003',
    type: 'booking',
    status: 'paid',
    issueDate: new Date('2024-01-25'),
    currency: 'USD',
    
    company: {
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
      taxId: 'TAX-123456789',
      registrationNumber: 'REG-987654321',
    },
    
    customer: {
      name: 'Michael Brown',
      email: 'michael.brown@email.com',
      phone: '+1 (555) 789-0123',
      address: {
        street: '789 Hotel Lane',
        city: 'Miami',
        state: 'FL',
        zipCode: '33101',
        country: 'United States',
      },
    },
    
    items: [
      {
        id: '1',
        description: 'Luxury Hotel Stay - 3 Nights',
        quantity: 1,
        unitPrice: 300,
        totalPrice: 300,
        category: 'service',
      },
      {
        id: '2',
        description: 'Room Service Package',
        quantity: 1,
        unitPrice: 75,
        totalPrice: 75,
        category: 'service',
      },
      {
        id: '3',
        description: 'Spa Treatment',
        quantity: 1,
        unitPrice: 120,
        totalPrice: 120,
        category: 'service',
      },
    ],
    
    subtotal: 495,
    taxes: [
      {
        name: 'Hotel Tax',
        rate: 0.12,
        amount: 59.4,
        type: 'sales',
      },
      {
        name: 'City Tax',
        rate: 0.03,
        amount: 14.85,
        type: 'city',
      },
    ],
    discounts: [
      {
        name: 'Loyalty Member Discount',
        type: 'fixed',
        value: 50,
        amount: 50,
      },
    ],
    
    totalAmount: 519.25,
    amountPaid: 519.25,
    balanceDue: 0,
    
    payment: {
      method: 'credit_card',
      cardLast4: '1234',
      transactionId: 'TXN-456789012',
      authorizationCode: 'AUTH-789012',
      processedAt: new Date('2024-01-25T16:45:00'),
    },
    
    notes: 'Thank you for choosing our luxury hotel services. We hope you enjoy your stay!',
    terms: 'Hotel bookings can be cancelled up to 24 hours before check-in for a full refund.',
    
    serviceType: 'hotel',
    serviceDetails: {
      bookingReference: 'BH-2024-003',
      checkIn: new Date('2024-03-01'),
      checkOut: new Date('2024-03-04'),
      rooms: 1,
    },
  },
  {
    id: '4',
    receiptNumber: 'RCP-2024-004',
    type: 'booking',
    status: 'paid',
    issueDate: new Date('2024-01-30'),
    currency: 'USD',
    
    company: {
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
      taxId: 'TAX-123456789',
      registrationNumber: 'REG-987654321',
    },
    
    customer: {
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+1 (555) 234-5678',
      address: {
        street: '321 Visa Street',
        city: 'Seattle',
        state: 'WA',
        zipCode: '98101',
        country: 'United States',
      },
    },
    
    items: [
      {
        id: '1',
        description: 'Tourist Visa - Japan',
        quantity: 1,
        unitPrice: 45,
        totalPrice: 45,
        category: 'service',
      },
      {
        id: '2',
        description: 'Express Processing Fee',
        quantity: 1,
        unitPrice: 25,
        totalPrice: 25,
        category: 'fee',
      },
      {
        id: '3',
        description: 'Document Translation',
        quantity: 1,
        unitPrice: 30,
        totalPrice: 30,
        category: 'service',
      },
    ],
    
    subtotal: 100,
    taxes: [
      {
        name: 'Service Tax',
        rate: 0.08,
        amount: 8,
        type: 'sales',
      },
    ],
    discounts: [],
    
    totalAmount: 108,
    amountPaid: 108,
    balanceDue: 0,
    
    payment: {
      method: 'credit_card',
      cardLast4: '5678',
      transactionId: 'TXN-234567890',
      authorizationCode: 'AUTH-345678',
      processedAt: new Date('2024-01-30T11:20:00'),
    },
    
    notes: 'Your visa application has been submitted successfully. Processing typically takes 5-7 business days.',
    terms: 'Visa processing fees are non-refundable. Approval is subject to embassy requirements.',
    
    serviceType: 'visa',
    serviceDetails: {
      bookingReference: 'BV-2024-004',
    },
  },
];

export const defaultCompanyInfo: Receipt['company'] = {
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
  taxId: 'TAX-123456789',
  registrationNumber: 'REG-987654321',
};

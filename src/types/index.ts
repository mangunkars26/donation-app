export interface Donation {
    id: string;
    amount: number;
    name: string;
    email: string;
    message?: string;
    status: 'pending' | 'confirmed' | 'failed';
    createdAt: Date;
    paymentProof?: string;
  }
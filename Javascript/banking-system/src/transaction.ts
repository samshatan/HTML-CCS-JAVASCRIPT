export interface Transactions{
  type: 'DEPOSIT' | 'WITHDRAW' | 'TRANSFER';
  amount: number;
  timestamp: Date;
  description?: string;
}
import { Transactions } from "./transaction";

export abstract class Account{
  protected balance: number;
  protected accountNumber: string;
  protected accountHolderName: string;
  protected transactions: Transactions[];
  constructor(accountHolderName: string){
    this.accountHolderName = accountHolderName;
    this.balance = 0;
    this.accountNumber = Account.generateAccountNumber();
    this.transactions = [];
  }

  static generateAccountNumber(): string{
    return Math.floor(Math.random()*10000000000).toString();
  }

  deposit(amount: number): void{
    if(amount<0){
      throw new Error("Deposit amoutn should be positive");
    }
    this.balance += amount;
    this.transactions.push({
      type: "DEPOSIT",
      amount: amount,
      timestamp: new Date(),
      description: "Deposit amount is mine first amount"
    })
  }

  abstract withdraw(amount: number): void;

  getTransactionHistory(): Transactions[]{
    return this.transactions;
  }

  getBalance(): number{
    return this.balance;
  }

  getAccountNumber(): string{
    return this.accountNumber;
  }

  getAccountHoldeName(): string{
    return this.accountHolderName;
  }
}
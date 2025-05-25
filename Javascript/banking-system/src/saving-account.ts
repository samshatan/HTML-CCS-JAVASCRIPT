import { lutimes } from "fs";
import { Account } from "./account";
import { InterestCalculate } from "./interest-calculable";

export class SavingAccount extends Account implements InterestCalculate{
  protected withdrallimit: number;
  private interestRate: number;
  constructor(accountHolderName: string){
    super(accountHolderName);
    this.interestRate = 0.04;
    this.withdrallimit = 100000;
  }

  withdraw(amount: number): void {
    if(amount>this.balance){
      throw new Error("Insufficient abalance");
    }
    if(amount > 1000000){
      throw new Error("Withdrawn limits exceeds");
    }
    this.balance -= amount;
    this.transactions.push({
      type: 'WITHDRAW',
      amount: amount,
      timestamp: new Date(),
      description: "Withdraw from saving account"
    })
  }

  updateWithdrawalLimit(newLimit: number): void{
    if(newLimit<0){
      throw new Error("It must be positive");
    }
    if(newLimit>1000000){
      throw new Error("Not exceed");
    }
    this.withdrallimit = newLimit;
  }

  calculateInterest(): number {
      return this.balance*this.interestRate;
  }
}
import { Account } from "./account";
import { InterestCalculate } from "./interest-calculable";

export class FixedDepositAccount extends Account implements InterestCalculate{

  private maturityDate: Date;
  private interestRate: number;
  constructor(accountHolderName: string, years: number){
    super(accountHolderName);
    this.maturityDate = new Date();
    this.interestRate = 0.07;
    this.maturityDate.setFullYear(this.maturityDate.getFullYear()+years);
  }
  
  withdraw(amount: number): void {
    console.log("Witdraw any amount");
    if(new Date()<this.maturityDate){
      throw new Error("cannot withdraw before maturity Date")
    }
    if(amount>this.balance){
      throw new Error("Insufficient Funds");
    }
    this.balance -= amount;
    this.transactions.push({
      type: 'WITHDRAW',
      amount: amount,
      timestamp: new Date(),
      description: "Withdraw from fixed deposit account"
    });
  }

  calculateInterest(): number {
      return this.balance *this.interestRate;
  }
}
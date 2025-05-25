import { Account } from "./account";

export class CurrentAccount extends Account{
  constructor(accountHolderNamer: string){
    super(accountHolderNamer);
  }

  withdraw(amount: number): void {
    console.log("Witdraw any amount");
    if(amount>this.balance){
      throw new Error("Insufficient abalance")
    }
    this.balance -= amount;
    this.transactions.push({
      type: 'WITHDRAW',
      amount: amount,
      timestamp: new Date(),
      description: "Withdraw from current account"
    });
  }
}
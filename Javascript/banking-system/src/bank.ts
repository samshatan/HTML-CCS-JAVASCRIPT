import { Account } from "./account";
import { CurrentAccount } from "./current-account";
import { FixedDepositAccount } from "./fixed-deposit-accounbt";
import { SavingAccount } from "./saving-account";

export class Bank{
  private accounts: Map<string, Account>;
  constructor(){
    this.accounts = new Map<string,Account>();
  }

  createAccount(accountHolderName: string, accountType: string, years?: number): Account {
    let account: Account;
    if(accountType === "SAVING"){
      account = new SavingAccount(accountHolderName);
    } else if(accountType === "CURRENT"){
      account = new CurrentAccount(accountHolderName);
    } else if(accountType === "FIXED_DEPOSIT"){
      account = new FixedDepositAccount(accountHolderName, years ?? 1);
    } else {
      throw new Error("Invalid account type");
    }
    
    this.accounts.set(account.getAccountNumber(), account);
    return account;
  }

  getAccount(accountNumber: string): Account | undefined {
    return this.accounts.get(accountNumber);
  }
}
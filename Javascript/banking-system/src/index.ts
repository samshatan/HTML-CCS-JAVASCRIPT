import { Account } from "./account";
import { Bank } from "./bank";

let pnbBank: Bank = new Bank();
let account: Account = pnbBank.createAccount("Sam", "SAVING");
account.deposit(1000);
console.log(account.getBalance());

let account2: Account = pnbBank.createAccount("John", "FIXED_DEPOSIT", 5);
account2.deposit(10000);
console.log(account2.getBalance());
"use strict";
/**
 * Example for encapsulation
 */
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    checkBalance() {
        return this.balance;
    }
}
let account = new BankAccount(1000);
console.log(account.checkBalance());

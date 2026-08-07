
class BankAccount {
    readonly accountNumber: number;
    accountHolder: string;
    balance: number;

    static bankName: string = "State Bank";
    static totalAccounts: number = 0;

    constructor(accountNumber: number, accountHolder: string, balance: number) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;

        BankAccount.totalAccounts++;

        console.log("Bank Name:", BankAccount.bankName);
    }

    display(): void {
        console.log("Account Number:", this.accountNumber);
        console.log("Account Holder:", this.accountHolder);
        console.log("Balance:", this.balance);
        console.log("-------------------------");
    }

    static displayBankDetails(): void {
        console.log("Bank Name:", BankAccount.bankName);
        console.log("Total Accounts:", BankAccount.totalAccounts);
    }
}

const acc1 = new BankAccount(101, "Lahari", 50000);
const acc2 = new BankAccount(102, "Sai", 75000);

acc1.display();
acc2.display();

BankAccount.displayBankDetails();

// Testing readonly

// acc1.accountNumber = 200;   // ❌ Error

acc1.balance = 60000;

console.log("Updated Balance:", acc1.balance);

// Testing static properties

console.log("Bank:", BankAccount.bankName);
console.log("Accounts Created:", BankAccount.totalAccounts);
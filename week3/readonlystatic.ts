
class StateBankAccount {
    readonly accountNumber: number;
    accountHolder: string;
    balance: number;

    static bankName: string = "State Bank";
    static totalAccounts: number = 0;

    constructor(accountNumber: number, accountHolder: string, balance: number) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;

        StateBankAccount.totalAccounts++;

        console.log("Bank Name:", StateBankAccount.bankName);
    }

    display(): void {
        console.log("-------------------------");
        console.log("Account Number:", this.accountNumber);
        console.log("Account Holder:", this.accountHolder);
        console.log("Balance:", this.balance);
        console.log("-------------------------");
    }

    static displayBankDetails(): void {
        console.log("Bank Name:", StateBankAccount.bankName);
        console.log("Total Accounts:", StateBankAccount.totalAccounts);
    }
}

const acc1 = new StateBankAccount(101, "Lahari", 50000);
const acc2 = new StateBankAccount(102, "Sai", 75000);

acc1.display();
acc2.display();

StateBankAccount.displayBankDetails();


// acc1.accountNumber = 200;   Error

acc1.balance = 60000;

console.log("Updated Balance:", acc1.balance);

// Testing static properties

console.log("Bank:", StateBankAccount.bankName);
console.log("Accounts Created:", StateBankAccount.totalAccounts);

class BankAccount{
    public accountNumber: string;
    private balance: number;
    private secretPin: string;
    protected accountHolderName: string;
    constructor(accountNumber: string, balance: number, secretPin: string, accountHolderName: string){
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.secretPin=secretPin;
        this.accountHolderName=accountHolderName;
    }
    public displayAccountInfo(): void{
        console.log("--------------------------------------------------");
        console.log("Account Number: " + this.accountNumber);
        console.log("Account Holder Name: " + this.accountHolderName);
        console.log("Balance: " + this.balance);
        console.log("--------------------------------------------------");
    }
    public withdrawMoney(pin: string, amount: number):void{
        if(this.verifyPin(pin) && amount <= this.balance){
            this.balance-= amount;
            console.log("Money withdrawn successfully. New balance: " + this.balance);
        }
        else if(!this.verifyPin(pin)){
             console.log("Incorrect PIN. Transaction failed.");
             return;
        }
        else{
            console.log("Insufficient funds. Transaction failed.");
            return;
        }
    }
    private verifyPin(pin:string): boolean{
        return this.secretPin === pin;
    }
}

const account1=new BankAccount("101", 5000,"1234", "John");
account1.displayAccountInfo();

account1.withdrawMoney("1234",1000);
account1.withdrawMoney("1234",6000);
account1.withdrawMoney("4321",1000);

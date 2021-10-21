class User{
    constructor( userName, emailAddress ){
        this.name = userName
        this.email = emailAddress
        this.accountBalance = 0


    }

    makeDeposit(amount){
        this.accountBalance+= amount
        return this;
    }

    makeWithdrawal(amount){
        this.accountBalance-= amount
        return this;
    }

    displayBalance(){
        console.log(`User: ${username}  ---- acount Balance ${this.accountBalance}`)
        return this;
    }

    transferMoney(otherUserName, transferAmount){
        otherUserName.makeDeposit(transferAmount)
        this.makeWithdrawal(transferAmount)
        return this;
    }

}



const newUser1 = new User("jafar", "jafar@gmail.com");
const newUser2 = new User("Ali ", "Ali@gmail.com");
console.log(newUser1)
console.log(newUser2)
newUser1.transferMoney(newUser2, 100)
console.log(newUser1)
console.log(newUser2)


const checkThis =  newUser1.makeDeposit(1000)
console.log("checkThis",checkThis)






class BankAccount {
    constructor(intRate = 0.08, balance = 0) {
      this.balance = balance;
      this.intRate = intRate;
    }
    deposit(amount) {
      this.balance += amount;
      return this;
    }
    withdraw(amount) {
      this.balance -= amount;
      if (this.balance < 0) {
        console.log("Insufficient funds: Charging a $5 fee");
        this.balance -= 5;
      }
      return this;
    }
    displayAccountInfo() {
      console.log(
        `Current Balance: $${this.balance}, Interest Rate: ${this.intRate}`
      );
      return this;
    }
    yieldInterest() {
      this.balance += this.balance * this.intRate;
      return this;
    }
  }
  
  const bank = new BankAccount();
  const bank2 = new BankAccount(0.06, 200);
  console.log(bank2.displayAccountInfo())
  
  // keep going










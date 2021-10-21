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
  
  // const bank = new BankAccount();
  // const bank2 = new BankAccount(0.06, 200);
  // console.log(bank2.displayAccountInfo())
  
  // // keep going


  class User{
    constructor( userName, emailAddress ){
        this.name = userName;
        this.email = emailAddress;
        this.account = new BankAccount();
    }

    makeDeposit(amount){
      this.account.deposit(amount)
      return this
    }

    makeWithdrawl(amount){
      this.account.withdraw(amount)
      return this
    }

    displayInfo(){
      console.log(
        `Name: ${this.name}, Account Balance: $${this.account.balance}, Interest Rate: ${this.account.intRate}`
      );
      return this;
    }

  }


const user1 = new User("UserName1" , "user1@gmail.com")
const user2 = new User("UserName2" , "user2@gmail.com")

user1.makeDeposit(50000)
console.log(user1.account.displayAccountInfo())




    
    










class Bank {
  balance = 0;
  constructor(balance) {
    this.balance = this.balance + balance;
  }
  // Gaurd Class
  credit(balance) {
    this.balance = this.balance + balance;
  }
  debit(balance) {
    this.balance = this.balance - balance;
  }
  gitBalance(balance){
    return this.balance;
  }
}
const user1 = new Bank(500);
user1.credit(100);
user1.debit(200);
console.log("The balnce is:"+user1.gitBalance());
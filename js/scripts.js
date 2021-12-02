// Business Logic
function BankAccount(name, initial) {
  this.name = name;
  this.balance = initial;
}

BankAccount.prototype.deposit = function(deposit) {
  this.balance += deposit
  return this.balance;
}
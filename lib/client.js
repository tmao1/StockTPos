// code file
/* eslint-disable prefer-arrow-callback, no-traiing-spaces, func-names,
no-unused-expressions, consistent-return */
const Portfolio = require('./portfolio');
const Stock = require('./stock');

function Client(name) {
  this.name = name;
  this.accountNumber = Math.random() * 1000000000;
  this.portfolioArray = [];
  this.cashBalance = 0;
}

Client.prototype.deposit = function (amt) {
  this.cashBalance += amt;
};

Client.prototype.withdraw = function (amt) {
  if (this.cashBalance < amt) return;
  this.cashBalance -= amt;
};

Client.prototype.purchaseStock = function (symbol, quantity, portfolioName, cb) {
  const myStock = new Stock(symbol);

  Stock.getQuote(symbol, (err, LastPrice) => {
    if (LastPrice * quantity > this.cashBalance) {
      return new Error('Not enough cash');
    }
    console.log('LastPrice: ', LastPrice);
    return LastPrice;
  });

  myStock.purchase(quantity, cb);
console.log('22222');
  if (this.portfolioArray.length === 0) {
    console.log('3333');
    const p1 = new Portfolio(portfolioName);
    p1.addStock(myStock);
    this.portfolioArray.push(p1);
  } else if
    (this.portfolioArray.map(n => n.name).filter(n => n !== portfolioName)) {
    const p1 = new Portfolio(portfolioName);
    p1.addStock(myStock);
    this.portfolioArray.push(p1);
  } else {
    this.portfolioArray.filter(n => n.name === portfolioName)[0].addStock(myStock);
  }
console.log('4444');
  this.portfolioArray.filter(portfolioName).addStock();
};


module.exports = Client;

/* eslint-disable prefer-arrow-callback, no-traiing-spaces, func-names,
no-unused-expressions, consistent-return */

const Stock = require('./stock');

function Portfolio(name) {
  this.name = name;
  this.stocks = [];
}

Portfolio.prototype.addStock = function (stock) {
  if (!(stock instanceof Stock)) return;
  this.stocks.push(stock);
};

Portfolio.prototype.getPosition = function () {
  //console.log('this stock share', this.stocks[0].purchasePricePerShare)
  return this.stocks.reduce((t, s) => t + (s.share * s.purchasePricePerShare), 0);
//  var response = this.stocks.reduce((t, stock) => t + (stock.share * stock.purchasePricePerShare), 0);
// console.log("stocks  ************* ", this.stocks);
//   var response =  this.stocks.reduce(function (t, stock) {
//     console.log('~~~~~~test', t, stock.share, stock.purchasePricePerShare);
//
//     t + (stock.share * stock.purchasePricePerShare)
//   }, 0);
//  console.log('response:', response);
//  return response
};

module.exports = Portfolio;

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
  return this.stocks.reduce((t, s) => t + (s.share * s.purchasePricePerShare), 0);
};

module.exports = Portfolio;

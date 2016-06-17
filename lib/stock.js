/* eslint-disable prefer-arrow-callback, func-names, no-unused-expressions consistent-return */

const request = require('request');
function Stock(symbol) {
  this.symbol = symbol.toUpperCase();
}

Stock.prototype.purchase = function (quantity, cb) {
  const url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${this.symbol}`;
  request({ url, json: true }, (err, rsp, body) => {
    this.purchasePricePerShare = body.LastPrice;
    this.name = body.Name;
    this.shares = quantity;
    const totalPaid = this.shares * this.purchasePricePerShare;
    this.purchaseDate = new Date();
    cb(null, totalPaid);
  });
};

Stock.prototype.sell = function (quantity, cb) {
  if (quantity > this.shares) return cb(new Error('Not enough shares'));

  const url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${this.symbol}`;
  request({ url, json: true }, (err, rsp, body) => {
  //  const cashReceived = body.LastPrice * this.shares;
    this.sellPricePerShare = body.LastPrice;
    const totalCashRefund = quantity * this.sellPricePerShare;
    this.shares -= quantity;
    cb(null, totalCashRefund);
  });
};

module.exports = Stock;

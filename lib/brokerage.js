// code file
/* eslint-disable prefer-arrow-callback, no-traiing-spaces, func-names,
no-unused-expressions, consistent-return */
const Client = require('./client');
const Stock = require('./stock');

function Brokerage(name) {
  this.name = name;
  this.clients = [];
}

Brokerage.prototype.addClient = function (client) {
  if (!(client instanceof Client)) return;
  this.clients.push(client);
};

module.exports = Brokerage;

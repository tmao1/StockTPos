/* eslint-disable prefer-arrow-callback, func-names,
space-before-function-paren, no-traiing-spaces, no-unused-expressions */

const expect = require('chai').expect;
const Portfolio = require('../lib/portfolio');
const Stock = require('../lib/stock');
const Brokerage = require('../lib/brokerage');
const Client = require('../lib/client');

describe('Client', () => {
  describe('#constructor', () => {
    it('should construct a new client object', () => {
      const c1 = new Client('Bob');
      expect(c1.name).to.equal('Bob');
      expect(c1.accountNumber).to.be.not.null;
      expect(c1.portfolioArray).to.be.length(0);
      expect(c1.cashBalance).to.equal(0);
    });
  });
  describe('#deposit', () => {
    it('should deposit cash into the client account', () => {
      const c1 = new Client('Eli');
      c1.deposit(1000);
      expect(c1.cashBalance).to.equal(1000);
    });
  });
  describe('#withdraw', () => {
    it('should withdraw cash from the client account', () => {
      const c1 = new Client('Eli');
      c1.deposit(1000);
      c1.withdraw(500);
      expect(c1.cashBalance).to.equal(500);
    });

    it('should not withdraw more than you have', () => {
      const c1 = new Client('Eli');
      c1.deposit(1000);
      c1.withdraw(2000);
      expect(c1.cashBalance).to.equal(1000);
    });
  });
  describe('#purchaseStock', () => {
    it('should save the stock in client portfolio', (done) => {
      const c1 = new Client('Eli');
      c1.deposit(10000);
      c1.purchaseStock('AAPL', 10, 'Tech', (err, totalPaid) => {
        console.log('error', err);
        expect(err).to.be.null;
        expect(totalPaid).to.be.equal(1000);
        expect(c1.portfolioArray[0].stocks[0].shares).to.equal(10);
        expect(c1.portfolioArray[0].stocks[0].name).to.equal('Apple Inc');
        expect(c1.portfolioArray[0].stocks[0].purchasePricePerShare).to.equal(100);
        expect(c1.cashBalance).to.equal(1000);
        done();
      });
    });
  });
});

/* eslint-disable prefer-arrow-callback, func-names,
space-before-function-paren, no-traiing-spaces */

const expect = require('chai').expect;
const Stock = require('../lib/stock');

describe('Stock', () => {
  describe('constructor', () => {
    it('should construct a new Stock object', () => {
      const s1 = new Stock('aapl');
      expect(s1.symbol).to.equal('AAPL');
    });
  });

  describe('#purchase', () => {
    it('should purchase stock', (done) => {
      const s1 = new Stock('aapl');
      s1.purchase(50, (err, totalPaid) => {
        expect(err).to.be.null;
        expect(totalPaid).to.be.above(0);
        expect(s1.shares).to.equal(50);
        expect(s1.name).to.equal('Apple Inc');
        expect(s1.purchasePricePerShare).to.be.above(0);
        done();
      });
    });
  });

  describe('#sell', () => {
    it('should sell stock', (done) => {
      const s2 = new Stock('aapl');
      s2.sell(30, (err, totalCashRefund) => {
        expect(err).to.be.null;
        expect(totalCashRefund).to.be.above(2500);
        expect(s2.name).to.equal('Apple Inc');
        expect(s2.sellPricePerShare).to.be.above(0);
        done();
      });
    });
  });
});

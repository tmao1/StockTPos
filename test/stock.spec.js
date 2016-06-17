/* eslint-disable prefer-arrow-callback, func-names,
space-before-function-paren, no-traiing-spaces */

const expect = require('chai').expect;
const Stock = require('../lib/stock');
const nock = require('nock');

describe('Stock', () => {
  beforeEach(() => {
    nock('http://dev.markitondemand.com/')
      .get('/MODApis/Api/v2/Quote/json?symbol=AAPL')
      .reply(200, {
        Name: 'Apple Inc',
        LastPrice: 100,
      });
  })
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
//        expect(s1.purchaseDate.getTime()).to.equal(23143213414)
        expect(totalPaid).to.be.equal(5000);
        expect(s1.shares).to.equal(50);
        expect(s1.name).to.equal('Apple Inc');
        expect(s1.purchasePricePerShare).to.equal(100);
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

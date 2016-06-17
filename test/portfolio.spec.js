/* eslint-disable prefer-arrow-callback, func-names,
space-before-function-paren, no-traiing-spaces, no-unused-expressions */

const expect = require('chai').expect;
const Portfolio = require('../lib/portfolio');
const Stock = require('../lib/stock');

describe('Portfolio', () => {
  describe('constructor', () => {
    it('should construct a new porfolio object', () => {
      const p1 = new Portfolio('Tech');
      const p2 = new Portfolio('Energy');
      expect(p1.name).to.equal('Tech');
      expect(p2.name).to.equal('Energy');
      expect(p1.stocks).to.be.length(0);
      expect(p2.stocks).to.be.length(0);
    });
  });
  describe('#addStock', () => {
    it('should add a stock to a portfolio', () => {
      const p1 = new Portfolio('Tech');
      const s1 = new Stock('APPL');
      const s2 = new Stock('ALL');
      p1.addStock(s1);
      p1.addStock(s2);
      expect(p1.stocks.length).to.equal(2);
      expect(p1.stocks[0].symbol).to.equal('APPL');
      expect(p1.stocks[1].symbol).to.equal('ALL');
    });
  });
  describe('#getPosition', () => {
    it('should calculate the position of the portfolio', () => {
      const p1 = new Portfolio('Tech');
      const p2 = new Portfolio('Energy');
      const p3 = new Portfolio('Retail');
      const s1 = new Stock('APPL');
      const s2 = new Stock('ALL');
      s1.share = 100;
      s1.purchasePricePerShare = 5;
      s2.share = 10;
      s2.purchasePricePerShare = 7;
      p1.addStock(s1);
      p1.addStock(s2);
      p3.addStock(s1);
      expect(p1.getPosition()).to.equal(570);
      expect(p2.getPosition()).to.equal(0);
      expect(p3.getPosition()).to.equal(500);
    });
  });
});

/* eslint-disable prefer-arrow-callback, func-names,
space-before-function-paren, no-traiing-spaces, no-unused-expressions */

const expect = require('chai').expect;
const Portfolio = require('../lib/portfolio');
const Stock = require('../lib/stock');
const Brokerage = require('../lib/brokerage');
const Client = require('../lib/client');

describe('Brokerage', () => {
  describe('#constructor', () => {
    it('should construct a new brokage object', () => {
      const b1 = new Brokerage('T-trade');
      expect(b1.name).to.equal('T-trade');
      expect(b1.clients).to.be.length(0);
    });
  });
describe('#addClient', () => {
  it('should add a client to a brokerage', () => {
    const b1 = new Brokerage('T-trade');
    const c1 = new Client('Tony');
    b1.addClient(c1);
    expect(b1.clients.length).to.equal(1);
    expect(b1.clients[0].name).to.equal('Tony');
  });
  it('should not add a non-client to a brokerage', () => {
    const b1 = new Brokerage('T-trade');
    const c1 = 'Tony';
    b1.addClient(c1);
    expect(b1.clients.length).to.equal(0);
  });
});


});

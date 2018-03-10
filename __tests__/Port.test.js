/* globals describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {
  it('returns an object', () => {
    expect(new Port('Calais')).toBeInstanceOf(Object);
  });
  it('has a name property', () => {
    const port = new Port('Dover');
    expect(port.name).toEqual('Dover');
  });
});

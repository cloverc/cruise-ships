/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
  it('returns an object', () => {
    expect(new Ship('BoatyMcBoatface')).toBeInstanceOf(Object);
  });
  it('it has a starting port', () => {
    const ship = new Ship('Dover');

    expect(ship.startingPort).toBe('Dover');
  });
});

describe('setSail', () => {
  it('sets starting port to be false', () => {
    // setup
    const ship = new Ship('Dover');
    // exercise
    ship.setSail();
    // verify
    expect(ship.startingPort).toBeFalsy();
  });
});

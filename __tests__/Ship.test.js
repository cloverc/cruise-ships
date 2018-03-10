/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
  it('returns an object', () => {
    expect(new Ship('BoatyMcBoatface')).toBeInstanceOf(Object);
  });
  it('it has a starting port', () => {
    // const ship = new Ship('Dover');
    const port = new Port('Dover');
    const ship = new Ship(port);

    expect(ship.currentPort).toBe(port);
  });
  it('can set sail', () => {
    // setup
    // const ship = new Ship('Dover');
    const port = new Port('Dover');
    const ship = new Ship(port);
    // exercise
    ship.setSail();
    // verify
    expect(ship.currentPort).toBeFalsy();
  });
  it('can dock at a different port', () => {
    // setup
    const dover = new Port('Dover');
    const ship = new Ship(dover);
    // exercise
    const calais = new Port('Calais');
    ship.dock(calais);
    // verify
    expect(ship.currentPort).toBe(calais);
  });
});

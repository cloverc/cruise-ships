/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });
  it('has a current port', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });
  it('can set sail', () => {
    // setup
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    // exercise
    ship.setSail();
    // verify
    expect(ship.currentPort).toBeFalsy();
    expect(port.ships).not.toContain(ship);
  });
  it('can dock at a different port', () => {
    // setup
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    // exercise
    ship.dock();
    // verify
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
  it('gets added to port on instantiation', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(port.ships).toContain(ship);
  });
});

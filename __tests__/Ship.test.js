/* eslint-env jest */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
  describe('with a port and itinerary', () => {
    let ship;
    let port;

    beforeEach(() => {
      port = {
        name: 'Dover',
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      const itinerary = {
        ports: [port],
      };
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
      expect(ship.currentPort).toBe(port);
    });

    it('can set sail', () => {
      // exercise
      ship.setSail();
      // verify
      expect(ship.currentPort).toBeFalsy();
      expect(port.removeShip).toHaveBeenCalledWith(ship);
    });
    it('can dock at a different port', () => {
      // setup
      const dover = {
        name: 'Dover',
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      const calais = {
        name: 'Calais',
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      const itinerary = {
        ports: [dover, calais],
      };
      const ship = new Ship(itinerary);

      // exercise
      ship.dock();
      // verify
      expect(ship.currentPort).toBe(calais);
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });
    it('gets added to port on instantiation', () => {
      expect(port.addShip).toHaveBeenCalledWith(ship);
    });
  });
});

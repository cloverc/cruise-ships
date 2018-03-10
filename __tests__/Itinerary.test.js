/* globals describe it expect */
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
  it('returns an object', () => {
    expect(new Itinerary('Calais')).toBeInstanceOf(Object);
  });
  it('can have ports', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');

    const itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });
});

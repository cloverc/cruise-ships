/* eslint-env jest */
// const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
  it('returns an object', () => {
    expect(new Itinerary('Calais')).toBeInstanceOf(Object);
  });
  it('can have ports', () => {
    const ports = [jest.fn(), jest.fn()];
    const itinerary = new Itinerary(ports);
    expect(itinerary.ports).toEqual(ports);
  });
});

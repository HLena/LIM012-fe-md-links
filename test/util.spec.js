const util = require('../src/util');
const mockData = require('./mockData');

describe('getStatsOfLinks function', () => {
  it('getStatsOfLinks should be a function', () => {
    expect(typeof util.getStatsOfLinks).toBe('function');
  });
  it('return {total, unique} to getStatsOfLinks(outputLinks, false)', () => {
    expect(typeof util.getStatsOfLinks(mockData.links)).toBe('object');
    expect(util.getStatsOfLinks(mockData.links, false)).toEqual({ total: 5, unique: 5 });
  });
  it('return {total, unique, broken} to getStatsOfLinks(outputLinks, true)', () => {
    expect(util.getStatsOfLinks(mockData.linksValidated, true))
      .toEqual({ broken: 1, total: 5, unique: 5 });
  });
});

describe('Test other functions', () => {
  it('brokenLinks should be a function', () => {
    expect(typeof util.brokenLinks).toBe('function');
  });
  it('uniqueLinks should be a function', () => {
    expect(typeof util.uniqueLinks).toBe('function');
  });
});

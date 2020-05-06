const cli = require('../src/cli');
// const api = require('../src/api');

// test for CLI
describe('CLI', () => {
  it('return true when path is /home/ghlena/desktop/laboratoria/', () => {
    expect(cli.existPath('/home/ghlena/Desktop/laboratoria/')).toBe(true);
  });
  it('return false when path is /home/ghlena/desktop.algo/laboratoria/', () => {
    expect(cli.existPath('/home/ghlena/desktop.algo/laboratoria/')).toBe(false);
  });
});

// tests con la lista de links returnado

const outputLinks = [
  {
    text: 'Node.js',
    href: 'https://nodejs.org/',
    file: '../src/example.md',
    status: 200,
    statusLabel: 'ok',
  },
  {
    text: 'md-links',
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    file: '../src/example.md',
    status: 200,
    statusLabel: 'ok',
  },
  {
    text: 'Node.js',
    href: 'https://developers.google.com/v8/',
    file: '../src/example.md',
    status: 200,
    statusLabel: 'failed',
  },
  {
    text: 'motor de JavaScript V8 de Chrome',
    href: 'https://developers.google.com/v8/',
    file: '../src/example.md',
    status: 200,
    statusLabel: 'ok',
  },
];
describe('return a list of a links', () => {
  it('getStatsOfLinks should be a function', () => {
    expect(typeof cli.getStatsOfLinks).toBe('function');
  });
  it('getStatsOfLinks return {total, unique} to getStatsOfLinks(outputLinks, false)', () => {
    expect(typeof cli.getStatsOfLinks(outputLinks)).toBe('object');
    expect(cli.getStatsOfLinks(outputLinks)).toBe('{total:4, unique: 4}');
  });
  it('getStatsOfLinks return {total, unique, broken} to getStatsOfLinks(outputLinks, true)', () => {

  });
});

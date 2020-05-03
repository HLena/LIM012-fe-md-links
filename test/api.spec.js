
const api = require('../src/api.js');

const outputLinks = [
  { text: 'Node.js', href: 'https://nodejs.org/', file: '../src/example.md' },
  { text: 'md-links', href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg', file: '../src/example.md' },
  { text: 'Node.js', href: 'https://developers.google.com/v8/', file: '../src/example.md' },
  { text: 'motor de JavaScript V8 de Chrome', href: 'https://developers.google.com/v8/', file: '../src/example.md' },
];

const outputLinks_validate = [
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

const stats = { total: 4, unique: 4 };
const stats_validate = { total: 4, unique: 4, broken: 0 };
const mypath = '../src/example.md';

describe('mdlikns', () => {
  it('recive a valid path (../src/example.md) and return an array of objects', (done) => {
    function callback(mypath, options) {
      try {
        expect(api.mdLinks(mypath, options)).toBe('object');
        done();
      } catch (error) {
        done(error);
      }
    }
    api.mdLinks(callback('homt/ghlena/Desktop/laboratoria', '--validate'));
  });
});


const mocks = [];
//  test con paths y opciones validos
describe('return a list of a links', () => {
  it('mdlinks should be a function', () => {
    expect(api.mdLinks()).toBe(mocks);
  });
});


// indentificar si es archivo.md o un directorio
describe('check is path is a file.md', () => {
  it('isMarkcownFile should return true to file.md', () => {
    expect(api.mdLinks.isMarkdownFile()).toBe(true);
  });
  it('isMarkcownFile should return false to file.txt or others types', () => {
    expect(api.mdLinks.isMarkdownFile()).toBe(false);
  });
});


// lee el archivo .md para extraer su contenido
describe('Read File MD retorna un array de objetos[{href, text, file}]', () => {
  it('readFileMd should return an array of objects ', () => {
    expect(mdLinks.getLinks()).toEqual('array');
  });
});

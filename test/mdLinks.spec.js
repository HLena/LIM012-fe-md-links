const fetch = require('../src/_mocks_/node-fetch');

const {
  mdLinks, getLinks, getFilePaths, concatenate, makeHttpRequest,
} = require('../src/mdLinks.js');

const mockData = require('../src/_mocks_/mockData');

describe('function getLinks', () => {
  it('return a list of objects {file, href, text}', () => {
    expect(getLinks('/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md'))
      .toEqual(mockData.links);
  });
});


describe('getFilePaths function', () => {
  it('return a list of file paths', () => {
    expect(concatenate(getFilePaths('/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc')))
      .toEqual(mockData.files);
  });
});

fetch
  .mock('https://atom.io/', 200)
  .mock('https://code.visualstudio.com/', 200)
  .mock('https://github.com/Laboratoria/bootcamp/tree/master/topics/shell', 200)
  .mock('https://github.com/Laboratoria/bootcamp/e/master/topics/scm/01-git', 404);

describe('mocking node-fetch', () => {
  it('Promise', (done) => {
    makeHttpRequest(mockData.links)
      .then((value) => {
        expect(value).toEqual(mockData.linksValidated);
        done();
      });
  });
});

describe('mdlikns on Linux', () => {
  const directoryPath = './test/direc';
  const filePath = './test/direc/file.md';

  it('return an object', () => mdLinks(directoryPath, { validate: false })
    .then((result) => expect(typeof result).toBe('object')));


  it('To ./test/direc/ and validate:false return an array of objects{file, href, text}', () => {
    mdLinks(filePath, { validate: true })
      .then((result) => {
        expect(result).toEqual(mockData.linksValidated);
      });
  });

  it('To "./test/directorio/direc) recive an error" ', () => mdLinks('./test/directorio/direc', { validate: false })
    .catch((error) => expect(error).toEqual(new Error('The path "./test/directorio/direc" is incorrect!!'))));
});

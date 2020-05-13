// const fetch = require('node-fetch');
const mockData = require('./mockData');

const {
  mdLinks, getLinks, getFilePaths, concatenate, makeHttpRequest,
} = require('../src/mdLinks.js');


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

describe('makeHttpRequest function', () => {
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

  // it('To ./test/direc/ and validate:false return an array of objects{file, href, text}', () => {
  //   mdLinks(filePath, { validate: false })
  //     .then((result) => {
  //       expect(result).toEqual(mockData.links);
  //     });
  // });

  it('To ./test/direc/ and validate:false return an array of objects{file, href, text}', () => {
    mdLinks(filePath, { validate: true })
      .then((result) => {
        expect(result).toEqual(mockData.linksValidated);
      });
  });

  it('To "./test/directorio/direc) recive an error" ', () => mdLinks('./test/directorio/direc', { validate: false })
    .catch((error) => expect(error).toEqual(new Error('The path entered not exist!!'))));
});

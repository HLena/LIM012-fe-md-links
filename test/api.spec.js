/* eslint linebreak-style: ["error", "windows"] */

const api = require('../src/api.js');

const mockData = require('./mockData');

const fetch = require('../src/__mocks__/node-fetch');

// jest.mock('node-fetch', () => jest.fn());
// const {response} = jest.requireActual('node-fetch');

// describe('funtion existPath on  Linux', () => {
//   it('return true when path is /home/ghlena/desktop/laboratoria/', () => {
//     expect(api.existPath('/home/ghlena/Desktop/laboratoria/')).toBe(true);
//   });
//   it('return false when path is /home/ghlena/desktop.algo/laboratoria/', () => {
//     expect(api.existPath('/home/ghlena/desktop.algo/laboratoria/')).toBe(false);
//   });
// });

describe('funtion existPath on Windows', () => {
  it('return true when path is "C:\\Users\\karen\\Documents\\laboratoria"', () => {
    expect(api.existPath('C:\\Users\\karen\\Documents\\laboratoria')).toBe(true);
  });
  it('return false when path is "C:\\Users\\karen\\laboratoria\\file.md"', () => {
    expect(api.existPath('C:\\Users\\karen\\laboratoria\\file.md')).toBe(false);
  });
});

describe('function truncateText', () => {
  it('return a string', () => {
    expect(typeof api.truncateText('text')).toBe('string');
  });
  it('return a string of 50 characters maximun', () => {
    expect(api.truncateText('https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg'))
      .toEqual('https://user-images.githubusercontent.com/110297/4');
  });
});

describe('functions getAbsolutePath', () => {
  // it('return an absolute path to "./test/direc/file.md" on linux', () => {
  //   const absolutePath = '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md';
  //   expect(api.getAbsolutePath('./test/direc1/md2.md')).toEqual(absolutePath);
  // });
  it('return an absolute path to ".\\test\\direc\\file.md" on Windows', () => {
    const absolutePath = 'C:\\Users\\karen\\Documents\\laboratoria\\LIM012-fe-md-links\\test\\direc\\file.md';
    expect(api.getAbsolutePath('.\\test\\direc\\file.md')).toEqual(absolutePath);
  });
});

describe('function getSlash', () => {
  it('return \\ to ".\\test\\direc1\\md2.md"', () => {
    expect(api.getSlash('.\\test\\direc1\\md2.md')).toEqual('\\');
  });
  it('return / to "./test/direc1/md2.md"', () => {
    expect(api.getSlash('./test/direc1/md2.md')).toEqual('/');
  });
});


// describe('mdlikns on Linux', () => {
//   const directoryPath = './test/direc1';
//   const filePath = './test/direc1/md2.md';
//   it('should be a function', () => {
//     expect(typeof api.mdLinks).toBe('function');
//   });
//   it('return an object', () => api.mdLinks(directoryPath, { validate: false })
//     .then((result) => expect(typeof result).toBe('object')));
//   it('To ./test/direc1/md2.md and validate:false return an array of objects{file, href, text}',
//     () => api.mdLinks(filePath, { validate: false })
//       .then((result) => expect(result).toEqual(mockData.links)));
//   it('To "./test/directorio/direc) recive an error" ',
//      () => api.mdLinks('./test/directorio/direc', { validate: false })
//     .catch((error) => expect(error).toEqual(new Error('The path entered not exist!!'))));
// });

describe('mdlikns on Windows', () => {
  const directoryPath = '.\\test\\direc';
  const filePath = '.\\test\\direc\\file.md';
  it('should be a function', () => {
    expect(typeof api.mdLinks).toBe('function');
  });
  it('should return an object', () => api.mdLinks(directoryPath, { validate: false })
    .then((result) => expect(typeof result).toBe('object')));
  it('To ".\\test\\direc\\file.md" and validate:false return an array of objects{file, href, text}',
    () => api.mdLinks(filePath, { validate: false })
      .then((result) => expect(result).toEqual(mockData.links)));
  it('".\\test\\directorio\\direc" recive an error', () => api.mdLinks('.\\test\\directorio\\direc', { validate: false })
    .catch((error) => expect(error).toEqual(new Error('The path entered not exist!!'))));
});


describe('makeHttpRequest', () => {
  afterEach(() => {
    fetch.restore();
    fetch.reset();
  });
  it('mdlinks should be a function', () => {
    expect(typeof api.makeHttpRequest).toBe('function');
  });
  it('return an object {file, href, text, status, statusText } with tha state of a link', (done) => {
    fetch
      .mock('https://es.wikipedia.org/wiki/Markdown', { status: 200, statusText: 'OK' })
      .mock('https://nodejs.org/', { status: 200, statusText: 'OK' })
      .mock('https://nodejs.org/es/', { status: 200, statusText: 'OK' })
      .mock('https://developers.google.com/v8/', { status: 200, statusText: 'OK' })
      .mock('https://nodejs.org/es/ths', { status: 404, statusText: 'Not Found' });

    api.makeHttpRequest(mockData.links).then((response) => {
      expect(response).toEqual(mockData.linksValidated);
      done();
    });
    // for (let i = 0; i < mockData.links.length; i += 1) {
    //   api.makeHttpRequest(mockData.links[i])
    //     .then((response) => {
    //       expect(response).toEqual(mockData.linksValidated[i]);
    //       done();
    //     });
    // }
  });
});

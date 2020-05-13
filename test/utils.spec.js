
const {
  truncateText, existPath, getSlash, getAbsolutePath, isMarkdownFile, getUnique, getBroken,
} = require('../src/utils');
const mockData = require('./mockData');

describe('getStatsOfLinks function', () => {
  it('return {total, unique} to getStatsOfLinks(outputLinks, false)', () => {
    expect(getUnique(mockData.links)).toBe(4);
  });
  it('return {total, unique, broken} to getStatsOfLinks(outputLinks, true)', () => {
    expect(getBroken(mockData.linksValidated)).toBe(1);
  });
});

describe('existPath function', () => {
  it('return true when path is /home/ghlena/Desktop/laboratoria/', () => {
    expect(existPath('/home/ghlena/Desktop/laboratoria/')).toBe(true);
  });
  it('return false when path is /home/ghlena/desktop.algo/laboratoria/', () => {
    expect(existPath('/home/lena/desktop/laboratoria/')).toBe(false);
  });
});


describe('getSlash function ', () => {
  it('return \\ to ".\\test\\direc1\\md2.md"', () => {
    expect(getSlash('.\\test\\direc1\\md2.md')).toEqual('\\');
  });
  it('return / to "./test/direc1/md2.md"', () => {
    expect(getSlash('./test/direc1/md2.md')).toEqual('/');
  });
});

describe('functions getAbsolutePath', () => {
  it('return an absolute path to "./test/direc/file.md" on linux', () => {
    const absolutePath = '/home/ghlena/Desktop/laboratoria/LIM012-fe-md-links/test/direc/file.md';
    expect(getAbsolutePath('./test/direc/file.md')).toEqual(absolutePath);
  });
});

describe('function truncateText', () => {
  it('return a string of 50 characters maximun', () => {
    expect(truncateText('https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg'))
      .toEqual('https://user-images.githubusercontent.com/110297/4');
  });
});


describe('isMarkdown function', () => {
  it('return true to ../test/direc/file.md', () => {
    expect(isMarkdownFile('../test/direc/file.md')).toBe(true);
  });
  it('return false to ../test/direc/file.txt', () => {
    expect(isMarkdownFile('../test/direc/file.txt')).toBe(false);
  });
});

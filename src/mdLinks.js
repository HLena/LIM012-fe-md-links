
const fs = require('fs');
// const path = require('path');
const showdown = require('showdown');
const jsdom = require('jsdom');
const fetch = require('node-fetch');

const {
  concatenate, truncateText, existPath, getSlash, getAbsolutePath, isMarkdownFile,
} = require('./utils');

const converter = new showdown.Converter();
const { JSDOM } = jsdom;

let slash = '/';

const getLinks = (mypath) => {
  const fileMd = fs.readFileSync(mypath).toString();
  const fileHtml = converter.makeHtml(fileMd);
  const dom = new JSDOM(fileHtml).window.document;
  const objs = dom.querySelectorAll('a');
  const links = [];
  objs.forEach((obj) => links.push({
    file: mypath,
    href: obj.href,
    text: truncateText(obj.textContent),
  }));
  return links;
};


const getFilePaths = (mypath) => {
  const file = fs.lstatSync(mypath);
  return (file.isFile())
    ? [mypath]
    : fs.readdirSync(mypath).map((route) => concatenate(getFilePaths(`${mypath}${slash}${route}`)));
};


const makeHttpRequest = (links) => {
  const promises = links.map((link) => new Promise((resolve) => fetch(link.href)
    .then((res) => {
      const obj = link;
      obj.status = res.status;
      obj.statusText = (res.status >= 200 && res.status < 400) ? 'Ok' : 'Fail';
      resolve(obj);
    })));
  return Promise.all(promises).then((res) => res);
};


const mdLinks = (mypath, option) => new Promise((resolve, reject) => {
  const absolutePath = getAbsolutePath(mypath);
  if (existPath(absolutePath) === true) {
    slash = getSlash(absolutePath);
    const filePaths = concatenate(getFilePaths(absolutePath));
    const markdownFiles = filePaths.filter(isMarkdownFile);
    const allLinks = concatenate(markdownFiles.map(getLinks));
    if (option.validate === true) {
      resolve(makeHttpRequest(allLinks));
    } else {
      resolve(allLinks);
    }
  } else {
    reject(new Error('The path entered not exist!!'));
  }
});

module.exports = {
  // eslint-disable-next-line max-len
  mdLinks, existPath, isMarkdownFile, getFilePaths, truncateText, getAbsolutePath, getSlash, makeHttpRequest, getLinks, concatenate,
};

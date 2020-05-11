/* eslint linebreak-style: ["error", "windows"] */

const fs = require('fs');
const path = require('path');
const showdown = require('showdown');
const jsdom = require('jsdom');

const converter = new showdown.Converter();
const { JSDOM } = jsdom;
const fetch = require('node-fetch');

let slash = '';

// const makeHttpRequest = (link) => fetch(link.href)
//   .then((response) => ({
//     file: link.file,
//     href: link.href,
//     text: link.text,
//     status: response.status,
//     statusText: (response.statusText !== 'OK') ? 'Fail' : 'Ok',
//   }));

const makeHttpRequest = (links) => new Promise((resolve, reject) => {
  resolve(Promise.all(links.map((link) => fetch(link.href)
    .then((response) => ({
      file: link.file,
      href: link.href,
      text: link.text,
      status: response.status,
      statusText: (response.statusText !== 'OK') ? 'Fail' : 'Ok',
    })))));
  reject(new Error('Hubo error de conexion'));
});


const truncateText = (text) => ((text.length > 50) ? text.substr(0, 50) : text);

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

const isMarkdownFile = (mypath) => {
  const file = path.basename(mypath);
  return file.endsWith('.md');
};

const concatenate = (data) => data.reduce((a, f) => a.concat(f), []);

const getFilePaths = (mypath) => {
  const file = fs.lstatSync(mypath);
  return (file.isFile())
    ? [mypath]
    : fs.readdirSync(mypath).map((route) => concatenate(getFilePaths(`${mypath}${slash}${route}`)));
};

const existPath = (mypath) => fs.existsSync(mypath);

const getSlash = (mypath) => ((mypath.includes('/') === true) ? '/' : '\\');

const getAbsolutePath = (mypath) => ((path.isAbsolute(mypath) === true)
  ? mypath
  : path.resolve(mypath));


const mdLinks = (mypath, option) => new Promise((resolve, reject) => {
  const absolutePath = getAbsolutePath(mypath);
  if (existPath(absolutePath) === true) {
    slash = getSlash(absolutePath);
    const filePaths = concatenate(getFilePaths(absolutePath));
    const markdownFiles = filePaths.filter(isMarkdownFile);
    const linksPerFile = concatenate(markdownFiles.map(getLinks));
    if (option.validate === true) {
      // resolve(Promise.all(linksPerFile.map((links) => makeHttpRequest(links))));
      // promise.then((data) => console.log(data));
      resolve(makeHttpRequest(linksPerFile));
    } else {
      resolve(linksPerFile);
    }
  } else {
    reject(new Error('The path entered not exist!!'));
  }
});

module.exports = {
  mdLinks, existPath, isMarkdownFile, getFilePaths, truncateText, getAbsolutePath, getSlash, makeHttpRequest,
};

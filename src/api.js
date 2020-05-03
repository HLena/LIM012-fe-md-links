/* eslint-disable no-console */

// const request = require('./request');
// const suma = (num) => num * 2;
// const rest = (num1, num2) => num1 - num2;

// module.exports = { suma, rest };
const fs = require('fs');
const path = require('path');
// let extractLinks = require('markdown-link-extractor');
const showdown = require('showdown');

const converter = new showdown.Converter();
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const fetch = require('node-fetch');


// const mypathdir = '../test/direc1';

const makeHttpRequest = (link) => fetch(link.href)
  .catch((res) => ({ status: res.status, statusText: 'Fail' }))
  .then((response) => ({
    file: link.file, href: link.href, text: link.text, status: response.status, statusText: (response.statusText !== 'OK') ? 'Fail' : 'Ok',
  }));

const getLinks = (mypath, validate) => {
  const fileMd = fs.readFileSync(mypath).toString();
  const fileHtml = converter.makeHtml(fileMd);
  const dom = new JSDOM(fileHtml).window.document;
  const objs = dom.querySelectorAll('a');
  let links = [];
  objs.forEach((obj) => links.push({ file: mypath, href: obj.href, text: obj.textContent }));
  if (validate === true) {
    console.log(validate);
    return Promise.all(links.map(makeHttpRequest));
  }
  return links;
};


const isMarkdownFile = (mypath) => {
  const file = path.basename(mypath);
  return file.endsWith('.md');
};

const searchFiles = (mypath, validate) => {
  if (fs.existsSync(mypath)) {
    const stats = fs.statSync(`${mypath}`);
    if (stats.isFile() && isMarkdownFile(mypath)) {
      const links = getLinks(mypath, validate);
      console.log(links);
    } else if (stats.isDirectory()) {
      console.log(`${mypath}`, 'is a directory');
      fs.readdir(mypath, (err, files) => {
        if (!err) {
          files.forEach((file) => {
            searchFiles(`${mypath}/${file}`, validate);
          });
        } else throw err;
      });
    }
  } else {
    console.log('this file doesn\'t exists  or isn\'t a markdown file');
  }
};

// function isPathAbsolute(path) {
//   return /^(?:\/|[a-z]+:\/\/)/.test(path);
// }

const mdLinks = (mypath, { validate = false }) => {
  let absolutePath = mypath;
  if (!path.isAbsolute(mypath)) {
    absolutePath = path.resolve(mypath);
    // console.log(absolutePath);
  }
  searchFiles(absolutePath, validate);
};

module.exports = {
  mdLinks,
};
// searchFiles(mypathdir);

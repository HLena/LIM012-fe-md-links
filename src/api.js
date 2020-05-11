
const fs = require('fs');
const path = require('path');
const showdown = require('showdown');
const jsdom = require('jsdom');


const converter = new showdown.Converter();

const { JSDOM } = jsdom;
const fetch = require('node-fetch');

let slash = '';

const makeHttpRequest = (link) => fetch(link.href)
  .then((response) => ({
    file: link.file,
    href: link.href,
    text: link.text,
    status: response.status,
    statusText: (response.statusText !== 'OK') ? 'Fail' : 'Ok',
  }));


const validateLinks = (link) => makeHttpRequest(link);

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

const mdLinks = (mypath, option) => {
  const absolutePath = (!path.isAbsolute(mypath)) ? path.resolve(mypath) : mypath;
  const allFiles = getAllMarkdownFiles(absolutePath).reduce((a, f) => a.concat(f), []);
  const markdownFiles = allFiles.filter(isMarkdownFile);
  const linksPerFile = Promise.all(markdownFiles.map(getLinks))
    .then((data) => data.reduce((a, f) => a.concat(f), []))
    .then((files) => ((option !== undefined && option.validate === true)
      ? Promise.all(files.map((file) => validateLinks(file)))
      : files));
  return linksPerFile;
};

module.exports = {
  mdLinks,
};

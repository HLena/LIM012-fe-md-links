const path = require('path');
const fs = require('fs');

const getBroken = (links) => links.filter((link) => link.statusText === 'Fail').length;

const getUnique = (links) => {
  const counts = {};
  links.forEach((link) => { counts[link.href] = 1 + (counts[link.href] || 0); });
  return Object.keys(counts).length;
};

const truncateText = (text) => ((text.length > 50) ? text.substr(0, 50) : text);

const concatenate = (data) => data.reduce((a, f) => a.concat(f), []);

const existPath = (mypath) => fs.existsSync(mypath);

const getSlash = (mypath) => ((mypath.includes('/') === true) ? '/' : '\\');


const getAbsolutePath = (mypath) => ((path.isAbsolute(mypath) === true)
  ? mypath
  : path.resolve(mypath));

const isMarkdownFile = (mypath) => {
  const file = path.basename(mypath);
  return file.endsWith('.md');
};

module.exports = {
  // eslint-disable-next-line max-len
  getBroken, getUnique, truncateText, concatenate, existPath, getSlash, getAbsolutePath, isMarkdownFile,
};

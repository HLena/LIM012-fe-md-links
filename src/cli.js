/* eslint-disable no-console */

const fs = require('fs');

const api = require('./api');

const existPath = (mypath) => fs.existsSync(mypath);

const brokenLinks = (links) => links.filter((link) => link.statusText === 'Fail').length;

const uniqueLinks = (links) => {
  const counts = {};
  links.forEach((link) => { counts[link.href] = 1 + (counts[link.href] || 0); });
  return Object.keys(counts).length;
};

const getStatsOfLinks = (links, pass) => {
  let stats = {};
  if (pass === false) {
    stats = { total: links.length, unique: uniqueLinks(links) };
  } else {
    stats = { total: links.length, unique: uniqueLinks(links), broken: brokenLinks(links) };
  }
  return stats;
};


const help = {
  usage: 'mdLinks <path> [options]',
  where: `<path> is an absolute or relative path to a directory or a file \n
          [options] can contain --validate, stats or be empty`,
  example: `mdLinks <path>                      list of links found on <path>\n
            mdLinks <path> --stats              stats of links found on <path>\n
            mdLinks <path> --validate           status of links found on <path>\n
            mdLinks <path> --stats --validate   stats of links found on <path> after getting the links status \n`,
};

const checkOptions = ({ mypath, opt1, opt2 }) => {
  if (opt1 === '--validate' && opt2 === '--stats') {
    api.mdLinks(mypath, { validate: true })
      .then((result) => getStatsOfLinks(result, true))
      .then((result) => console.table(result));
  } else if (opt1 === '--stats' && opt2 === undefined) {
    api.mdLinks(mypath)
      .then((result) => getStatsOfLinks(result, false))
      .then((result) => console.table(result));
  } else if (opt1 === '--validate' && opt2 === undefined) {
    api.mdLinks(mypath, { validate: true })
      .then((result) => console.table(result));
  } else if (opt1 === undefined && opt2 === undefined) {
    api.mdLinks(mypath)
      .then((result) => console.table(result));
  } else {
    console.log(help);
  }
};


const CommandLineInteface = () => {
  const [, , ...args] = process.argv;
  if (existPath(args[0]) === true) {
    switch (args.length) {
      case 1:
        checkOptions({ path: args[0] });
        break;
      case 2:
        checkOptions({ path: args[0], opt1: args[1] });
        break;
      case 3:
        checkOptions({ path: args[0], opt1: args[1], opt2: args[2] });
        break;
      default:
        console.log(help);
    }
  }
};

CommandLineInteface();

module.exports = {
  CommandLineInteface, checkOptions, getStatsOfLinks, existPath,
};

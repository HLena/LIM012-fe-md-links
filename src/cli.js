/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */

const api = require('./api');
const stats = require('./util');

const printStats = (data) => {
  if (data.broken !== undefined) {
    console.log(`#total:${data.total}`, `#Unique:${data.unique}`, `#Broken:${data.broken}`);
  } else {
    console.log(`#total:${data.total}`, `#Unique:${data.unique}`);
  }
};
const help = `
  usage: mdLinks <path> [options],
  where: <path> is an absolute or relative path to a directory or a file \n
          [options] can contain --validate, stats or be empty,
  example: mdLinks <path>                      list of links found on <path>\n
            mdLinks <path> --stats              stats of links found on <path>\n
            mdLinks <path> --validate           status of links found on <path>\n
            mdLinks <path> --stats --validate   stats of links found on <path> after getting the links status \n`;

const CommandLineInteface = ({ path, opt1, opt2 }) => {
  if ((opt1 === '--validate' && opt2 === '--stats') || (opt1 === '--stats' && opt2 === '--validate')) {
    api.mdLinks(path, { validate: true })
      .catch((err) => console.log(err.message))
      .then((result) => stats.getStatsOfLinks(result, true))
      .then((result) => printStats(result));
  } else if (opt1 === '--stats') {
    api.mdLinks(path, { validate: false })
      .catch((err) => console.log(err.message))
      .then((result) => stats.getStatsOfLinks(result, false))
      .then((result) => printStats(result));
  } else if (opt1 === '--validate') {
    api.mdLinks(path, { validate: true })
      .catch((err) => console.log(err.message))
      .then((result) => console.log(result));
  } else if (opt1 === undefined && opt2 === undefined) {
    api.mdLinks(path, { validate: false })
      .catch((err) => console.log(err.message))
      .then((result) => console.log(result));
  } else {
    console.log(help);
  }
};
const [, , ...args] = process.argv;
if (args.length < 4) {
  CommandLineInteface({ path: args[0], opt1: args[1], opt2: args[2] });
} else {
  console.log(help);
}

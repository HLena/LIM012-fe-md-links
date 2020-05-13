#!/usr/bin/env node
/* eslint-disable no-console */

const chalk = require('chalk');

const api = require('./mdLinks');
const { getBroken, getUnique } = require('./utils');

const printStats = (data) => {
  if (data.broken !== undefined) {
    console.log(`${chalk.green.bold('#total')}:${data.total}`,
      `${chalk.green.bold('#Unique')}:${data.unique}`,
      `${chalk.red.bold('#Broken')}:${data.broken}`);
  } else {
    console.log(`${chalk.green.bold('#total')}:${data.total}`, `${chalk.green.bold('#Unique')}:${data.unique}`);
  }
};

const printLinks = (links) => {
  links.forEach((link) => {
    if (link.status === undefined) {
      console.log(`${chalk.yellow.bold(link.file)}`,
        `${chalk.green.bold(link.href)}`,
        `${chalk.white.bold(link.text)}`);
    } else {
      console.log(`${chalk.yellow.bold(link.file)}`,
        `${chalk.green.bold(link.href)}`,
        `${chalk.white.bold(link.text)}`,
        `${link.status}`,
        `${link.statusText}`);
    }
  });
};
const help = `
  ${chalk.green.bold('Usage:')} md-links ${chalk.yellow.bold('<path>')} ${chalk.blue.bold('[options]')},
  ${chalk.green.bold('Where:')} ${chalk.yellow.bold('<path>')} is an absolute or relative path of a directory or a file \n
        ${chalk.blue.bold('[options]')} can contain --validate, --stats, both or be empty,\n
        ${chalk.green.bold('Examples:')}
        mdLinks ${chalk.yellow.bold('<path>')} .....................get list of links\n
        mdLinks ${chalk.yellow.bold('<path>')} --stats .............get stats of links\n
        mdLinks ${chalk.yellow.bold('<path>')} --validate ..........get status of links \n
        mdLinks ${chalk.yellow.bold('<path>')} --stats --validate ..get stats of links after getting the links status \n`;

const callMdLinks = (path, option, stats) => {
  const promise = api.mdLinks(path, option);
  promise
    .then((result) => {
      let data = {};
      if (stats === 'stats') {
        data = { total: result.length, unique: getUnique(result) };
        printStats(data);
      } else if (stats === 'validateStats') {
        data = { total: result.length, unique: getUnique(result), broken: getBroken(result) };
        printStats(data);
      } else {
        printLinks(result);
      }
    })
    .catch((err) => console.log(`${chalk.red.bold(err.message)}`));
};

const CLI = ({ path, opt1, opt2 }) => {
  if ((opt1 === '--validate' && opt2 === '--stats') || (opt1 === '--stats' && opt2 === '--validate')) {
    callMdLinks(path, { validate: true }, 'validateStats');
  } else if (opt1 === '--stats' && opt2 === undefined) {
    callMdLinks(path, { validate: false }, 'stats');
  } else if (opt1 === '--validate' && opt2 === undefined) {
    callMdLinks(path, { validate: true });
  } else if (opt1 === undefined && opt2 === undefined) {
    callMdLinks(path, { validate: false });
  } else {
    console.log(`${chalk.red.bold('Something is wrong!!')}`);
    console.log(help);
  }
};

const [, , ...args] = process.argv;
if (args.length < 4) {
  if (args[0] === '--help' || args[0] === '-h') {
    console.log(help);
  } else if (args[0] === undefined) {
    console.log(help);
  } else {
    CLI({ path: args[0], opt1: args[1], opt2: args[2] });
  }
} else {
  console.log(help);
}

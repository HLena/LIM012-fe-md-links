#!/usr/bin/env node
/* eslint-disable no-console */

const chalk = require('chalk');

const api = require('./mdLinks');
const { getBroken, getUnique } = require('./utils');

const printStats = (data) => {
  let output = `${chalk.green.bold('#Total')}:${data.total}\n${chalk.green.bold('#Unique')}:${data.unique}\n`;
  output += (data.broken) ? `${chalk.red.bold('#Broken')}:${data.broken}\n` : '';
  return output;
};

const printLinks = (links) => {
  let output = '';
  links.forEach((link) => {
    output += `${chalk.cyan.bold(link.file)} ${chalk.green.bold(link.href)} ${chalk.magenta.bold(link.text)} `;
    output += (link.status) ? `${link.status} ${link.statusText}\n` : '\n';
  });
  return output;
};
const help = `
  ${chalk.green.bold('Usage:')} md-links ${chalk.cyan.bold('<path>')} ${chalk.blue.bold('[options]')},
  ${chalk.green.bold('Where:')} ${chalk.cyan.bold('<path>')} is an absolute or relative path of a directory or a file \n
        ${chalk.blue.bold('[options]')} can contain --validate, --stats, both or be empty,\n
        ${chalk.green.bold('Examples:')}
        mdLinks ${chalk.cyan.bold('<path>')} .....................get list of links\n
        mdLinks ${chalk.cyan.bold('<path>')} --stats .............get stats of links\n
        mdLinks ${chalk.cyan.bold('<path>')} --validate ..........get status of links \n
        mdLinks ${chalk.cyan.bold('<path>')} --stats --validate ..get stats of links after getting the links status \n`;


const CLI = ({ path, opt1, opt2 }) => {
  let promise = {};
  let data = {};
  if ((opt1 === '--validate' && opt2 === '--stats') || (opt1 === '--stats' && opt2 === '--validate')) {
    promise = api.mdLinks(path, { validate: true })
      .then((result) => {
        data = { total: result.length, unique: getUnique(result), broken: getBroken(result) };
        return printStats(data);
      })
      .catch((err) => `${chalk.red.bold(err.message)}`);
  } else if (opt1 === '--stats' && opt2 === undefined) {
    promise = api.mdLinks(path, { validate: false })
      .then((result) => {
        data = { total: result.length, unique: getUnique(result) };
        return printStats(data);
      })
      .catch((err) => `${chalk.red.bold(err.message)}`);
  } else if (opt1 === '--validate' && opt2 === undefined) {
    promise = api.mdLinks(path, { validate: true })
      .then((result) => printLinks(result))
      .catch((err) => `${chalk.red.bold(err.message)}`);
  } else if (opt1 === undefined && opt2 === undefined) {
    promise = api.mdLinks(path, { validate: false })
      .then((result) => printLinks(result))
      .catch((err) => `${chalk.red.bold(err.message)}`);
  } else {
    promise = new Promise((res) => res(`${chalk.red.bold('Something is wrong!!')}\n ${help}`));
  }
  return promise;
};

const [, , ...args] = process.argv;
if (args.length < 4) {
  if (args[0] === '--help' || args[0] === '-h') {
    console.log(help);
  } else if (args[0] === undefined) {
    console.log(help);
  } else {
    CLI({ path: args[0], opt1: args[1], opt2: args[2] })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
} else {
  console.log(help);
}

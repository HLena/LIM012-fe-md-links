/* eslint-disable no-console */
const isValid = require('is-valid-path');

const api = require('./api');

const validatePath = (mypath) => !!(isValid(mypath));
// let options = { validate: false };

const validateCommands = (opt1, opt2) => {
  let caseOption = 0;
  if (opt1 === '--validate' && opt2 === '--stats') {
    // options = { validate: true };
    caseOption = 4;
  } else if (opt1 === '--stats' && opt2 === undefined) {
    caseOption = 3;
    // options = { validate: false };
  } else if (opt1 === '--validate' && opt2 === undefined) {
    caseOption = 2;
    // options = { validate: true };
  } else if (opt1 === undefined && opt2 === undefined) {
    caseOption = 1;
    // options = { validate: false };
  }
  return caseOption;
};


// validate y stats => caso 4
// stats => caso 3
// validate => caso 2
// nothing => caso 1
// error => caso 0

const getStatsOfLinks = (links, caseOption) => {
  // something
};

// const mypathdir = '../test/direc1';

const CommandLineInteface = () => {
  const [, , mypath, ...options] = process.argv;
  let caseOption;
  if (mypath) {
    switch (options.length) {
      case 0:
        caseOption = validateCommands();
        break;
      case 1:
        caseOption = validateCommands(options[0]);
        break;
      case 2:
        caseOption = validateCommands(options[0], options[1]);
        break;
      default:
        console.log('numero de comandos ingresados invalido');
    }
  }
  if (caseOption !== 0) {
    if (validatePath(mypath)) {
      console.log(caseOption);
      switch (caseOption) {
        case 1:
          api.mdLinks(mypath);
          break;
        case 2:
          api.mdLinks(mypath, { validate: true });
          break;
        case 3:
          api.mdLinks(mypath);
          break;
        case 4:
          api.mdLinks(mypath, { validate: true });
          break;
        default:
          // something
      }
    }
  }
};

CommandLineInteface();

module.exports = {
  CommandLineInteface, validatePath, validateCommands, getStatsOfLinks,
};

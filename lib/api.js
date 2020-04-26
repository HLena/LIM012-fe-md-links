/* eslint-disable no-console */

// const request = require('./request');
// const suma = (num) => num * 2;
// const rest = (num1, num2) => num1 - num2;

// module.exports = { suma, rest };
const fs = require('fs');

const mypathdir = '../test/direc1';

const mdLink = (path, { validate, state }) => [];

const readFile = (path) => [];

const makeHttpRequest = (link) => { };

const searchFiles = (path) => {
  // console.log(`padre:${path}`);
  fs.readdir(path, (err, files) => {
    // let mypath;
    files.forEach((file) => {
      // mypath = fs.statSync(`${path}/${file}`);
      // if (mypath.isFile()) {
      //   console.log(`${path}/${file}`, 'is a file');
      // } else if (mypath.isDirectory()) {
      //   console.log(`${path}/${file}`, 'is a directory');
      //   searchFiles(`${path}/${file}`);
      // }
      fs.stat(`${path}/${file}`, (error, stats) => {
        if (!err) {
          if (stats.isFile()) {
            console.log(`${path}/${file} is file`);
          } else if (stats.isDirectory()) {
            console.log(`${path}/${file} is directory`);
            searchFiles(`${path}/${file}`);
          }
        } else throw error;
      });
      // console.log(index);
    });
  });
};


searchFiles(mypathdir);

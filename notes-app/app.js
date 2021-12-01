// const add = require('./utils.js')

// const sum = add(4, -2)
// console.log(sum);
const chalk = require('chalk')
const getNotes = require('./notes.js');

console.log(chalk.red.bold.underline(getNotes()));

//npm init is going to intialize npm
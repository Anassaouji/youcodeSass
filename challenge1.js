const prompt = require('prompt-sync')();
const name = prompt('What is your name? ');
const age = prompt('What is your age? ');
console.log(`Hello ${name}! Your age is ${age}.`);
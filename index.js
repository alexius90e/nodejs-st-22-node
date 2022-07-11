import * as readline from 'node:readline';

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

readlineInterface.on('line', reverseString);

function reverseString(str) {
  console.log(str.split('').reverse().concat('\n').join(''));
}

import * as readline from 'node:readline';

console.log("Enter something in CLI\nTo exit press Ctrl+C \n");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

readlineInterface.on('line', reverseString);

function reverseString(str: string): void {
  console.log(str.split('').reverse().concat('\n').join(''));
}
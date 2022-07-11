import * as fs from 'fs';
import * as csvtojson from 'csvtojson';

const csvFilePath = './csv/nodejs-hw1-ex1.csv';
const readableStream = fs.createReadStream(csvFilePath).pipe(csvtojson());
const writableStream = fs.createWriteStream('./src/result.txt');

readableStream.on('data', (chunk: Buffer): void => {
  writableStream.write(chunk.toString());
});

readableStream.on('error', (error: Error): void => console.error(error.message));

writableStream.on('ready', () => console.log('The file is ready'));

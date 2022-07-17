import * as fs from 'fs';
import * as csvtojson from 'csvtojson';

const csvFilePath = './csv/nodejs-hw1-ex1.csv';
const csvtojsonParams = {
  checkType: true,
  headers: ['book', 'author', 'amount', 'price'],
};

const writableStream = fs.createWriteStream('./csv/result.txt');

const readableStream = fs.createReadStream(csvFilePath);

readableStream
  .pipe(csvtojson(csvtojsonParams))
  .on('data', (chunk: Buffer): void => {
    writableStream.write(chunk.toString());
  });

readableStream.on('error', (error: Error): void =>
  console.error(error.message),
);

writableStream.on('ready', () =>
  console.log('The file is ready, path: "./csv/result.txt"'),
);

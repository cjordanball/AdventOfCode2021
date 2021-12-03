import * as fs from 'fs';
import { binaryStringToDecimalConverter } from './helperFuncs.mjs';
import { boilDownArray } from './helperFuncs.mjs';

const dataArray = fs.readFileSync('./data.txt',{ encoding: 'utf8', flag:'r' })
    .split('\n');

let OGR = boilDownArray(dataArray, 'OGR')[0].split('').map((val) => parseInt(val, 10));
let CSR = boilDownArray(dataArray, 'CSR')[0].split('').map((val) => parseInt(val, 10));


console.log(binaryStringToDecimalConverter(OGR) * binaryStringToDecimalConverter(CSR));
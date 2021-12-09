import * as fs from 'fs';
import { startUp } from './helpers.mjs';

startUp();

const data = fs.readFileSync('./data.txt',{ encoding: 'utf8', flag:'r' })
    .split('\n')
    .cjbxFormatData()

console.log('data: ', data);

let uniqueCount = data.reduce((val1, val2) => {
    return val1 + val2.length;
}, 0);

console.log(`The answer is: ${uniqueCount}`);
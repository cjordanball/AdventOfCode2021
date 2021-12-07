import * as fs from 'fs';
import { startUp } from './helpers.mjs';

startUp();

// get the data and put into a form [ {x: val, y: val}, {x: val, y: val}]
const dataArray = fs.readFileSync('./data.txt',{ encoding: 'utf8', flag:'r' })
    .split(',')
    .map((val) => parseInt(val, 10))

const lowBound = Math.min(...dataArray);
const highBound = Math.max(...dataArray);
const resultsArray = [];

for (let i = lowBound; i <= highBound; i++) {
    resultsArray.push(dataArray.cjbxSimpleScore(i));
}

console.log(`The answer is: ${Math.min(...resultsArray)}`);
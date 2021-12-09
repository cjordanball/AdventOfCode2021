import * as fs from 'fs';
import { startUp } from './helpers.mjs';

startUp();

const data = fs.readFileSync('./data.txt',{ encoding: 'utf8', flag:'r' })
    .split('\n')
    .cjbxProblem2Format();

let res = data.map((entryArray) => {
    return entryArray.cjbxSolveEntry();
});


let reducedRes = res.reduce((val1, val2) => {
    return val1 + val2;
}, 0);

console.log('The answer is: ', reducedRes);
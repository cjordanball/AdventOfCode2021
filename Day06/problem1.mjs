import * as fs from 'fs';
import { updateCurrentState } from './helpers.mjs';

let currentState = {
    day0: 0,
    day1: 0,
    day2: 0,
    day3: 0,
    day4: 0,
    day5: 0,
    day6: 0,
    day7: 0,
    day8: 0,
}
const dataArray = fs.readFileSync('./data.txt',{ encoding: 'utf8', flag:'r' })
    .split(',')
    .map((dayNumber) => 'day' + dayNumber)
    .forEach((dataPoint) => {
        currentState[dataPoint] += 1;
    });

for (let i = 0; i < 256; i++) {
    currentState = updateCurrentState(currentState);
}

let sumArray = [];

for (let val in currentState) {
    sumArray.push(currentState[val]);
}

let sum = sumArray.reduce((val1, val2) => {
    return val1 + val2;
}, 0);


console.log(`The answer is: ${sum}.`);
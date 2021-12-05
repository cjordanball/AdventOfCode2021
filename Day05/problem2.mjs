import * as fs from 'fs';
import { startUp, objectHolder } from './helpers.mjs';

startUp();

// get the data and put into a form [ {x: val, y: val}, {x: val, y: val}]
const dataArray = fs.readFileSync('./data.txt',{ encoding: 'utf8', flag:'r' })
    .split('\n')
    .cjbxFormatData();

// remove any lines that are not vertical or horizontal or diagonal
const filteredLineData = dataArray.cjbxRemoveExcessLines({diagonalsIncluded: true});

filteredLineData.forEach((segment) => {
    segment.cjbxAddPointsToObjectHolder();
});

let counter = 0;

let keysArray = Object.keys(objectHolder);

keysArray.forEach((point) => {
    if (objectHolder[point] >= 2) {
        counter += 1;
    } 
})

console.log('The total count is: ', counter);
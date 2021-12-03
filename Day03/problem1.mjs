import * as fs from 'fs';
import { binaryStringToDecimalConverter, getColumnSums } from './helperFuncs.mjs';


// this section just doublechecks to make sure our data is in the form claimed by the problem statement

const dataArray = fs.readFileSync('./data.txt',{ encoding: 'utf8', flag:'r' })
    .split('\n');
const formTest = /^[01]{12}$/
const testedData = dataArray.filter((val) => {
    return formTest.test(val);
})
if (dataArray.length !== testedData.length) throw("The data is not valid!");

// okay, the data is valid, let's go!
let resArray = getColumnSums(dataArray).resArray;

let gammaRay = resArray.map((val) => {
    return val > 500 ? 1 : 0
});

let epsilonRay = resArray.map((val) => {
    return val > 500 ? 0 : 1
});

console.log(binaryStringToDecimalConverter(gammaRay) * binaryStringToDecimalConverter(epsilonRay));
import * as fs from 'fs';
import { startUp } from './helpers.mjs';

startUp();

// get the data
const dataArray = fs.readFileSync('./data.txt',{ encoding: 'utf8', flag:'r' })
    .split('\n');

// split the data into an array of bingo numbers to be called and an array of rows of cards
const { callArray, rowsArray } = dataArray.cjbxSeparateCallsFromBoards();

// use the array of rows of cards above to get and array of bingo boards
let boards = rowsArray.cjbxCreateBoards();

// until a winner is found or we run out of numbers, mark all boards, then check for a winner, repeat
// if a winner is found, add up the card, multiply, and log out the answer
const callArrayLength = callArray.length;
let weHaveAWinner = false;
let callNumberIndex = 0;

while(weHaveAWinner === false && callNumberIndex < callArrayLength) {
    let hotBoard = boards.cjbxMarkBoards(callArray[callNumberIndex])
        .cjbxCheckForWinner();
    if(hotBoard) {
        weHaveAWinner = true;
        console.log('theAnswer: ', hotBoard.cjbxGetArraySum() * callArray[callNumberIndex]);
    };
    callNumberIndex += 1;
}

if (!weHaveAWinner) {
    console.error("No winning card detected!");
}

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


// play the game until only one card remains - take the array of boards, mark all boards,
// then check for winners and remove them from the array of boards, repeat.  When only one
// board is left, get the remaining card 
const callArrayLength = callArray.length;
let boardsCopy = boards.slice();
let callNumberIndex = 0;

while(boardsCopy.length > 1 && callNumberIndex < callArrayLength) {
    boardsCopy = boardsCopy.cjbxMarkBoards(callArray[callNumberIndex])
        .cjbxRemoveWinners()
    callNumberIndex += 1;
}

if (boardsCopy.length > 1) {
    console.error("No loser card detected!");
}

// continue playing the game with the remaining card until it wins, in the manner of problem 1,
// except only with one card, then log out the answer:
let weHaveAWinner = false;

while(weHaveAWinner === false && callNumberIndex < callArrayLength) {
    let hotBoard = boardsCopy.cjbxMarkBoards(callArray[callNumberIndex])
        .cjbxCheckForWinner();
    if(hotBoard) {
        weHaveAWinner = true;
        console.log('theAnswer: ', hotBoard.cjbxGetArraySum() * callArray[callNumberIndex]);
    };
    callNumberIndex += 1;
}




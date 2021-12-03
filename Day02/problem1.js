const fs = require('fs');

const myArr = fs.readFileSync('./data.txt',{ encoding: 'utf8', flag:'r' })
    .split('\n');

let myDepth = myForward = 0;

myArr.forEach((val) => {
    valArray = val.trim().split(' ');

    const movementInt = parseInt(valArray[1], 10);

    switch (valArray[0]) { 
        case 'forward':
            myForward += movementInt;
            break;
        case 'up':
            myDepth -= movementInt;
            if (myDepth < 0) { throw 'Flying Submarine' };
            break;
        case 'down':
            myDepth += movementInt;
            break;
        default:;
            throw("ERROR - in default case");
    }
});

// print out the answer
console.log(myDepth * myForward);
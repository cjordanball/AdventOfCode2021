const fs = require('fs');

const myArr = fs.readFileSync('./data.txt',{ encoding: 'utf8', flag:'r' })
    .split('\n');

// const myArr = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
let aim = myDepth = myForward = 0;

console.log('aim: ', aim);
console.log('myDepth: ', myDepth);
console.log('myForward: ', myForward);

myArr.forEach((val) => {
    valArray = val.trim().split(' ');

    const movementInt = parseInt(valArray[1], 10);

    switch (valArray[0]) { 
        case 'forward':
            myForward += movementInt;
            myDepth += movementInt * aim;
            break;
        case 'up':
            aim -= movementInt;
            break;
        case 'down':
            aim += movementInt;
            break;
        default:;
            throw("ERROR - in default case");
    }
});

// print out the answer
console.log(myDepth * myForward);
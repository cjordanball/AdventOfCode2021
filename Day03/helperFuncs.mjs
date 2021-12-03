// takes in an array of 0 or 1 values as numbers and returns a decimal
// number.  Originally meant to take a string representing a binary number
export const binaryStringToDecimalConverter = (inputArray) => {
    const arrayLength = inputArray.length;
    let returnVal = inputArray.reduce((prevVal, currVal, ind) => {
        return prevVal += (currVal * (2**(arrayLength - ind - 1))); 
    }, 0)
   
    return (returnVal);
}

// takes an array of the input numbers as a parameter and returns an
// object consisting of targetNum, essentially the integer equal to or
// greater than the midpoint, and resArray, a count of the ones in each column
// for the entries
export const getColumnSums = (dataArray) => {
    let targetNum = Math.ceil(dataArray.length / 2);
    let resArray = [];
    for (let i = 0; i < dataArray[0].length; i++) {
        resArray.push(0);
    }

    dataArray.forEach((val) => {
        let valArray = val.split('').map((val) => parseInt(val, 10));
        valArray.forEach((stringVal, stringInd) => {
            resArray[stringInd] += stringVal
        });
    })
    return {
        targetNum,
        resArray
    }
};



// This is uses in the second problem.  It takes an array of numbers,
// the column we are looking at, and whether which of the two modes we are applying
export const stripOutItems = (numberArray, bitPosition, criteria) => {
    let columnSums = getColumnSums(numberArray);

    let numbers = numberArray.filter((val) => {
        if (criteria === 'more') {
            return columnSums.resArray[bitPosition] >= columnSums.targetNum ? val[bitPosition] === "1" : val[bitPosition] === "0";
        } else {
            return columnSums.resArray[bitPosition] < columnSums.targetNum ? val[bitPosition] === "1" : val[bitPosition] === "0";
        }
    })

    return numbers;
}

// this method takes the array, and which "rating" we are calculating
//  and throws out items based on the column, until only one remains
export const boilDownArray = (arrayToBoil, rating) => {
    let copyArray = arrayToBoil.slice();
    const criteria = rating === 'OGR' ? 'more' : 'less';
    let counter = 0;

    while (copyArray.length > 1) {
        copyArray = stripOutItems(copyArray, counter, criteria);
        counter += 1; 
    }
    return copyArray;
}
const solveWiring = (input) => {
    const keyArray = [];
    let sortedInput = input.map((val) => {
        return val.split('').sort().join('');
    })
    // get numbers
    let index1 = sortedInput.findIndex((val) => {
        if (val) {
            return val.length === 2;
        } else if (val === null) {

        } else {
            throw("Messed up in index7");
        }
    });
    keyArray[1] = sortedInput[index1];
    sortedInput[index1] = null;

    let index7 = sortedInput.findIndex((val) => {
        if (val !== null) {
            return val.length === 3;
        } else if (val === null) {

        } else {
            throw("Messed up in index7");
        }
    });
    keyArray[7] = sortedInput[index7];
    sortedInput[index7] = null;

    let index4 = sortedInput.findIndex((val) => {
        if (val !== null) {
            return val.length === 4;
        } else if (val === null) {

        } else {
            throw("Messed up in index4");
        }
    });
    keyArray[4] = sortedInput[index4];
    sortedInput[index4] = null;

    let index8 = sortedInput.findIndex((val) => {
        if (val !== null) {
            return val.length === 7;
        } else if (val === null) {

        } else {
            throw("Messed up in index8");
        }
    });
    keyArray[8] = sortedInput[index8];
    sortedInput[index8] = null;

    let index3 = sortedInput.findIndex((val) => {
        if (val != null) {
            return val.length === 5 &&
            val.includes(keyArray[1][0]) &&
            val.includes(keyArray[1][1]);
        } else if (val === null) {

        } else {
            throw("Messed up in index8");
        }
    });
    keyArray[3] = sortedInput[index3];
    sortedInput[index3] = null;

    let index9 = sortedInput.findIndex((val) => {
        if (val) {
            return val.length === 6 &&
            val.includes(keyArray[3][0]) &&
            val.includes(keyArray[3][1]) &&
            val.includes(keyArray[3][2]) &&
            val.includes(keyArray[3][3]) &&
            val.includes(keyArray[3][4]);
        }
    });
    keyArray[9] = sortedInput[index9];
    sortedInput[index9] = null;
    let index0 = sortedInput.findIndex((val) => {
        if (val) {
            return val.length === 6 && val.includes(keyArray[7][0]) &&
            val.includes(keyArray[7][1]) &&
            val.includes(keyArray[7][2])
        };
    });
    keyArray[0] = sortedInput[index0];
    sortedInput[index0] = null;
    let index6 = sortedInput.findIndex((val) => {
        if (val) {
            return val.length === 6;
        }
    });
    keyArray[6] = sortedInput[index6];
    sortedInput[index6] = null;

    let letterArray9 = keyArray[9].split('');
    const missingLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g'].find((val) => {
        return !letterArray9.includes(val);
    });

    let index5 = sortedInput.findIndex((val) => {
        if (val) {
            return val.length === 5 && val.includes(missingLetter);
        }
    })
    keyArray[2] = sortedInput[index5];
    sortedInput[index5] = null;
    keyArray[5] = sortedInput.find((val) => val);

    // console.log(keyArray);

    return keyArray;
}

export const startUp = () => {
    Array.prototype.cjbxFormatData = function(ind) {
        return this.map((entry) => {
            let splitArr = entry.split(/\s\|\s/)
            return splitArr[1];
        })
        .map((textLine) => {
            return textLine.split(' ')
            .filter((item) => {
                return [2, 3, 4, 7].includes(item.length)
            });
        })
    }

    Array.prototype.cjbxProblem2Format = function(ind) {
        
        return this.map((entry) => {
            return entry.split(/\s\|\s/)
        })
        .map((val) => {
            if (val.length === 2) {
                return [
                    val[0].split(' ').sort((val1, val2) => val1.length - val2.length),
                    val[1].split(' ').map((item) => {
                        return item.split('').sort().join('');
                    })
                ]
            }
        })
    }

    Array.prototype.cjbxSolveEntry = function() {
        let wiringKey = solveWiring(this[0]);
        let numStrings = this[1]
        .map((val) => {
            return wiringKey.findIndex((entry) => val === entry);
        })
        let returnNum = (numStrings[3] + numStrings[2] * 10 + numStrings[1] * 100 + numStrings[0] * 1000);
        return returnNum;
    }
};
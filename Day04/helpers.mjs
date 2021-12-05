export const isWinnerRow = (rowArray) => {
    let hotNums = rowArray.filter((val) => {
        return val === true
    })
    return hotNums.length === 5;

}

export const hasWinnerRow = (boardArray) => {
    let hotRows = boardArray.filter((rowArray) => {
        return isWinnerRow(rowArray);
    });
    return hotRows.length > 0;
}

export const hasWinnerColumn = (boardArray) => {
    for (let i = 0; i < 5; i++) {
        const columnArray = [];
        boardArray.forEach((rowArray) => {
            columnArray.push(rowArray[i])
        })
        if (isWinnerRow(columnArray)) {
            return true;
        }
    }
    return false;
}

export const isAWinner = (boardArray) => {
    return (hasWinnerColumn(boardArray) || hasWinnerRow(boardArray));
}

export const startUp = () => {
    Array.prototype.cjbxHello = function () {
    console.log("Hello, my Array!");
    console.log("this: ", this);
    return this;
    }
    Array.prototype.cjbxCreateBoards = function () {
        const BoardsArray = [];
        let rowsNum = this.length;
        let rowLength = this[0].length;
        for (let i = 0; i < this.length / rowLength; i++) {
            let boardNumber = i * rowLength
            let newBoard = [];
            for (let j = 0; j < rowLength; j++) {
                newBoard[j] = this[boardNumber + j].map((val) => parseInt(val, 10));
            }
            BoardsArray.push(newBoard)
        }
        return BoardsArray;
    }
    Array.prototype.cjbxSeparateCallsFromBoards = function() {
        const newThis = this.slice();
        const callArray = newThis
        .splice(0, 1)[0]
        .split(',')
        .map((val) => parseInt(val, 10));
    
        const rowsArray = newThis
            .filter((val) => {
                return val !== '';
            })
            .flatMap((rowString) => {
                return rowString.split(',');
            })
            .map((string) => {
                return string
                    .trim()
                    .split(/\s{1,}/)
            })


        return {
            callArray,
            rowsArray
        }
    }
    Array.prototype.cjbxMarkBoards = function(target) {
        let newThis = this.slice();
        newThis.forEach((board) => {
            board.forEach((row) => {
                row.map((entry, ind) => {
                    if (entry === target) {
                        row[ind] = true;
                    }
                })
            })
        })
        return newThis;
    }
    Array.prototype.cjbxCheckForWinner = function() {
        let hotBoard;
        this.forEach ((board) => {
            if (isAWinner(board)) {
                hotBoard = board;
            }
        })
        return hotBoard;
    }
    Array.prototype.cjbxGetArraySum = function() {
        let summedRowBoard = this.map((row) => {
            return row.reduce((priorVal, afterVal, ind) => {
                if (typeof afterVal === 'number') {
                    return priorVal + afterVal
                } else {
                    return priorVal
                }
            }, 0)
        });
        return summedRowBoard.reduce((priorVal, afterVal) => {
            return priorVal + afterVal;
        }, 0)
    }
    Array.prototype.cjbxRemoveWinners = function() {
        let newThis = this.filter((board ) => {
            return !isAWinner(board);
        })
        return newThis;

    }
};

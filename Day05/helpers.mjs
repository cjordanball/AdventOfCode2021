export const objectHolder = {};

const addToObjectHolder = (pointName) => {
    if (!objectHolder[pointName]) {
        objectHolder[pointName] = 1;
    } else {
        objectHolder[pointName] += 1;
    }
}

export const startUp = () => {
    Array.prototype.cjbxFormatData = function() {
        return this.map((row) => {
            return row.split('->');
        })
        .map((entry) => {
            let part1 = entry[0].split(',')
                .map((num) => parseInt(num, 10));
            let part2 = entry[1].split(',')
                .map((num) => parseInt(num, 10));
            return [
                {
                    x: part1[0],
                    y: part1[1]
                },
                {
                    x: part2[0],
                    y: part2[1]
                }
            ]
        })
    }
    Array.prototype.cjbxRemoveExcessLines = function(options) {
        return this.filter((line) => {
            return options.diagonalsIncluded ?
                line[0].x === line[1].x || line[0].y === line[1].y || Math.abs(line[0].y - line[1].y) === Math.abs(line[0].x - line[1].x) :
                line[0].x === line[1].x || line[0].y === line[1].y 
        });
    }
    
    Array.prototype.cjbxAddPointsToObjectHolder = function() {
        const rise = this[0].y - this[1].y;
        const run = this[0].x - this[1].x;
        const slope = run === 0 ? undefined : rise / run;

        let minX = Math.min(this[0].x, this[1].x);
        let maxX = Math.max(this[0].x, this[1].x);
        let minY = Math.min(this[0].y, this[1].y);
        let maxY = Math.max(this[0].y, this[1].y);
        let stepsNum = Math.abs(this[0].y - this[1].y);

        switch (slope) {
            case 0:
                for (let i = minX; i <= maxX; i++) {
                    let pointName = String(i) + '-' + String(this[0].y);
                    addToObjectHolder(pointName);
                }
                break;
            case undefined:
                for (let i = minY; i <= maxY; i++) {
                    let pointName = String(this[0].x) + '-' + String(i);
                    addToObjectHolder(pointName);
                }
                break;
            case 1:
                for (let i = 0; i <= stepsNum; i++ ) {
                    let pointName = String(minX + i) + '-' + String(minY + i);
                    addToObjectHolder(pointName);
                }
                break;
            case -1:
                for (let i = 0; i <= stepsNum; i++ ) {
                    let pointName = String(maxX - i) + '-' + String(minY + i);
                    addToObjectHolder(pointName);
                }
                break;
            default:
                throw("ERROR");
        }
        return objectHolder;
    }
};


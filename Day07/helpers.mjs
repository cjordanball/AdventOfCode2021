const adderUp = (num) => {
    let res = 0;

    for (let i = 0; i <= num; i++) {
        res += i;
    }
    return res;
}



export const startUp = () => {
    Array.prototype.cjbxSimpleScore = function(ind) {
        return this.map ((val) => Math.abs(ind - val))
            .reduce((val1, val2) => {
                return val1 + val2
            }, 0);
    }
    Array.prototype.cjbxCompoundingScore = function(ind) {
        return this.map ((val) => adderUp(Math.abs(ind - val)))
            .reduce((val1, val2) => {
                return val1 + val2
            }, 0);
    }
};
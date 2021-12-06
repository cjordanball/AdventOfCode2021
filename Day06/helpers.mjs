export const updateCurrentState = (someObject) => {
    const returnObject = {};
    returnObject.day0 = someObject.day1;
    returnObject.day1 = someObject.day2;
    returnObject.day2 = someObject.day3;
    returnObject.day3 = someObject.day4;
    returnObject.day4 = someObject.day5;
    returnObject.day5 = someObject.day6;
    returnObject.day6 = someObject.day7 + someObject.day0;
    returnObject.day7 = someObject.day8;
    returnObject.day8 = someObject.day0;

    return returnObject;
}
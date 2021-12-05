export const startUp = () => {
    Array.prototype.cjbxHello = function () {
    console.log("Hello, my Array!");
    console.log("this: ", this);
    return this;
    }
}
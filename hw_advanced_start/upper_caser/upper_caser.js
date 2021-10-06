
const UpperCaser = function (words) {
    this.words = words;
}


// Uppercaser..

// map() an array of strings to a new array containing uppercase versions of each string.


UpperCaser.prototype.toUpperCase = function () {
    return this.words.map(word => word.toUpperCase());
}


module.exports = UpperCaser;


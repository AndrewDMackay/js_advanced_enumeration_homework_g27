
const IsogramFinder = function (word) {
    this.word = word.toLowerCase();
}

// Isogram Finder..

// An isogram is a word, phrase or sentence that does not contain any repeated letters. "Orange" is an isogram but "Banana" is not.

// Given a word, phrase or sentence you should be able to determine whether or not it is an isogram. 

// That is, you should be able to determine whether every letter is unique.


IsogramFinder.prototype.isIsogram = function () {
    return this.word.split('').every(character => this.isUnique(character));
  }
  
  
  IsogramFinder.prototype.isUnique = function (character) {
    return this.word.indexOf(character) === this.word.lastIndexOf(character);
  }
  

module.exports = IsogramFinder;



const PangramFinder = function (phrase) {
  this.phrase = phrase.toLowerCase();
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}


// Pangram Finder..

// A pangram is a sentence or phrase which contains every letter of the alphabet. 

// "The quick brown fox jumps over the lazy dog." is probably the most notable pangram in English.

// Given a sentence or phrase you should be able to determine whether or not every letter of the alphabet is included in it.


PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every(character => this.phrase.includes(character));
}


module.exports = PangramFinder;



const AnagramFinder = function (word) {
    this.word = word;
  }

// Extension, Anagram Finder..

// An anagram is a word formed by rearranging the letters of another word. Listen is an anagram of silent, for example.

// Given a word and an array of other words you should be able to filter the array..An

// Leaving only the anagrams of the word in question in the array.


AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter((otherWord) => {
      return this.isAnagram(otherWord) && this.isDifferentWord(otherWord);
    });
  }
  
  AnagramFinder.prototype.isAnagram = function (otherWord) {
    return this.splitSortJoin(this.word) === this.splitSortJoin(otherWord);
  }
  
  AnagramFinder.prototype.isDifferentWord = function (otherWord) {
    return this.word.toLowerCase() !== otherWord.toLowerCase();
  }
  
  AnagramFinder.prototype.splitSortJoin = function (word) {
    return word.toLowerCase().split('').sort().join('');
  }

module.exports = AnagramFinder;

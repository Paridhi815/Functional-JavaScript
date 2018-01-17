function countWords (inputWords) {
  return inputWords.reduce(function (count, word) {
    count[word] = ++count[word] || 1
    return count
  }, {})
}

module.exports = countWords
// basic
let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
console.log('Should run the basic case:', countWords(inputWords))

// empty
inputWords = []
console.log('Should run the empty array:', countWords(inputWords))

// all same
inputWords = ['apple', 'apple', 'apple', 'apple', 'apple']
console.log('Should run the same element array:', countWords(inputWords))

// all different
inputWords = ['Apple', 'Banana', 'Grapes', 'Durian', 'Chiku', 'Pineapple']
console.log('Should run the basic case:', countWords(inputWords))

// only one
inputWords = ['Apple']
console.log('Should run the case with 1 element:', countWords(inputWords))

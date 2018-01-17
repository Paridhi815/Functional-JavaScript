function countWords (inputWords) {
  return inputWords.reduce(function (count, word) {
    if (count[word]) {
      count[word] = ++count[word]
    } else {
      count[word] = 1
    }
    return count
  }, {})
}

module.exports = countWords
let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
console.log('Should run the basic case:', countWords(inputWords))
inputWords = []
console.log('Should run the empty array:', countWords(inputWords))

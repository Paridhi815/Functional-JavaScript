function duckCount () {
  return Array.prototype.slice.call(arguments).filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

module.exports = duckCount

// for duck
let duck = {
  quack: function () {
    console.log('quack')
  }
}
console.log('Should pass for duck case:', duckCount(duck))

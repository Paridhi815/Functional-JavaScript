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
// for not duck
let notDuck = Object.create({quack: true})
console.log('Should pass for not duck case:', duckCount(notDuck))

// for both together
notDuck = Object.create({quack: true})
duck = {quack: true}
console.log('Should pass for both', duckCount(duck, notDuck))

// for multiple duck
duck = {
  quack: function () {
    console.log('quack')
  },
  quack: function () {
    console.log('quacking')
  }
}
ducks = {quack: true}

console.log('Should pass for duck case:', duckCount(duck, ducks))

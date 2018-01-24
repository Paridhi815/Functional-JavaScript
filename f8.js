function duckCount () {
  return Array.prototype.slice.call(arguments).filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

module.exports = duckCount

// for both together
notDuck = Object.create({quack: true})
duck = {quack: true}
console.log('Should pass for both', duckCount(duck, notDuck) === 1)

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

console.log('Should pass for multiple ducks:', duckCount(duck, ducks, duck) === 3)

console.log('Should pass for multiple noDucks:', duckCount(notDuck, notDuck) === 0)

console.log('When no ', duckCount(notDuck, notDuck) === 0)

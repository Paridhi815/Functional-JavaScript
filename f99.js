function duckCount () {
  let argumentArray = Array.from(arguments)
  return argumentArray.filter(function (eachArgument) { return eachArgument.hasOwnProperty('quack') }).length
}

module.exports = duckCount

// for duck
let duck = {
  quack: function () {
    console.log('quack')
  }
}
console.log('Should pass for duck case:', duckCount(duck) === 1)

// for not duck
let notDuck = Object.create({quack: true})
console.log('Should pass for not duck case:', duckCount(notDuck) === 0)

// for both together
notDuck = Object.create({quack: true})
duck = {quack: true}
console.log('Should pass for both:', duckCount(duck, notDuck) === 1)

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

console.log('Should pass for duck case:', duckCount(duck, ducks) === 2)

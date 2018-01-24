function duckCount () {
  let argumentArray = Array.prototype.slice.call(arguments)
  let filtered = argumentArray.filter(function (eachArgument) {
    return Object.prototype.hasOwnProperty.call(eachArgument, 'quack')
  })
  return filtered.length
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
duck = {quack: true}
console.log('Should pass for both:', duckCount(duck, notDuck) === 1)

// for multiple duck
duck = {
  quack: function () {
    console.log('quack')
  }
}
ducks = {quack: true}

console.log('Should pass for 2ducks case:', duckCount(duck, ducks) === 2)

console.log('Should pass for empty cases:', duckCount() === 0)

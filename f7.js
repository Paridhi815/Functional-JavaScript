function reduce (arr, func, initial) {
  if (arr.length) {
    let num = arr[0]
    return reduce(arr.slice(1), func, func(initial, num))
  } else { return initial }
}

function func (element1, element2) {
  return element1 + element2
}
module.exports = reduce
console.log('Should pass the basic test case:', reduce([1, 2, 3], func, 0))
console.log('Should pass the empty array case:', reduce([], func, 0))
console.log('Should pass the basic test case:', reduce([1, 2, 3, 4], func, 0))

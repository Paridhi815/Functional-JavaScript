
function map (arr, fn) {
  return arr.reduce(function (acc, curr, index, arr) {
    return acc.concat(fn(curr, index, arr))
  }, [])
}

// function double(item) {
//       return item * 2
//     }
//
module.exports = map
// console.log("basic:",map([1,2,3]));

function checkUsersValid (goodUsers) {
  return function allUsersValid (submittedUsers) {
    console.log('bvudshi')
    // SOLUTION GOES HERE
    return submittedUsers.every(function (testObj) {
      return goodUsers.some(function (goodObj) {
        return goodObj.id === testObj.id
      })
    })
    console.log(arr)
  }
}
let goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

let submittedUsers = [
  { id: 2 },
  { id: 1 }
]
console.log('Correct Test Case:', checkUsersValid(goodUsers)(submittedUsers) === true)
goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

submittedUsers = [
  { id: 2 },
  { id: 4 },
  { id: 1 }
]
console.log('InCorrect Test Case:', checkUsersValid(goodUsers)(submittedUsers) === false)

module.exports = checkUsersValid

function doubleAll(numbers)
  {
      var result = []
      result=numbers.map(function double(num){ return num*2;})
      return result
    }
module.exports = doubleAll

console.log("Should passs basic test case:",doubleAll([1,2,3,4,5]).toString()===[2,4,6,8,10].toString());

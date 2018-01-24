function reduce (arr, fun, initial) {
	if (arr.length) {
		let num = arr[0];
		let result = fun(initial, num);
		return reduce(arr.slice(1), fun, result);
	} else { return initial; }
}

function func (element1, element2) {
	return element1 + element2;
}
module.exports = reduce;
console.log('Should pass the basic test case:', reduce([1, 2, 3], func, 0) === 6);
console.log('Should pass the empty array case:', reduce([], func, 0) === 0);
console.log('Should add:', func(1, 2) === 3);
console.log('Should work for negative numbers', reduce([1, 2, -3], func, 0) === 0);

function repeat(operation, num) {
  function fun() {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
  }
  return fun;
}

function trampoline(fn) {
  while(fn && typeof fn === 'function') {
    fn = fn();
  }
}

module.exports = function(operation, num) {
  trampoline(repeat(operation, num));
};

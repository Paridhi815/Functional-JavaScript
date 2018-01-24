function repeat (operation, num) {
  if (num <= 0) { return; }

  operation();
  if (num % 10 === 0) {
    setTimeout(function () {
      console.log('hello');
    }, 2000);
    repeat(operation, --num);
  } else {
    console.log('welcome');
    repeat(operation, --num);
  }
}

function fn (num) {
  return num * 2;
}
module.exports = repeat;
repeat(fn, 20);

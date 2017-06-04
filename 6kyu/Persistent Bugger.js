// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(num) {
  var test = num.toString().split('');
  var count = 0;

  while (test.length > 1) {
    test = test.reduce(function (a, c) {
      return a * c;
    }).toString().split('');
    count++;
  }

  return count;
}

console.log(persistence(999));

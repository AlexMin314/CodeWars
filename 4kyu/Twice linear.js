// https://www.codewars.com/kata/twice-linear/train/javascript
// Skipped

// wrong approach
var dblLinear = (function (n) {
  var cache = { '0': 1 };
  var func = function (n) {
    var result = 0;
    if (typeof cache[n] === 'number') {
      result = cache[n];
    } else if (n % 2 === 0) {
      result = cache[n] = func(n - 2) * 2 + 1;
    } else {
      result = cache[n] = func(n - 3) * 3 + 1;
    }
    return result;
  }
  return func;
}());

console.log(dblLinear(10));

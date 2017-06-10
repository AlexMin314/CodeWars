http://www.codewars.com/kata/59321f29a010d5aa80000066/solutions/javascript
function shortestArrang(n) {
  var num = Math.ceil(n / 2);
  var arr = [];
  arr.consecutiveArr(num);

  for(var i = 0; i < arr.length; i++) {
    var sum = 0;
    for(var j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === n) return arr.slice(i, j + 1);
    }
  }
  return [-1];
}

Array.prototype.consecutiveArr = function(e) {
  if (e > 1) this.consecutiveArr(e - 1);
  this.unshift(e);
};

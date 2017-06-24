// https://www.codewars.com/kata/sum-of-pairs/train/javascript
var sum_pairs = function (ints, s) {
  var arr = ints.map(function (e, i, arr) {
    for (var j = i + 1; j < arr.length; j++) {
      if (e + arr[j] === s) return [e, arr[j]];
    }
  }).filter(Boolean);

  if (arr.length > 1) {
    var mini = Number.MAX_VALUE;
    var idxTemp = arr.forEach(function (e) {
      e.forEach(function (e) {
        if (ints.indexOf(e) < mini) mini = ints.indexOf(e);
      })
    })
    return idxTemp
  }

  return arr[0];
}

var l1 = [1, 4, 8, 7, 3, 15];
var l2 = [1, -2, 3, 0, -6, 1];
var l3 = [20, -13, 40];
var l4 = [1, 2, 3, 4, 1, 0];
var l5 = [10, 5, 2, 3, 7, 5];
var l6 = [4, -2, 3, 3, 4];
var l7 = [0, 2, 0];
var l8 = [5, 9, 13, -3];
console.log(sum_pairs(l1, 8));
console.log(sum_pairs(l2, -6));
console.log(sum_pairs(l4, 2));

// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

// Worng answer
function orderWeight(str) {
  var temp = str.split(' ').reduce(function (a, c) {
    a[c] = c.split('').reduce(function (a, c) { return Number(a) + Number(c); });
    return a;
  }, {});
  return temp;
}


/*
function orderWeight(str) {
  return str.split(' ').sort().sort(function (a, b) {
    var k = b.split('').reduce(function (a, c) { return Number(a) + Number(c); });
    var t = a.split('').reduce(function (a, c) { return Number(a) + Number(c); });
    if (t !== k) {
      return (t - k);
    } else {
      return ;
    }
  }).join(' ');
}*/

//console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
//console.log(orderWeight("78798 160 171498 14 449605 11 332239 61 421315 171 376280 132 482408 22 105807 117 386987 70 285899 166 87"));

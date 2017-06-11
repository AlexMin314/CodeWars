// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

function orderWeight(str) {

  var arrStr = str.split(' ');

  var arrSet = [];
  var temp = arrStr.map(function (e) {
    return e.split('').reduce(function (a, c) {
      return Number(a) + Number(c);
    }, []);
  });

  // constructing arrSet
  temp.forEach(function (e, i) {
    arrSet[e] ? arrSet[e].push(arrStr[i]) : arrSet[e] = [arrStr[i]];
  });

  // eliminate holes in the arrSet.
  arrSet = arrSet.filter(Boolean);
  // string sort
  arrSet.forEach(function (e) {
    e = e.sort();
  });
  // convert array into string
  var result = arrSet.reduce(function (a, c) {
    return a.concat(c);
  }, []).join(' ');

  return result;
}

console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
console.log(orderWeight("78798 160 171498 14 449605 11 332239 61 421315 171 376280 132 482408 22 105807 117 386987 70 285899 166 87"));

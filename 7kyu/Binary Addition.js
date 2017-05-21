// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

function addBinary(a,b) {
  var sum = a + b;
  var temp = '';
  while (sum > 0) {
    temp = sum % 2 + temp;
    sum = Math.floor(sum/2);
  }
  return temp;
}

function addBinary1(a,b){
  return (a+b).toString(2)
}

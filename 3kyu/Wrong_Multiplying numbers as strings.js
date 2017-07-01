// https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript

function multiply(a, b) {
  var arrA = a.split('').reverse();
  var arrB = b.split('').reverse();
  var calc = [];

  arrA.forEach(function(a, idx) {
    arrB.forEach(function(b, i) {
      calc.push(Number(b) * Number(a * Math.pow(10, idx)) * (Math.pow(10, i)));
    });
  });

  console.log(calc);
  return calc.reduce(function(a,c) {
    return a + c;
  }) + '';
}


console.log(multiply('20', '15'));

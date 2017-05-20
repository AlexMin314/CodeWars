// https://www.codewars.com/kata/square-every-digit/train/javascript

// #1
function squareDigits(num) {
  //may the code be with you
  var temp = num.toString();
  var result = '';
  var leng = temp.length;

  for (var i = 0; i < leng; i++) {
    result += Math.pow(temp[i], 2);
  }

  return Number(result);
}

// #2
function squareDigits(num) {
  return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
}

console.log(squareDigits(9119));

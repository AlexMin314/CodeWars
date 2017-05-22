// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
function sumDigPow(a, b) {
  // Your code here
  var temp = [];
  var answer = [];
  var sum = 0;
  for(var i = a; i <= b; i++) {
    temp = i.toString().split('').forEach(function(e,idx,arr) {
      sum += Math.pow(e, idx + 1);
    });
    if (sum === i) {
      answer.push(sum);
    }
    sum = 0;
  }
  return answer;
}

console.log(sumDigPow(1,100));

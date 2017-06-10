// https://www.codewars.com/kata/54d512e62a5e54c96200019e/solutions/javascript

function primeFactors(n) {
  var arr = [];
  var answer = '';

  for (var i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      arr.push(i);
    }
  }

  var result = arr.reduce(function (a, c) {
    a[c] = (a[c] + 1) || 1;
    return a;
  }, {});

  var keys = Object.keys(result);

  for(var i = 0; i < keys.length; i++) {
    if (result[keys[i]] > 1) answer += '(' + keys[i] + '**' + result[keys[i]] + ')';
    if (result[keys[i]] === 1) answer += '(' + keys[i] + ')';
  }

  return answer
}

console.log(primeFactors(5181));

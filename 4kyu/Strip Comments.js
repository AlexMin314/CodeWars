// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

function solution(input, markers) {
  var arr = input.split('\n');
  var result = arr.map(function (e) {
    for (var i = 0; i < markers.length; i++) {
      var pattern = new RegExp(markers[i], 'g');
      if (markers[i] === '$') pattern = new RegExp(/\$/, 'g');
      if (e.search(pattern) > -1) {
        return e.slice(0, e.search(pattern)).trim();
      }
    }
    return e;
  });
  return result.join('\n');
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
console.log(solution("a\nc\nd $e f g", ["$"]));

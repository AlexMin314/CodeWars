// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/solutions/javascript

// #1
function firstNonRepeatingLetter(s) {
  var temp = s.toLowerCase().split('').reduce(function(a,c) {
    a[c] = a[c] + 1 || 1;
    return a;
  }, {})

  for (var i = 0; i < s.length; i++){
    if (temp[s[i].toLowerCase()] === 1) {
      return s[i];
    }
  }
  return '';
}

console.log(firstNonRepeatingLetter('pphy'));

// #2 from other player
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

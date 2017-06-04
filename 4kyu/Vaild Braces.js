// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

// #1
function validBraces(braces) {
  var pattern = /\(\)|\[\]|\{\}/g
  while (pattern.test(braces)) {
    braces = braces.replace(pattern, '')
  }
  return !braces.length;
}

// #2 from other player
function validBraces(braces){
  while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
    braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  }
  return braces.length == 0;
}

// #3 from other player
function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0; // any unclosed braces left?
}

console.log(validBraces('([{()])'));

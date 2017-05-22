// https://www.codewars.com/kata/simple-pig-latin/train/javascript

function pigIt(str){
  return str.split(' ').map(function(e) {
    return e.replace(e[0], '')+ e[0] + 'ay';
  }).join(' ');
}

console.log(pigIt('Pig latin is cool'))

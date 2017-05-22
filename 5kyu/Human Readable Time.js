// https://www.codewars.com/kata/human-readable-time/train/javascript
function humanReadable(seconds) {
  var ss = seconds % 60;
  var SS = ss > 9 ? ss : '0' + ss;

  var mm = Math.floor(seconds/60) % 60;
  var MM = mm > 9 ? mm : '0' + mm;

  var hh = Math.floor(Math.floor(seconds/60) / 60);
  var HH = hh > 9 ? hh : '0' + hh;

  return HH + ':' + MM + ':' + SS;
}

console.log(humanReadable(60));
console.log(humanReadable(86399));
console.log(humanReadable(359999));

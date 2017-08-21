// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration (seconds) {

  if (seconds === 0) return 'now';

  const formatInfo = {};
  let answer = '';
  let checker = 0;
  let index = 0;

  formatInfo.years = Math.floor(seconds / (60*60*24*365));
  formatInfo.days = Math.floor(seconds / (60*60*24)) % 365;
  formatInfo.hours = Math.floor(seconds / (60*60)) % 24;
  formatInfo.minutes = Math.floor(seconds / 60) % 60;
  formatInfo.seconds = seconds % 60;

  for (key in formatInfo) {
    if (formatInfo[key] > 0) checker++;
  }

  for (key in formatInfo) {
    if (formatInfo[key] > 1) {
      let separator = ++index === checker - 1 ? ' and ' : ', ';
      if (index === checker) separator = '';
      answer += formatInfo[key] + ' ' + key + separator;
    }
    if (formatInfo[key] === 1) {
      let separator = ++index === checker - 1 ? ' and ' : ', ';
      if (index === checker) separator = '';
      answer += formatInfo[key] + ' ' + key.slice(0,-1) + separator;
    }
  }

  return answer;
}

console.log(formatDuration(112))

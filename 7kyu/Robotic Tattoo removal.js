// http://www.codewars.com/kata/57658f3dedc6f7a751000e7b/solutions/javascript
function robot(skinScan) {
  return skinScan.map(function (ele) {
    return ele.map(function (e) {
      return e.replace('X', '*');
    });
  });
}

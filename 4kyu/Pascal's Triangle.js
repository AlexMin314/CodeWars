//https://www.codewars.com/kata/pascals-triangle/train/javascript

function pascalsTriangle(n) {
  var depth = [[1],];
  var temp,i,j;

  for (i = 1; i < n; i++) {
    temp = [];
    for(j = 0; j < i+1; j++) {
      temp[j] = (depth[i-1][j-1] || 0) + (depth[i-1][j] || 0);
    }
    depth.push(temp);
  }
  return [].concat.apply([], depth);
}

console.log(pascalsTriangle(5));

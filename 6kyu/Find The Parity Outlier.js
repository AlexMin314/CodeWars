function findOutlier(integers) {
  //your code here
  var odd = integers.filter(function (e) { return e % 2 !== 0; });
  var even = integers.filter(function (e) { return e % 2 === 0; });
  return (odd.length === 1 ? Number(odd) : Number(even));
}

console.log(findOutlier([2, 6, 8, 10, 3]));

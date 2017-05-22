function duplicateCount(text){
  var temp = text.toLowerCase().split('').reduce(function(a,c,i) {
    a[c] = a[c] + 1 || 1;
    return a;
  }, []);
  var  count = 0;
  for (prop in temp) {
    if (temp[prop] > 1) {
      count++;
    }
  }
  return count;
}
console.log(duplicateCount("aabBcde"));

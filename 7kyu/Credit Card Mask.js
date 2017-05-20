// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript'=

// # 1
function maskify(cc) {
  var leng = cc.length,
  var result;

    if (leng < 5) {
      return cc;
    }

    return '#'.repeat(leng - 4) + cc.slice(-4);
}

// # 2
function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}

console.log(maskify('4556364607935616'));
console.log(maskify('616'));
console.log(maskify(''));

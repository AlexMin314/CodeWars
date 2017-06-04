// https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/train/javascript
function encrypt(text, n) {

  if (n < 1 || text === '' || text === null) {
    return text;
  }

  var arr = text.split('');
  var tempEven = '';
  var tempOdd = '';

  for (var i = 0; i < arr.length; i++) {
    (i % 2 !== 0 ? tempEven += arr[i] : tempOdd += arr[i]);
  }

  n--;

  return n > 0 ? encrypt(tempEven + tempOdd, n) : tempEven + tempOdd;
}

function decrypt(encryptedText, n) {

  if (n < 1 || encryptedText === '' || encryptedText === null) {
    return encryptedText;
  }

  var arrLeft = encryptedText.split('');
  var arrRight = arrLeft.splice(Math.floor(arrLeft.length / 2));
  var result = '';
  var leng = arrRight.length;

  for (var i = 0; i < leng; i++) {
    if (i === leng - 1 && leng > arrLeft.length) {
      result += arrRight[i];
      break;
    }
    result += arrRight[i] + arrLeft[i];
  }

  n--;

  return n > 0 ? decrypt(result, n) : result;
}

console.log(encrypt("This is a test!", 0));
console.log(decrypt("hsi  etTi sats!", 1));
console.log(decrypt(" Tah itse sits!", 3));
console.log(encrypt("This kata is very interesting!", 1));
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));

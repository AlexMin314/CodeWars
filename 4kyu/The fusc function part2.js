// https://www.codewars.com/kata/57040e445a726387a1001cf7/train/javascript

const fusc = (() => {
  const cache = { '0': 0, '1': 1 };

  const func = (n) => {
    let result = 0;

    if (typeof cache[n] === 'number') {
      result = cache[n];
    } else {
      result = cache[n] = n % 2 === 0 ? func(n/2) : func((n+1)/2) + func((n-1)/2);
    }

    return result
  };

  return func;
})();

console.log(fusc(85));

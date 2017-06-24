// https://www.codewars.com/kata/5286d92ec6b5a9045c000087/train/javascript
function convertQueryToMap(query) {
  var test = query.replace(/%20/g, ' ').split('&');
  test = test.map(function(e) {
    return e.split('.').map(function(e) {
      return e.split('=');
    });
  })

  var result = {};
  test[0].forEach(function(e, i, arr) {
      if (e.length === 1 && arr.length > 2) {
        if (i === 0) result[e] = {};
        if (i === 1) {
          result[arr[i  - 1]][e] = {};
        }
      }
      if (e.length === 2 && arr.length > 2) {
        if (i === 2) {
          result[arr[i - 2]][arr[i - 1]][e[0]] = e[1];
        }
      }
    });



  console.log(test);
  return result;
}

console.log(convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'));

// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function friend(friends){
  //your code here
  return friends.filter(function(e) {
    return e.length === 4 && /[\s\d]/g.test(e) !== true;
  })
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"," jam"]));

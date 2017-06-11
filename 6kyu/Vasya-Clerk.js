// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript
function tickets(peopleInLine){
  var money = {};
  money[25] = 0;
  money[50] = 0;
  money[100] = 0;

  var checker = 'YES';

  peopleInLine.forEach(function(e) {
    if (e == 50) money[25] ? money[25]-- : checker = 'NO';
    if (e == 100) {
      money[50] > 0 ? money[50]-- : money[25] -= 2;
      money[25] > 0 ? money[25]-- : checker = 'NO';
    }
    money[e]++;
  });
  return checker;
}

console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50]));
console.log(tickets([25,50,25,100,25,50,25,100,25,25,50,100,25,50,25,100,25,50,25,100]));

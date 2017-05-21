// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript
// wrong answer!!

function tickets(peopleInLine){
  var checker = peopleInLine.reduce(function(a, b) {
    console.log(a);
    return a - b >= -25 ? a + (b > 25 ? 25 - b : 0) + b : "test";
  });
  return checker !== "test" ? "YES" : "NO";
}

//console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50]));
//console.log(tickets([25,50,25,100,25,50,25,100,25,25,50,100,25,50,25,100,25,50,25,100]));

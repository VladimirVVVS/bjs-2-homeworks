//task1
"use strict";

function solveEquation(a, b, c) {
  let arr;
  arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  }

  return arr; // array

};

console.log(solveEquation(1, 5, 4));


//task2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function calculator() {
  this.sum = function (a, b) {
    return a + b;
  };
  this.subtract = function (a, b) {
    return a - b;
  };
  this.multiply = function (a, b) {
    return a * b;
  };
  this.divide = function (a, b) {
    return a / b;
  };
}

const calculate = new calculator();
console.log(calculate.sum(10, 20));
console.log(calculate.subtract(10, 20));
console.log(calculate.multiply(10, 20));
console.log(calculate.divide(10, 20));

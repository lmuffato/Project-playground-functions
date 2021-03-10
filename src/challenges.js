// Desafio 1
function compareTrue(number1, number2) {
  return (number1 === true && number2 === true);
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

console.log(compareTrue(true, false));
console.log(calcArea(51, 1));
/*console.log(splitSentence('go Trybe'));
console.log(concatName(names));
console.log(footballPoints(14, 8));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(catAndMouse(3, 9, 9));
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(decision('hi there'));
*/
module.exports = {
  //calcArea,
 /* catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence, */
};

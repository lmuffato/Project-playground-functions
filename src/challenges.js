// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height) / 2;
  return triangulo;
}
// console.log(calcArea(10, 50));
// Desafio 3
function splitSentence(array) {
  let separaçaoString = array.split(' ');
  return separaçaoString;
}
console.log(splitSentence('go Trybe'));
// Desafio 4 ;
function concatName() {
}

// Desafio 5
function footballPoints(wins, ties) {
  let wins1 = wins * 3;
  let ties1 = ties * 1;
  return wins1 + ties1;
}

console.log(footballPoints(0, 0));
// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

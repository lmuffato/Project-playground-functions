// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  if (value1 === false || value2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(expression) {
  // seu código aqui
  let splitExpression = new Array(0);
  splitExpression = (expression.split(' '));
  return splitExpression;
}

// Desafio 4
function concatName(nameArray) {
  // seu código aqui
  let lastAndFirst;
  lastAndFirst = nameArray[nameArray.length - 1];
  lastAndFirst += ', ';
  lastAndFirst += nameArray[0];
  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let total = 3 * wins + ties;
  return total;
}

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

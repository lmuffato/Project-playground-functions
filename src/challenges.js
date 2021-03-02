// Desafio 1
function compareTrue(value1, value2) {
  const result = (value1 && value2);
  return result;
}

// Desafio 2
function calcArea(base, height) {
  const triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(setence) {
  const setenceList = setence.match(/\w+/g);
  return setenceList;
}

// Desafio 4
function concatName(array) {
  const lastFirstName = `${array[array.length - 1]}, ${array[0]}`;
  return lastFirstName;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false; 
  }
}

// Desafio 2
function calcArea(base, heigh) {
  let area = (base * heigh) / 2;
  return area;
}

// Desafio 3
/* https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
Site onde aprendi sobre o metodo .split() */
function splitSentence(sentence) {
  let sentenceArray = sentence.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(array) {
  let result = `${array[array.length - 1]}, ${array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
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

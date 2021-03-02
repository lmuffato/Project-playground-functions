// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {

  return string.trim().split(/\s+/);
}

// Desafio 4
function concatName(array) {
  
  let firstElement = array[0];
  let lastElement = array[array.length - 1];

  return [lastElement + ', ' + firstElement];
}

// Desafio 5
function footballPoints(wins, ties) {
  
  let teamPoints = (wins * 3) + (ties * 1);

  return teamPoints
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

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

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

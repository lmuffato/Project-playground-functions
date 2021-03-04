// Desafio 1
function compareTrue(value1,value2) {
  if(value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }

}
// Desafio 2
function calcArea(base,height) {
  let triangleArea = (base * height)/2;
  return triangleArea;
} 

// Desafio 3
function splitSentence(string) {
  let sentenceSplit = string.split(" ");
  return sentenceSplit;
} 

// Desafio 4
let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(array) {
  let lastFirstArray = expect(array).toBe(array[array.length-1],array[0]);
}

// Desafio 5
let wins = 14;
let ties = 8;

function footballPoints(wins,ties) {
  let championshipPoints = wins*3 + ties*1 ;
  return championshipPoints;
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
}


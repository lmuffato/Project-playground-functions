// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}
 
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2; 
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
let greatest = array[0];
let times = 0;
for (let index in array)
{ if (array[index] > greatest)
{ greatest = array[index] } 
};
for (let index in array)
{ if (array[index] === greatest)
{ times += 1 }
};
return times;
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

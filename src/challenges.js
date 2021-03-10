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

// Desafio 3
function splitSentence(sentence) {
  let array = [];
  array = sentence.split(' ');
  return array;
}

// Desafio 4
function concatName(concat) {
  let input = '';
  let number = concat.length;
  input = concat[number - 1] + ', ' + concat[0];
  return input;
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

let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

console.log(compareTrue(true, false));
console.log(calcArea(10, 50));
console.log(splitSentence('go Trybe'));
console.log(concatName(nomes));
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

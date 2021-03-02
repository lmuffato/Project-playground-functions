// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
  // seu código aqui
}

// Desafio 3
function splitSentence(sentence) {
  let array = [];
  array = sentence.split(' ');
  return array;
}

// Desafio 4
function concatName(phrase) {
  let array = [];
  let counter = phrase.length;
  array.push(phrase[counter - 1]);
  array.push(phrase[0]);
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3 + ties;
  return points;
  // seu código aqui
}

// Desafio 6
function highestCount(array) {
  let high = array[0];
  let counter = 0;
  for (let key in array) {
    if (array[key] > high) {
      high = array[key];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === high) {
      counter += 1;
    }
  }
  return counter;
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

let names = ['foguete', 'não', 'tem', 'ré'];

console.log(compareTrue(true, false));
console.log(calcArea(51, 1));
console.log(splitSentence('go Trybe'));
console.log(concatName(names));
console.log(footballPoints(14, 8));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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

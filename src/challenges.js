function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }

  return false;
}
console.log(compareTrue(true, false));

// exercicio2
function calcArea(base, height) {
  let area = 0;
  area = base * height / 2;
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(names) {
  let first = `${names[0]}. ${names[names.length - 1]}`;
  return first;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = wins * 3;
  let pontosTies = ties * 1;
  return pontosWins + pontosTies;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestNumber(arrayNum) {
  let highest = 0;
  for (let index of arrayNum) if (index >= highest) highest = index;
  return highest;
}
function highestCount(array) {
  let highNum = highestNumber(array);
  let count = 0;
  for (let index2 of array) if (index2 === highNum) count += 1;
  return count;
}

let arrayNum = [9, 1, 2, 8, 9, 5, 7];
console.log(highestCount(arrayNum));
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

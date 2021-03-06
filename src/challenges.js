// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
let result = compareTrue(true, true);
console.log(result);

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return (base * heigth) / 2;
}
let value = calcArea(10, 50);
console.log(value);

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let first = array[0];
  let last = array[array.length - 1];
  let comma = ', ';
  return last + comma + first;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiornumero = Math.max.apply(null, array);
  let soma = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiornumero) {
      soma += 1;
    }
  }
  return soma;
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

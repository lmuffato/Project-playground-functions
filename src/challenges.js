// Desafio 1

function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// usado material base para entendimento da solução https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayselect) {
  return arrayselect[arrayselect.length - 1] + ', ' + arrayselect[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
// 1. Achar o maior numero do array
// 2. contar a quantidade de vezes que ele aparece no array
function highestCount(arr, higherNumber) {
  let cont = 0
  for (let index2 = 0; index2 < arr.length; index2 += 1) {
    if (arr[index2] === higherNumber) {
      cont +=1;
    }
  }return cont;
}

function higherNumber (arr) {
  let max = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr [index] > max ) {
      max = arr[index];
    }
  }return max;
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

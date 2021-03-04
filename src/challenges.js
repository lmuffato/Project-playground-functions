// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = base * height;
  let result = area / 2;
  return result;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let fraseDividida = phrase.split(' ');
  return fraseDividida;
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  const winsPoints = wins * 3;
  const tiesPoints = ties;
  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(number) {
  // seu código aqui
  let highestNumber = findingHighestNumber(number);

  let highestRepeat = countingHighestNumber(number, highestNumber );
  
  function findingHighestNumber(arr) {//Procuro o maior numero dentro do vetor//
    let maior = arr[0];
    for (let index = 1; index < arr.length; index += 1) {
      if (arr[index] > maior) {
        maior = arr[index];
      }
    }
    return maior;
  }

  function countingHighestNumber(arr2, maior) {//conta quantas vezes o maior numero repete//
    let guardaSoma = 0;
    for (let index in arr2) {
      if (maior == arr2[index]) {
        guardaSoma += 1;
      }
    }
    return guardaSoma;
  }
  return highestRepeat;
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

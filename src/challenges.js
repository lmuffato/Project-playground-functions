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

  let highestRepeat = countingHighestNumber(number, highestNumber);

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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(fizzBuzz) {
  // seu código aqui
let guardaNumero = 0;

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

// Desafio 1
function compareTrue(value1, value2) {
  let result; 
  if (value1 === true && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let wordsArray = string.split(' ');
  return wordsArray;
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(strArray) {
  let concatArray = strArray[strArray.length - 1] + ', ' + strArray[0];
  return concatArray;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let win = wins * 3;
  let tie = ties * 1;
  let points = win + tie;
  return points;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbersArray) {
  let higherNum = numbersArray[0];
  let higherCount = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    let currentNumber = numbersArray[index];
    if (currentNumber > higherNum) {
      higherNum = currentNumber;
      higherCount = 1;
    } else if (currentNumber === higherNum) {
      higherCount += 1;
    }
  }
  return higherCount;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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

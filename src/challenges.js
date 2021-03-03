// Desafio 1
function compareTrue(valueOne, valueTwo) {
  let comparedValue = true;

  if (valueOne === true && valueTwo === true) {
    comparedValue = true;
  } else {
    comparedValue = false;
  }

  return comparedValue;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(stringValue) {
  let stringArray = stringValue.split(' ');
  return stringArray;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let resultConcat = `${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`;
  return resultConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumber = Math.max.apply(null, arrayNumbers);
  let numberNumbers = 0;

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (higherNumber === arrayNumbers[i]) {
      numberNumbers += 1;
    }
  }
  return numberNumbers;
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

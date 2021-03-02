// Desafio 1
function compareTrue(firstValue, secondValue) {
  let compareValues = firstValue && secondValue === true;

  return compareValues;
}

// Desafio 2
function calcArea(base, height) {
  let triangleCalcArea = (base * height) / 2;

  return triangleCalcArea;
}

// Desafio 3
function splitSentence(stringsToSplit) {
  let splitedStrings = [];

  splitedStrings = stringsToSplit.split(' ');

  return splitedStrings;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let firstValue = arrayOfStrings.slice(0, 1);
  let lastValue = arrayOfStrings.slice(arrayOfStrings.length - 1);
  let concatedValues = '';
  return concatedValues.concat(lastValue, ', ', firstValue).toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  let sum = (wins * 3) + (ties * 1);
  return sum;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highestNumberCount = 0;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    let numbersToCheck = arrayOfNumbers[index];
    let highNumber = Math.max(...arrayOfNumbers);
    if (highNumber === numbersToCheck) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mousePosition, cat1Position, cat2Position) {
  let returnString = '';
  if (mousePosition - cat1Position > mousePosition - cat2Position) {
    returnString = 'cat1';
  } else if (mousePosition - cat1Position < mousePosition - cat2Position) {
    returnString = 'cat2';
  } else {
    returnString = 'os gatos trombam e o rato foge';
  }

  return returnString;
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

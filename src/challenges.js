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
  let resultConcat = `${arrayOfStrings[arrayOfStrings.length - 1]}, ${
    arrayOfStrings[0]
  }`;
  return resultConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
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
function catAndMouse(mouse, cat1, cat2) {
  let catWin;

  if (cat1 < cat2 && cat1 >= mouse) {
    catWin = 'cat1';
  } else if (cat2 < cat1 && cat2 >= mouse) {
    catWin = 'cat2';
  } else {
    catWin = 'os gatos trombam e o rato foge';
  }
  return catWin;
}

// Desafio 8
function divisibleOrNo(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrayOfNumbers) {
  let arrayFizzBuzz = [];

  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    arrayFizzBuzz.push(divisibleOrNo(arrayOfNumbers[i]));
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  let lettersNumbers = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  lettersNumbersSize = Object.keys(lettersNumbers).length;

  let stringArray = string.split('');

  for (i = 0; i < stringArray.length; i += 1) {
    for (j = 0; j < lettersNumbersSize; j += 1) {
      let letterKey = Object.keys(lettersNumbers);
      let letter = Object.keys(letterKey[j]);

      if (letter.toString() === stringArray[i]) {
        let letterValue = lettersNumbers(letterKey);
        stringArray[i] = letterValue;
      }
    }
  }
  return stringArray;
}
console.log(encode('hi there!'));

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

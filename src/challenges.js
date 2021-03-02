// Desafio 1
function compareTrue(value1, value2) {
  let checker = false;
  if (value1 === true && value2 === true) {
    checker = true;
  }
  return checker;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let stringArray = string.split(' ');
  return stringArray;
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let stringItems = `${lastItem}, ${firstItem}`;
  return stringItems;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6

function highestNumber(arrayHighestNumber) {
  let number = 0;
  for (let index = 0; index < arrayHighestNumber.length; index += 1) {
    if (arrayHighestNumber[index] > number) {
      number = arrayHighestNumber[index];
    }
  }
  return number;
}

function highestCount(arrayHighestCount) {
  let number = highestNumber(arrayHighestCount);
  let numberTime = 0;
  for (let index = 0; index < arrayHighestCount.length; index += 1) {
    if (number === arrayHighestCount[index]) {
      numberTime += 1;
    }
  }

  return numberTime;
}

// Desafio 7

function checkDistance(mouse, cat) {
  // Poderia utilizar Math.abs(), mas quis priorizar o que viemos aprendendo até agora.
  let catDistance = mouse - cat;

  if (catDistance < 0) {
    catDistance *= -1;
  }
  return catDistance;
}

function catAndMouse(mouse, cat1, cat2) {
  let firstCat = checkDistance(mouse, cat1);
  let secondCat = checkDistance(mouse, cat2);
  let chaseResult = '';

  if (firstCat === secondCat) {
    chaseResult = 'os gatos trombam e o rato foge';
  } else if (firstCat < secondCat) {
    chaseResult = 'cat1';
  } else {
    chaseResult = 'cat2';
  }

  return chaseResult;
}

// Desafio 8

function checkDivisions(numberOfArrayFizzBuzz) {
  let resultOfCheckDivisions = '';
  if (numberOfArrayFizzBuzz % 3 === 0 && numberOfArrayFizzBuzz % 5 === 0) {
    resultOfCheckDivisions = 'fizzBuzz';
  } else if (numberOfArrayFizzBuzz % 5 === 0) {
    resultOfCheckDivisions = 'buzz';
  } else if (numberOfArrayFizzBuzz % 3 === 0) {
    resultOfCheckDivisions = 'fizz';
  } else {
    resultOfCheckDivisions = 'bug!';
  }
  return resultOfCheckDivisions;
}

function fizzBuzz(arrayFizzBuzzNumbers) {
  let array = [];

  for (let index = 0; index < arrayFizzBuzzNumbers.length; index += 1) {
    array.push(checkDivisions(arrayFizzBuzzNumbers[index]));
  }
  return array;
}

// Desafio 9

// Code

function checkLetterToEncode(letterToCode) {
  let vowelCoded = letterToCode;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];

  for (let index = 0; index < vowels.length; index += 1) {
    if (letterToCode === vowels[index]) {
      vowelCoded = numbers[index];
    }
  }
  return vowelCoded;
}

function encode(stringToEncode) {
  let splitedStringToEncode = stringToEncode.split('');
  let codedString = '';

  for (let index = 0; index < splitedStringToEncode.length; index += 1) {
    codedString += checkLetterToEncode(splitedStringToEncode[index]);
  }
  return codedString;
}

// Decode

function checkNumberToDecode(numberToDecode) {
  let numberDecoded = numberToDecode;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];

  for (let index = 0; index < vowels.length; index += 1) {
    if (numberToDecode === numbers[index]) {
      numberDecoded = vowels[index];
    }
  }
  return numberDecoded;
}

function decode(stringToDecode) {
  let splitedStringToDecode = stringToDecode.split('');
  let decodedString = '';

  for (let index = 0; index < splitedStringToDecode.length; index += 1) {
    decodedString += checkNumberToDecode(splitedStringToDecode[index]);
  }
  return decodedString;
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

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

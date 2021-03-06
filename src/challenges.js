// Desafio 1
function compareTrue(x, y) {
  if (typeof x == 'boolean' && typeof y == 'boolean') {
    return x && y;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return base * heigth / 2
}

// Desafio 3
function splitSentence(phrase) {
  let words = []
  let path = 0
  for (index = 0; index < phrase.length; index++) {
    if (phrase[index] != " ") {
      if (words[path] != undefined) {
        words[path] = words[path] + phrase[index];
      } else {
        words[path] = phrase[index];
      }
    } else {
      path++;
    }
  }
  return words
}

// Desafio 4
function concatName(names) {
  let lastName = names[names.length - 1];
  let firstName = names[0];
  return lastName + ", " + firstName
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  let totalPoints = pointsWins + pointsTies;
  return totalPoints
}

// Desafio 6
function highestCount(randomNumbers) {
  let larger = 0;
  let count = 0
  for (let index = 0; index < randomNumbers.length; index++) {
    if (randomNumbers[index] > larger) {
      larger = randomNumbers[index];
    }
  }
  for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] == larger) {
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if (distanceCat1 < 0) {
    distanceCat1 = distanceCat1 * -1;
  }
  if (distanceCat2 < 0) {
    distanceCat2 = distanceCat2 * -1;
  }
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat1 == distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(numbersGroup) {
  let numbersGroupResult = [];
  for (positionIndex = 0; positionIndex < numbersGroup.length; positionIndex++) {
    if (numbersGroup[positionIndex] % 3 == 0 && numbersGroup[positionIndex] % 5 == 0) {
      numbersGroupResult[positionIndex] = "fizzBuzz";
    } else if (numbersGroup[positionIndex] % 3 == 0) {
      numbersGroupResult[positionIndex] = "fizz";
    } else if (numbersGroup[positionIndex] % 5 == 0) {
      numbersGroupResult[positionIndex] = "buzz";
    } else {
      numbersGroupResult[positionIndex] = "bug!";
    }
  }
  return numbersGroupResult;
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

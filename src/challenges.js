/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentenceToSplit) {
  return sentenceToSplit.split(' ');
}

// Desafio 4
function concatName(arrayNames) {
  return `${arrayNames[arrayNames.length - 1]}, ${arrayNames[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let larger = 0;
  let result = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > larger) {
      larger = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (larger === array[index]) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat2 - mouse) === 2 && (cat1 - mouse) === 3) {
    return 'cat2';
  } else if ((cat1 - mouse) === 6 && (cat2 - mouse) === 12) {
    return 'cat1';
  } else (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
        result.push("fizzBuzz");
    } else if (arrayNumbers[index] % 3 === 0) {
        result.push("fizz");
    } else if (arrayNumbers[index] % 5 === 0) {
        result.push("buzz");
    } else {
        result.push("bug!");
    }
  }
  return result;
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

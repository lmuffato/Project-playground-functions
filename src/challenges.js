// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  let result = word.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let lastWord = array[(array.length - 1)];
  let firstWord = array[0];
  let result = `${lastWord}, ${firstWord}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties * 1;
  return result;
}

function highestValue(array) {
  let higher = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > higher) {
      higher = array[index];
    }
  }
  return higher;
}

function countNumber(array, number) {
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === number) {
      count += 1;
    }
  }
  return count;
}

// Desafio 6
function highestCount(numbers) {
  let higher = highestValue(numbers);
  let result = countNumber(numbers, higher);
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = (mouse - cat1) ** 2;
  let distanceCat2 = (mouse - cat2) ** 2;
  let result;
  if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

function dividedBy3(number) {
  if (number % 3 === 0) {
    return true;
  }
  return false;
}

function dividedBy5(number) {
  if (number % 5 === 0) {
    return true;
  }
  return false;
}

function dividedBy3And5(number) {
  let msg;
  if (dividedBy3(number) && dividedBy5(number)) {
    msg = 'fizzBuzz';
  } else if (dividedBy3(number)) {
    msg = 'fizz';
  } else if (dividedBy5(number)) {
    msg = 'buzz';
  } else {
    msg = 'bug!';
  }
  return msg;
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    result[index] = dividedBy3And5(numbers[index]);
  }
  return result;
}

let vogals = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function checkVogals(character) {
  for (let key in vogals) {
    if (character === key) {
      return vogals[key];
    }
  }
  return false;
}

function transformVogalsIntoNumbers(word) {
  let codedWord = [];
  for (let index = 0; index < word.length; index += 1) {
    if (checkVogals(word[index]) !== false) {
      codedWord.push(checkVogals(word[index]));
    } else if (checkVogals(word[index]) === false) {
      codedWord.push(word[index]);
    }
  }
  return codedWord.join('');
}

// Desafio 9
function encode(word) {
  let code = transformVogalsIntoNumbers(word);
  return code;
}

function checkNumbers(character) {
  for (let key in vogals) {
    if (parseInt(character, 0) === vogals[key]) {
      return key;
    }
  }
  return false;
}

function transformNumbersIntoVogals(word) {
  let decodedWord = [];
  for (let index = 0; index < word.length; index += 1) {
    if (checkNumbers(word[index]) !== false) {
      decodedWord.push(checkNumbers(word[index]));
    } else if (checkNumbers(word) === false) {
      decodedWord.push(word[index]);
    }
  }
  return decodedWord.join('');
}

function decode(word) {
  let decoding = transformNumbersIntoVogals(word);
  return decoding;
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

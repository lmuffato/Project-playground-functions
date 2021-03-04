// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let splitArray = [];
  splitArray = (string.split(' '));
  return splitArray;
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
  // Corrigido pelo --fix do eslint
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(array) {
  let highestNumb = array[0];
  let repeatedNumb = 0;
  for (let index in array) {
    if (array[index] > highestNumb) {
      highestNumb = array[index];
    }
  }
  for (let index in array) {
    if (array[index] === highestNumb) {
      repeatedNumb += 1;
    }
  }
  return repeatedNumb;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  }
  if (cat1Dist > cat2Dist) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayResult = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    }
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      arrayResult.push('fizz');
    }
    if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      arrayResult.push('buzz');
    }
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}

// Desafio 9
function encode(string) {
  let encodeString = [];
  encodeString = string.split('');
  return encodeString;
  for (let index = 0; index <= encodeString.length; index += 1) {
    if (encodeString[index] === 'a') {
      encodeString[index] = 1;
    }
    if (encodeString[index] === 'e') {
      encodeString[index] = 2;
    }
  }
  return encodeString;
}

console.log(encode('eduardo'));

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

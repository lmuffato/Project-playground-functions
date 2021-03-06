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

// Desafio 9 - teste sem o for in
function encode(string) {
  let stringToEncode = string.split(''); // separa a string que será codificada
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      stringToEncode = '1';
    } else if (string[index] === 'e') {
      stringToEncode = '2';
    } else if (string[index] === 'i') {
      stringToEncode = '3';
    } else if (string[index] === 'o') {
      stringToEncode = '4';
    } else if (string[index] === 'u') {
      stringToEncode = '5';
    } else {
      stringToEncode = string[index]; // mantem as consoantes * importante
    }
  }
  return stringToEncode.concat(stringToEncode); // junta a array em string
}

function decode(string) {
  let stringToEncode = string.split(''); // separa a string que será codificada
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      stringToEncode = 'a';
    } else if (string[index] === '2') {
      stringToEncode = 'e';
    } else if (string[index] === '3') {
      stringToEncode = 'i';
    } else if (string[index] === '4') {
      stringToEncode = 'o';
    } else if (string[index] === '5') {
      stringToEncode = 'u';
    } else {
      stringToEncode = string[index]; // mantem as consoantes * importante
    }
  }
  return stringToEncode.concat(stringToEncode); // junta a array em string
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

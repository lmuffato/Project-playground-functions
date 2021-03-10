// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangulo = ((base * height) / 2);
  return triangulo;
}

// Desafio 3
function splitSentence(string) {
  let splited = [];
  splited = string.split(' ');

  return splited;
}

// Desafio 4
function concatName(arrayNames) {
  let firstWord = arrayNames[0];
  let lastArray = arrayNames.length - 1;
  let lastWord = arrayNames[lastArray];

  let lastFirst = lastWord.concat(', ', firstWord);

  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;

  let score = winsPoints + tiesPoints;

  return score;
}

// Desafio 6
function highestCount(arrayValues) {
  let crescente = arrayValues.sort();
  let higherNumber = crescente[crescente.length - 1];
  let repeat = [higherNumber];

  for (let index = 0; index < arrayValues.length - 1; index += 1) {
    if (arrayValues[index] === higherNumber) {
      repeat.push(arrayValues[index]);
    }
  }

  return repeat.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }

  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }

  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numericArray) {
  let codeWords = [];
  
  for (let i = 0; i < numericArray.length; i += 1) {
    let div3 = numericArray[i]%3;
    let div5 = numericArray[i]%5;

    if (div3 == 0 && div5 == 0) {
      codeWords.push('fizzBuzz');
    } else if (div3 == 0) {
      codeWords.push('fizz');
    } else if (div5 == 0) {
      codeWords.push('buzz');
    } else {
      codeWords.push('bug!');
    } 
  }

  return codeWords;
}

// Desafio 9
function encode(stringSentence) {

  let coded = [];
  coded = stringSentence.split('');

  for (let index = 0;index < coded.length; index += 1) {
    if (coded[index] === 'a') {
      coded[index] = 1;
    } 
    if (coded[index] === 'e') {
      coded[index] = 2;
    }
    if (coded[index] === 'i') {
      coded[index] = 3;
    }
    if (coded[index] === 'o') {
      coded[index] = 4;
    }
    if (coded[index] === 'u') {
      coded[index] = 5;
    }
  }

  return coded.join('')
}

function decode(stringCoded) {
  let decoded = [];
  decoded = stringCoded.split('');

  for (let index = 0;index < decoded.length; index += 1) {
    if (decoded[index] === '1') {
      decoded[index] = 'a';
    }
    if (decoded[index] === '2') {
      decoded[index] = 'e';
    }
    if (decoded[index] === '3') {
      decoded[index] = 'i';
    }
    if (decoded[index] === '4') {
      decoded[index] = 'o';
    }
    if (decoded[index] === '5') {
      decoded[index] = 'u';
    }
  }
  
  return decoded.join('');
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

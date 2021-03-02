// Desafio 1
function compareTrue(argBool1, argBool2) {
  return !!(argBool1 && argBool2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumber = arrayNumbers[0];
  let higherNumberCount = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    higherNumber = arrayNumbers[index] > higherNumber ? arrayNumbers[index] : higherNumber;
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    higherNumberCount += arrayNumbers[index] === higherNumber;
  }
  return higherNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 === mouse - cat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (mouse - cat1 < mouse - cat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];
  for (let number of arrayNumbers) {
    if (number % 3 === 0 && number % 5 === 0) {
      result.push('fizzBuzz');
    } else if (number % 3 === 0) {
      result.push('fizz');
    } else if (number % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(phrase) {
  let dictionary = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let phraseEncode = '';
  for (let index = 0; index < phrase.length; index += 1) {
    for (let dictionaryKey in dictionary) {
      if (phrase[index] === dictionaryKey) {
        phraseEncode += dictionary[dictionaryKey];
      }
    }
    if (phraseEncode[index] === undefined) {
      phraseEncode += phrase[index];
    }
  }
  return phraseEncode;
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

console.log(encode('hi there!'));

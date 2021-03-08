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
    higherNumber = arrayNumbers[index] > higherNumber
      ? arrayNumbers[index]
      : higherNumber;
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
function isFizzBuzz(number) {
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

function fizzBuzz(arrayNumbers) {
  let result = [];
  for (let number of arrayNumbers) {
    result.push(isFizzBuzz(number));
  }
  return result;
}

// Desafio 9
function populateDictionary() {
  return {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
}

function encodeDictionary(char) {
  let dictionary = populateDictionary();
  for (let dictionaryKey in dictionary) {
    if (char === dictionaryKey) {
      return dictionary[dictionaryKey];
    }
  }
  return '';
}

function encode(phrase) {
  let phraseEncode = '';
  for (let index = 0; index < phrase.length; index += 1) {
    phraseEncode += encodeDictionary(phrase[index]);
    if (phraseEncode[index] === undefined) {
      phraseEncode += phrase[index];
    }
  }
  return phraseEncode;
}

function decodeDictionary(char) {
  let dictionary = populateDictionary();
  for (let dictionaryKey in dictionary) {
    if (char === dictionary[dictionaryKey]) {
      return dictionaryKey;
    }
  }
  return '';
}

function decode(phrase) {
  let phraseDecode = '';
  for (let index = 0; index < phrase.length; index += 1) {
    phraseDecode += decodeDictionary(phrase[index]);
    if (phraseDecode[index] === undefined) {
      phraseDecode += phrase[index];
    }
  }
  return phraseDecode;
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

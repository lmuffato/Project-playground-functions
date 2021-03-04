// Desafio 1
function compareTrue(bool01, bool02) {
  if (bool01 === true && bool02 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string01) {
  let sentenceArray = [];
  sentenceArray = string01.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(arrayString) {
  let arrayResult = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
  return arrayResult.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let countNumber = 0;
  let hightestNumber = arrayNumbers.reduce((a, b) => Math.max(a, b));

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === hightestNumber) {
      countNumber += 1;
    }
  }

  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'Valores inválidos';
}

// Desafio 8
function Div3(number) {
  let div3 = number % 3 === 0;
  return div3;
}
function Div5(number) {
  let div5 = number % 5 === 0;
  return div5;
}

function phrase(number) {
  let div3 = Div3(number);
  let div5 = Div5(number);
  if (div3 === true && div5 === true) {
    return 'fizzBuzz';
  } if (div3 === true) {
    return 'fizz';
  } if (div5 === true) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrayN8) {
  for (let index = 0; index < arrayN8.length; index += 1) {
    arrayN8[index] = phrase(arrayN8[index]);
  }
  return arrayN8;
}

// Desafio 9
function encript(code) {
  switch (code) {
    case "a":
      return "1";
    case "e":
      return "2";
    case "i":
      return "3";
    case "o":
      return "4";
    case "u":
      return "5";
    default:
      return code;
  }
}

function decript(code) {
  switch (code) {
    case "1":
      return "a";
    case "2":
      return "e";
    case "3":
      return "i";
    case "4":
      return "o";
    case "5":
      return "u";
    default:
      return code;
  }
}

function encode(stringIn) {
  let encodedString = stringIn.split('');
  for (let index = 0; index < stringIn.length; index += 1) {
    encodedString[index] = encript(stringIn[index]);
  }
  return encodedString.join('')
}

function decode(stringOut) {
  let decodedString = stringOut.split('');
  for (let index in decodedString) {
    decodedString[index] = decript(stringOut[index]);
  }
  return decodedString.join('');
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

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
function fizzBuzz(arrayN8) {
  let arrayResultN8 = arrayN8;
  for (let index in arrayN8) {
    if ((arrayN8[index] % 3) === 0 && (arrayN8[index] % 5) === 0) {
      arrayResultN8[index] = 'fizzBuzz';
    } else if ((arrayN8[index] % 3) === 0 && (arrayN8[index] % 5) !== 0) {
      arrayResultN8[index] = 'fizz';
    } else if ((arrayN8[index] % 3) !== 0 && (arrayN8[index] % 5) === 0) {
      arrayResultN8[index] = 'buzz';
    } else {
      arrayResultN8[index] = 'bug!';
    }
  }
  return arrayResultN8;
}
console.log(fizzBuzz([9, 25]))

// Desafio 9
function encode(stringIn) {
  let encodedString = stringIn;
  for (let indexEnc in encodedString) {
    switch (encodedString[indexEnc]) {
      case 'a': 
        encodedString[indexEnc] = '1';
        break;
      case 'e':
        encodedString[indexEnc] = '2';
        break;
      case 'i':
        encodedString[indexEnc] = '3';
        break;
      case 'o':
        encodedString[indexEnc] = '4';
        break
      case 'u':
        encodedString[indexEnc] = '5';
        break;
      default:
        encodedString[indexEnc] = encodedString[indexEnc];
    }
  }
  return encodedString;
}

function decode(stringOut) {
  let decodedString = stringOut;

  for (let indexDec in decodedString) {
    switch (decodedString[indexDec]) {
      case '1': 
        decodedString[indexDec] = 'a';
        break;
      case '2':
        decodedString[indexDec] = 'e';
        break;
      case '3':
        decodedString[indexDec] = 'i';
        break;
      case '4':
        decodedString[indexDec] = 'o';
        break;
      case '5':
        decodedString[indexDec] = 'u';
        break;
      default:
        decodedString[indexDec] = decodedString[indexDec];
    }
  }
  return decodedString;
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

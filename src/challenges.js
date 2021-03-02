// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(originalString) {
  let wordsArray = [];
  let singleWord = '';
  for (let char = 0; char <= originalString.length; char += 1) {
    if (char === (originalString.length - 1)) {
      singleWord += originalString[char];
      wordsArray.push(singleWord);
    } else if (originalString[char] !== ' ') {
      singleWord += originalString[char];
    } else {
      wordsArray.push(singleWord);
      singleWord = '';
    }
  }
  return wordsArray;
}

// Desafio 4
function concatName(stringArray) {
  return stringArray[stringArray.length - 1] + ', ' + stringArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(numberArray) {
  // Encontrar o maior numero e guardar na variavel largestNumber
  let largestNumber = 0;
  for (let i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] > largestNumber) {
      largestNumber = numberArray[i];
    }
  }
  // Contar quantas vezes o largestNumber aparece
  let count = 0;
  for (let j = 0; j < numberArray.length; j += 1) {
    if (numberArray[j] === largestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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

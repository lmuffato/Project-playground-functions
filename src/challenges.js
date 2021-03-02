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
function splitSentence(setence) {
  return setence.split(' ');
}

// Desafio 4
function concatName(namesArray) {
  let lastIndex = namesArray.length - 1;

  return `${namesArray[lastIndex]}, ${namesArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = 0;
  let sum = 0;
  for (let numberIndex in numbersArray) {
    if (numbersArray[numberIndex] > highestNumber) {
      highestNumber = numbersArray[numberIndex];
    }
  }

  for (let highestNumberIndex in numbersArray) {
    if (numbersArray[highestNumberIndex] === highestNumber) {
      sum += 1;
    }
  }

  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 > mouse - cat2) {
    return 'cat1';
  } else if (mouse - cat2 > mouse - cat1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

// Desafio 10
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

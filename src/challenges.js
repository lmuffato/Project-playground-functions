// Desafio 1
function compareTrue(bool1, bool2) {
  let resultBoll;
  if (bool1 === true && bool2 === true) {
    resultBoll = true;
  } else {
    resultBoll = false;
  }
  return resultBoll;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString;
  arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  let string;
  let lastIndex;
  lastIndex = arrayString.length - 1;
  string = `${arrayString[lastIndex]}, ${arrayString[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNunbers) {
  let count = 0;
  let higherNumber = 0;
  for (let index = 0; index < arrayNunbers.length; index += 1) {
    for (let index2 = 0; index2 < arrayNunbers.length; index2 += 1) {
      if (arrayNunbers[index2] >= higherNumber) {
        higherNumber = arrayNunbers[index2];
      }
    }
    if (arrayNunbers[index] === higherNumber) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1;
  let distanceCat2;
  let nearCatch;
  distanceCat1 = cat1 - mouse;
  distanceCat2 = cat2 - mouse;
  if (distanceCat2 > distanceCat1) {
    nearCatch = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    nearCatch = 'cat2';
  } else {
    nearCatch = 'os gatos trombam e o rato foge';
  }
  return nearCatch;
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

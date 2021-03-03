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
  distanceCat1 = Math.abs(cat1 - mouse);
  distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat2 > distanceCat1) {
    nearCatch = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    nearCatch = 'cat2';
  } else {
    nearCatch = 'os gatos trombam e o rato foge';
  }
  return nearCatch;
}
function divisibleBy3Function(number) {
  let div3;
 
  if (number % 3 === 0) {
    div3 = true;
  } else {
    div3 = false;
  }
  return div3;
}
function divisibleBy5Function(number) {
  let div5;
  if (number % 5 === 0 ) {
    div5 = true;
  } else {
    div5 = false;
  }
  return div5;
}

function arrayBug(divisibleBy3, divisibleBy5) {
  let string;
  if (divisibleBy3 === true && divisibleBy5 === true) {
    string = 'fizzBuzz';
  } else if (divisibleBy3 === true) {
    string = 'fizz';
  } else if (divisibleBy5 === true) {
    string = 'buzz';
  } else {
    string = 'bug!';
  }
  return string;
}

// Desafio 8
function fizzBuzz(arrayNunbers) {
  let divisibleBy3;
  let divisibleBy5;
  let arrayFizzBuzz = [];
  for (let index = 0; index < arrayNunbers.length; index += 1) {
    divisibleBy3 = divisibleBy3Function(arrayNunbers[index]);
    divisibleBy5 = divisibleBy5Function(arrayNunbers[index]);
    arrayFizzBuzz.push(arrayBug(divisibleBy3, divisibleBy5));
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}
let a = [2, 15, 7, 9, 45];
console.log(fizzBuzz(a));
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

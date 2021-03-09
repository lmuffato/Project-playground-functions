// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } if (value1 === false || value2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');
  return arrayOfStrings;
}

// Desafio 4
function concatName(array) {
  let swap = array[array.length -1];
  swap =+ ', ';
  swap =+ array[0];
  return swap;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function indexMaxNumber(array) {
  let numberMax = 0;
  for (let indexMaxValue in array) {
    if (array[indexMaxValue] > numberMax) {
      numberMax = array[indexMaxValue];
    }
  }
  return numberMax;
}

function highestCount(array) {
  let maxNumber = indexMaxNumber(array);
  let repeat = 0;
  for (let indexCheckRepeat in array) {
    if (array[indexCheckRepeat] === maxNumber) {
      repeat += 1;
    }
  }
  return repeat;
}
console.log(highestCount([9, 9, 8, 8, 9, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  let result;
  if (dist1 === dist2) {
    result = 'os gatos trombam e o rato';
  } else if (dist1 > dist2) {
    result = 'cat2';
  } else {
    result = 'cat1';
  }
  return result;
}

// Desafio 8
function fizzBuzz() {
  
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

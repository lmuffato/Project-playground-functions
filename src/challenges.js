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
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(strings) {
  let firstItem = strings[0];
  let lastItem = strings[strings.length - 1];
  let concatString = `${lastItem}, ${firstItem}`;
  return concatString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function countBigger(values, bigger) {
  let counter = 0;
  for (let index = 0; index <= values.length; index += 1) {
    if (values[index] === bigger) {
      counter += 1;
    }
  }
  return counter;
}

function highestCount(values) {
  let biggest = 0;
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] > biggest) {
      biggest = values[index];
    }
  }
  return countBigger(values, biggest);
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function words(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  } if (number % 3 === 0) {
    return 'fizz';
  } if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  let string = [];
  for (let number = 0; number < array.length; number += 1) {
    string.push(words(array[number]));
  }
  return string;
}

console.log(fizzBuzz([7, 9]));

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

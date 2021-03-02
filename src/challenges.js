// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === value2 && value1 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(value1, value2) {
  return (value1 * value2) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let word = sentence.split(' ');
  return word;
}

// Desafio 4
function concatName(array) {
  let sentence = '';
  sentence += array[array.length - 1];
  sentence += ', ';
  sentence += array[0];
  return sentence;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let number = highestNumber(array);
  let counter = 0;
  for (let verifyCount in array) {
    if (array[verifyCount] === number) {
      counter += 1;
    }
  }
  return counter;
}

function highestNumber(array) {
  let higherNumber = array[0];
  for (let verifyHighest in array) {
    if (array[verifyHighest] > higherNumber) {
      higherNumber = array[verifyHighest];
    }
  }
  return higherNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat1Distance > cat2Distance) {
    return 'cat1';
  }
  if (cat2Distance > cat1Distance) {
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

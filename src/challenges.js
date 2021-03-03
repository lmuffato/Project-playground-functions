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
function splitSentence(string) {
  return String(string).split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array.reduce((a, b) => Math.max(a, b));
  const arrayFiltered = array.filter((x) => x === highestNumber);
  return arrayFiltered.length;
}

// Desafio 7
const cat1Closed = (mouse, cat1, cat2) => (mouse < cat1 && cat1 < cat2)
  || (mouse > cat1 && cat1 > cat2);
const cat2Closed = (mouse, cat1, cat2) => (mouse < cat2 && cat2 < cat1)
  || (mouse > cat2 && cat2 > cat1);
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) return 'os gatos trombam e o rato foge';
  let result;
  if (cat1Closed(mouse, cat1, cat2)) {
    result = 'cat1';
  } else if (cat2Closed(mouse, cat1, cat2)) {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  return array.map((el) => {
    let result = 'bug!';
    if (el % 3 === 0 && el % 5 === 0) {
      result = 'fizzBuzz';
    } else if (el % 5 === 0) {
      result = 'buzz';
    } else if (el % 3 === 0) {
      result = 'fizz';
    }
    return result;
  });
}

// Desafio 9
const aeiou = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(string) {
  let output = string;
  for (const key in aeiou) {
    if (key) { // Adicionado para Eslint não chorar.
      const regex = `${key}`;
      output = output.replace(RegExp(regex, 'gi'), aeiou[key]);
    }
  }
  return output;
}
function decode(string) {
  let output = string;
  for (const key in aeiou) {
    if (key) { // Adicionado para Eslint não chorar.
      output = output.replace(RegExp(aeiou[key], 'gi'), key);
    }
  }
  return output;
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

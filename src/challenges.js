// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = base * height / 2;
  return calc;
}

// Desafio 3 /
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(items) {
  let firstItem = items[items.length - 1];
  let lastItem = items[0];
  let ponctuation = ', ';
  return lastItem + ponctuation + firstItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount() {
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = mouse - cat1;
  let cat2Position = mouse - cat2;
  if (cat1Position > cat2Position) {
    return 'cat2';
  } if (cat1Position < cat2Position) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzOrBuzz = [];
  for (let index = 0; index < numbers.length; index+= 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      fizzOrBuzz.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      fizzOrBuzz.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      fizzOrBuzz.push('buzz');
    } else {
      fizzOrBuzz.push('bug!');
    }  
  }
  return fizzOrBuzz
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

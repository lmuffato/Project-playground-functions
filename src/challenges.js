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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = mouse - cat1;
  let cat2Distance = mouse - cat2;
  if (cat1Distance < 0) {
    cat1Distance *= -1;
  } if (cat2Distance < 0) {
    cat2Distance *= -1;
  } if (cat1Distance < cat2Distance) {
    return 'cat1';
  } if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(1, 3, 5));

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

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
// Com adições sugeridas por Wanderson Sales - Turma 10 - Tribo A

let coder = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(string) {
  let code = '';
  for (let letters in string) {
    if (coder[string[letters]]) {
      code = code.concat(coder[string[letters]]);
    } else {
      code = code.concat(string[letters]);
    }
  }
  return code;
}

console.log(encode('hi there!'));

let decoder = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function decode(string) {
  let uncode = '';
  for (let letters in string) {
    if (decoder[string[letters]]) {
      uncode = uncode.concat(decoder[string[letters]]);
    } else {
      uncode = uncode.concat(string[letters]);
    }
  }
  return uncode;
}

console.log(decode('h3 th2r2!'));

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

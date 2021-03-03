// Desafio 1
function compareTrue(conditionOne, conditionTwo) {
  if ((conditionOne === true) && (conditionTwo === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  let string = [''];
  let counter = 0;
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === ' ') {
      counter += 1;
      string[counter] = [''];
    } else {
      string[counter] += phrase[index];
    }
  }
  return string;
}

// Desafio 4
function concatName(string) {
  let phrase = string[(string.length - 1)];
  phrase += ', ';
  phrase += string[0];
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + ties);
}

// Desafio 6
function highestCount(numbers) {
  let counter = 1;
  let langer = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > langer) {
      counter = 1;
      langer = numbers[index];
    } else if (langer === numbers[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse >= 0) {
    cat1 = (mouse - cat1);
    cat2 = (mouse - cat2);
  } else {
    cat1 = ((-1 * mouse) - cat1);
    cat2 = ((-1 * mouse) - cat2);
  }
  if (cat1 < cat2) {
    return 'cat2';
  }
  if (cat1 > cat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let string = [''];
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
      string[index] = 'fizzBuzz';
    } else if (numbers[index] % 3 === 0) {
      string[index] = 'fizz';
    } else if (numbers[index] % 5 === 0) {
      string[index] = 'buzz';
    } else {
      string[index] = 'bug!';
    }
  }
  return string;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

console.log(catAndMouse(-3, 3, 6));
console.log(fizzBuzz([9, 25]));

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

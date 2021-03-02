// Desafio 1
function compareTrue(bol1, bol2) {
  if (bol1 === true && bol2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let str = [];
  let word = '';
  for (let index = 0; index <= phrase.length; index += 1) {
    if (phrase[index] === ' ' || index === phrase.length) {
      str.push(word);
      word = '';
    } else {
      word += phrase[index];
    }
  }
  return str;
}

// Desafio 4
function concatName(names) {
  let namesConcatenated = `${names[names.length - 1]}, ${names[0]}`;
  return namesConcatenated;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  let soma = wins + ties;
  return soma;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  let numberOfTime = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];
    }
  }

  for (let j = 0; j < numbers.length; j += 1) {
    if (numbers[j] === highestNumber) {
      numberOfTime += 1;
    }
  }
  return numberOfTime;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }

  if (cat2 - mouse > cat1 - mouse) {
    return 'cat1';
  }

  return 'cat2';
}

// Desafio 8
function fizzBuzz(number) {
  let array = [];

  for (let index = 0; index < number.length; index += 1) {
    if (number[index] % 3 === 0 && number[index] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (number[index] % 5 === 0) {
      array.push('buzz');
    } else if (number[index] % 3 === 0) {
      array.push('fizz');
    } else {
      array.push('bug!');
    }
  }
  return array;
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

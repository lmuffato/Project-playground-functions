// Desafio 1
function compareTrue(number1, number2) {
  // seu código aqui
  return number1 && number2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let i;
  let j = 0;
  let array = [string[0]];

  for (i = 1; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      array[j] += string[i];
    } else {
      j += 1;
      i += 1;
      array[j] = string[i];
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = array[array.length - 1] + ', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let i = 0;
  let bigger = array[0];
  let repeats = 0;
  for (i = 1; i < array.length; i += 1) {
    if (array[i] > bigger) {
      bigger = array[i];
    }
  }
  for (i = 0; i < array.length; i += 1) {
    if (bigger === array[i]) {
      repeats += 1;
    }
  }
  return repeats;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let d1 = Math.sqrt((mouse - cat1) ** 2);
  let d2 = Math.sqrt((mouse - cat2) ** 2);

  if (d1 < d2) {
    return cat1;
  } else if (d2 < d1) {
    return cat2;
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result[i] = 'fizzBuzz';
    }
    else if (array[i] % 3 === 0) {
      result[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      result[i] = 'buzz';
    } else {
      result[i] = 'bug!';
    }
  }
  return result;
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

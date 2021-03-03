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
  let words = [];
  let word = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      words.push(word);
      word = '';
    } else if (index === (string.length - 1)) {
      word += string[index];
      words.push(word);
      word = '';
    } else {
      word += string[index];
    }
  }
  return words;
}

// Desafio 4
function concatName(string) {
  let first = string[string.length - 1];
  let last = string[0];
  return `${first}, ${last}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestNumber(array) {
  let maior = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  return maior;
}

function highestCount(array) {
  let maior = highestNumber(array);
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;
  if (dist1 < 0) {
    dist1 *= (-1);
  }
  if (dist2 < 0) {
    dist2 *= (-1);
  }
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist1 > dist2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fB(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  let strings = [];
  for (let index = 0; index < array.length; index += 1) {
    strings.push(fB(array[index]));
  }
  return strings;
}

// Desafio 9
function letterToNumber(letter) {
  if (letter === 'a') {
    return 1;
  }
  if (letter === 'e') {
    return 2;
  }
  if (letter === 'i') {
    return 3;
  }
  if (letter === 'o') {
    return 4;
  }
  if (letter === 'u') {
    return 5;
  }
  return letter;
}

function encode(string) {
  let aux = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case 'a':
      aux += 1;
      break;
    case 'e':
      aux += 2;
      break;
    case 'i':
      aux += 3;
      break;
    case 'o':
      aux += 4;
      break;
    case 'u':
      aux += 5;
      break;
    default:
      aux += string[index];
    }
  }
  return aux;
}

function decode(string) {
  let aux = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case '1':
      aux += 'a';
      break;
    case '2':
      aux += 'e';
      break;
    case '3':
      aux += 'i';
      break;
    case '4':
      aux += 'o';
      break;
    case '5':
      aux += 'u';
      break;
    default:
      aux += string[index];
    }
  }
  return aux;
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

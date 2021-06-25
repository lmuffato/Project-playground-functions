// Desafio 1
const compareTrue = (value1, value2) => {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
};
console.log(compareTrue(false, true)); // false
console.log(compareTrue(false, false)); // false
console.log(compareTrue(true, true)); // true

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;
console.log(calcArea(10, 50)); // 250
console.log(calcArea(5, 2)); // 5
console.log(calcArea(51, 1)); // 25.5

// Desafio 3
const splitSentence = (string) => string.split(' ');
console.log(splitSentence('go Trybe')); // ['go', 'Trybe']
console.log(splitSentence('vamo que vamo')); // ['vamo', 'que', 'vamo']
console.log(splitSentence('foguete')); // ['foguete']

// Desafio 4
const concatName = (arrayStrings) => {
  let lastItem = (arrayStrings.length - 1);
  return (`${arrayStrings[lastItem]}, ${arrayStrings[0]}`);
};
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); // Paolillo, Lucas
console.log(concatName(['foguete', 'não', 'tem', 'ré'])); // ré, foguete
console.log(concatName(['captain', 'my', 'captain'])); // captain, captain

// Desafio 5
const footballPoints = (wins, ties) => ((wins * 3) + ties);
console.log(footballPoints(14, 8)); // 50
console.log(footballPoints(1, 2)); // 5
console.log(footballPoints(0, 0)); // 0

// Desafio 6
const highestValue = (values) => {
  let maiorItem = values[0];
  for (let key of values) {
    if (key > maiorItem) {
      maiorItem = key;
    }
  }
  return maiorItem;
};

function highestCount(values) {
  let repeticoes = 0;
  for (let key of values) {
    if (key === highestValue(values)) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7])); // 2
console.log(highestCount([0, 4, 4, 4, 9, 2, 1])); // 1
console.log(highestCount([0, 0, 0])); // 3

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  // Usado como referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  if (distance1 < distance2) {
    return 'cat1';
  } if (distance2 < distance1) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function BugFizzOrBuzz(divisibleNumbers) {
  if (divisibleNumbers % 3 === 0 && divisibleNumbers % 5 !== 0) {
    return 'fizz';
  } if (divisibleNumbers % 3 !== 0 && divisibleNumbers % 5 !== 0) {
    return 'bug!';
  }
  return 'buzz';
}

function fizzBuzz(divisibleNumbers) {
  let array = [];
  for (let index in divisibleNumbers) {
    if (divisibleNumbers[index] % 3 === 0 && divisibleNumbers[index] % 5 === 0) {
      array.push('fizzBuzz');
    } else {
      array.push(BugFizzOrBuzz(divisibleNumbers[index]));
    }
  }
  return array;
}
/* Teste */
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(encript) {
  let fraseEncode = '';
  let alt = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let cript of encript) {
    if (alt[cript]) {
      fraseEncode += alt[cript];
    } else {
      fraseEncode += cript;
    }
  } return fraseEncode;
}

function decode(decript) {
  let fraseDecode = '';
  let alt = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let uncript of decript) {
    if (alt[uncript]) {
      fraseDecode += alt[uncript];
    } else {
      fraseDecode += uncript;
    }
  } return fraseDecode;
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

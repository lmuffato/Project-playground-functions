// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let phrase = string.split(' ');
  return phrase;
}

// Desafio 4
function concatName(arrayStrings) {
  let lastItem = (arrayStrings.length - 1);
  return (`${arrayStrings[lastItem]}, ${arrayStrings[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = 3;
  let empates = 1;
  return (vitorias * wins + empates * ties);
}

// Desafio 6
function maxNumber(values) {
  let maiorItem = values[0];
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] > maiorItem) {
      maiorItem = values[index];
    }
  }
  return maiorItem;
}
function highestCount(values) {
  let repeticoes = 0;
  for (let currentNumber = 0; currentNumber < values.length; currentNumber += 1) {
    if (values[currentNumber] === maxNumber(values)) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

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

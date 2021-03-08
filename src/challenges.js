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
  return (arrayStrings[lastItem] + ', ' + arrayStrings[0]);
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
function catAndMouse(cat1, cat2, mouse) {
  let distance1 = parseInt(cat1) - parseInt(mouse);
  let distance2 = parseInt(cat2) - parseInt(mouse);
  if (distance1 < distance2) {
    return 'cat1';
  } if (distance2 < distance1) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(divisible) {
  let fizzOrBuzz = [];
  for (let currentNumber= 0; currentNumber < divisible; currentNumber += 1) {
    if (divisible[currentNumber] % 3 === 0 && divisible[currentNumber] % 5 === 0) {
      fizzOrBuzz.push('fizzBuzz');
    } else if (divisible[currentNumber] % 3 === 0) {
      fizzOrBuzz.push('fizz');
    } else if (divisible[currentNumber] % 5 === 0) {
      fizzOrBuzz.push('buzz');
    } else {
      fizzOrBuzz.push('bug!');
    }
  }
  return fizzOrBuzz;
}

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

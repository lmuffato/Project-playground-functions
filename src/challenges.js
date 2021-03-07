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
let repeticoes = 0;
let maiorItem = 0;
function highestCount(values) {
  for (let index in values) {
    if (values[index] > maiorItem) {
      maiorItem = values[index];
    }
  } for (let currentNumber in values) {
    if (values[currentNumber] === maiorItem) {
      repeticoes += 1;
    }
  } return repeticoes;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } else if (cat2 - mouse < cat1 - mouse) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
let fizzOrBuzz = []
function fizzBuzz(divisibleNumbers) {
  for(let currentDivisible in divisibleNumbers) {
    if (divisibleNumbers[currentDivisible] % 3 && divisibleNumbers[currentDivisible] % 5 === 0) {
      fizzOrBuzz.push("fizzbuzz")
    } else if (divisibleNumbers[currentDivisible] % 3 === 0) {
      fizzOrBuzz.push("fizz")
    } else if (divisibleNumbers[currentDivisible] % 5 === 0) {
      fizzOrBuzz.push("buzz")
    } else {
      fizzOrBuzz.push("bug")
    }
  } return fizzOrBuzz
} console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(encript) {
  let fraseEncode = '';
  let alt = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    } 
      for (let cript of encript) {
      if (alt[cript]) {
      fraseEncode += alt[cript]
    } else {
      fraseEncode += cript
    }
  } return fraseEncode;
}
console.log(encode("hi, there"))

function decode(decript) {
    let fraseDecode = '';
    let alt = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u',
      } 
        for (let uncript of decript) {
        if (alt[uncript]) {
        fraseDecode += alt[uncript]
      } else {
        fraseDecode += uncript
      }
    } return fraseDecode;
  } console.log(decode("h3, th2r2"))

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

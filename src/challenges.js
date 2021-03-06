// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let resultcalcArea = (base * height) / 2;
  return resultcalcArea;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  let separateSentece = [];
  separateSentece = string.split(' ');
  return separateSentece;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(strings) {
  const concatStrings1 = strings[0];
  const concatStrings2 = strings[(strings.length) - 1];
  return concatStrings2.concat(', ').concat(concatStrings1);
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(numbers) {
  let maxNumber = 0;
  let contador = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maxNumber) {
      maxNumber = numbers[index];
    }
  }
  for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if (numbers[index1] === maxNumber) {
      contador += 1;
    }
  }
  return contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7 (fazer)
function catAndMouse() {
  // seu código aqui
}

// Desafio 8

function fizzBuzz(numbers) {
  let modulo = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      modulo.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      modulo.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      modulo.push('buzz');
    } else {
      modulo.push('bug');
    }
  }
  return modulo;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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

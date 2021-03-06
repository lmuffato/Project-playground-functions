// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height) / 2;
  return triangulo;
}
// console.log(calcArea(10, 50));
// Desafio 3
function splitSentence(array) {
  let separaçaoString = array.split(' ');
  return separaçaoString;
}
console.log(splitSentence('go Trybe'));
// Desafio 4 ;

function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[[0]]}`;
  return string;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// Desafio 5
function footballPoints(wins, ties) {
  let wins1 = wins * 3;
  let ties1 = ties * 1;
  return wins1 + ties1;
}

console.log(footballPoints(0, 0));
// Desafio 6
function highestCount(array) {
  let maior = 0;
  let conta = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let index1 = 0; index1 < array.length; index1 += 1) {
    if (array[index1] === maior) {
      conta += 1;
    }
  }
  return conta;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// seu código aqui
console.log(catAndMouse(4, 4, 4));

// Desafio 8
function fizzBuzz(array) {
  let output = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      output.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      output.push('fizz');
    } else if (array[index] % 5 === 0) {
      output.push('buzz');
    } else {
      output.push('bug!');
    }
  }
  return output;
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

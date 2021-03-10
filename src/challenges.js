// Desafio 1
function compareTrue(number1, number2) {
  return (number1 === true && number2 === true);
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let array = [];
  array = sentence.split(' ');
  return array;
}

// Desafio 4
function concatName(concat) {
  let input = '';
  let number = concat.length;
  input = concat[number - 1] + ', ' + concat[0];
  return input;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(arrayCalc) {
  let counter = 0;
  let maior = arrayCalc[0];
  for (let index = 0; index < arrayCalc.length; index += 1) {
    if (arrayCalc[index] > maior) {
      maior = arrayCalc[index];
    }
  }
  for (let index = 0; index < arrayCalc.length; index += 1) {
    if (arrayCalc[index] === maior) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = 0;
  let positionCat2 = 0;
  positionCat1 = cat1 - mouse;
  positionCat2 = cat2 - mouse;
  if (positionCat2 > positionCat1) {
    return 'cat1';
  }
  if (positionCat1 > positionCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

console.log(compareTrue(true, false));
console.log(calcArea(10, 50));
console.log(splitSentence('go Trybe'));
console.log(concatName(nomes));
console.log(footballPoints(14, 8));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(catAndMouse(2, 2, 3));

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

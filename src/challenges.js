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
  return String(string).split(' ');
}

// Desafio 4

function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array.reduce((a, b) => Math.max(a, b));
  const arrayFiltered = array.filter(x => x === highestNumber);
  return arrayFiltered.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) return 'os gatos trombam e o rato foge';
  
  if (mouse < cat1 && cat1 < cat2 || mouse > cat1 && cat1 > cat2) {
    return 'cat1';
  } else if (mouse < cat2 && cat2 < cat1 || mouse > cat2 && cat2 > cat1){
    return 'cat2';
  }
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

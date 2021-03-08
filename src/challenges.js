// Desafio 1
function compareTrue(val1, val2) {
  let result;
  if (val1 === true && val2 === true) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  console.log(area);
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let split = [];
  split = phrase.split(' ');
  console.log(split);
  return split;
}

// Desafio 4
function concatName(strArray) {
  let result;
  result = `${strArray[strArray.length - 1]}, ${strArray[0]}`;
  console.log(result);
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = (wins * 3) + ties;
  console.log(points);
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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

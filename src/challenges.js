// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calc = base * height / 2;
  return calc;
}

// Desafio 3 /
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(items) {
  let firstItem = items[items.length -1];
  let secondItem = items[0];
  let concat = [firstItem, secondItem];
  return concat;
}

items = ['Mariana', 'Silvinha', 'Luiza']

console.log(concatName(items))

// Desafio 5
function footballPoints() {
  // seu código aqui
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

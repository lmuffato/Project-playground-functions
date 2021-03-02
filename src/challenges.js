// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(setence) {
  return setence.match(/\w+/g);
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array.reduce((a, b) => Math.max(a, b));
  let numberOfRepetitions = array.filter((item) => (highestNumber === item)).length;
  return numberOfRepetitions;
}

// Desafio 7
// Adicionar Math.abs dica do @Bernardo Salgueiro, fornecendo a dica
// que havia uma função do Math que retornaria o valor absoluto.
function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(cat1 - mouse);
  const distanceCat2 = Math.abs(cat2 - mouse);
  let result = '';
  if (distanceCat1 === distanceCat2) {
    result = 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else result = 'cat2';
  return result;
}
console.log(catAndMouse(1, 0, 2));
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

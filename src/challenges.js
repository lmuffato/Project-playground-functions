// Desafio 1
function compareTrue(value1, value2) {
  let compare;
  if (value1 === true && value2 === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  sentence = sentence.split(' ');
  return sentence;
}

// Desafio 4
function concatName(entry) {
  let lastName = entry[entry.length - 1];
  let firstName = entry[0];
  let concat = lastName + ', ' + firstName;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = wins * 3;
  return victory + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maxNumber = 0;
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maxNumber) {
      maxNumber = numbers[index];
      }
       }  
  for (index = 0; index<numbers.length; index += 1) {
    if (numbers[index] === maxNumber) {
    count += 1;
    }
  }
  return count;
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

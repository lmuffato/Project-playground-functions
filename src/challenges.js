function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(height, base) {
  let area = (base * height / 2);
  return area

}

// Desafio 3
function splitSentence(word) {
  let split = word.split(' ')
  return split

}

// Desafio 4
function concatName(names) {
  let firstName = names [0];
  let lastName = names[names.length-1];

  let conquer = lastName + ', ' + firstName;

  return conquer;
}
console.log(concatName (['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let winspoint = 3;
  let tiespoint = 1;
  let winsplus = wins * winspoint;
  let tiesplus = ties * tiespoint;
  let total = winsplus + tiesplus;

  return total;
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

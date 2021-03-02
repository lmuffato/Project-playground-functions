// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 === true && parameter2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, area) {
  return (base * area) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let newArray = sentence.split (' ');
  return newArray;
}

// Desafio 4
function concatName(fullname) {
  let firstAndLast = fullname[fullname.length-1] + ',' + ' ' + fullname[0];
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let timesAppear = 0;
    let maxNumber = Math.max.apply (null, numbers)
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] === maxNumber){
            timesAppear += 1;
        }
    }
  return timesAppear;
}
// Como encontra o número maior pesquisei no stackoverflow

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

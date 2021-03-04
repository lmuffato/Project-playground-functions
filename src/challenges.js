// Desafio 1
function compareTrue(param01, param02) {
  if (param01 && param02 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
// fiz com a aujda do plantão
function splitSentence(value) {
  return value.split(' ');
}

// Desafio 4
function concatName(lastFirst) {
  return lastFirst[lastFirst.length - 1] + ', ' + lastFirst[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = 0;

  if (wins > 0 && ties > 0) {
    total = (wins * 3) + (ties * 1);
  } else {
    total = 0;
  }
  return total;
}

// Desafio 6
function highestCount(num) {
  let bigNum = 0;
  let repeatNum = 0;

  for (let index in num) {
    if (num[index] >= bigNum) {
      bigNum = num[index];
    }
  }

  for (let i in num) {
    if (num[i] === bigNum) {
      repeatNum += 1;
    }
  }
  return repeatNum;
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

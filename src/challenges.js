// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  let splitedWord = sentence.split(' ');
  return splitedWord;
}

// Desafio 4
function concatName(name) {
  let lastItem = name[name.length - 1];
  let firstItem = name[0];
  let ponctuation = ', ';
  return lastItem + ponctuation + firstItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins * 3) + (ties * 1);
  return score;
}

// Desafio 6
function highestCount(sequence) {
  let max = Math.max(sequence);
  let addRep = 0;
  for (let index = 0; index < sequence.length; index += 1) {
    if (max === sequence[index]) {
      addRep += 1;
      console.log(addRep);
    }
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs(mouse - cat1);
  let mouseCat2 = Math.abs(mouse - cat2);
  if (mouseCat1 < mouseCat2) {
    console.log('cat1');
  }
  if (mouseCat2 < mouseCat1) {
    console.log('cat2');
  }
  if (mouseCat1 === mouseCat2) {
    console.log('os gatos trombam e o rato foge');
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

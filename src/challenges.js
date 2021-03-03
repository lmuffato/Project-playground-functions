// Desafio 1
function compareTrue(bool1 , bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base , height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let word = '';
  let separatedWords = [];
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] != ' ') {
    word += frase[index];
    } 
    if ((frase[index] === ' ') || (index === frase.length-1)) {
      separatedWords.push(word);
      word = '';
    }
  }
  return separatedWords;
}

// Desafio 4
function concatName(words) {
  return words[words.length-1] + ', ' + words[0];  
}

// Desafio 5
function footballPoints(wins , ties) {
  return 3 * wins + ties;
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

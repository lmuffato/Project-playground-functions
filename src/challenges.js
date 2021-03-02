// Desafio 1
function compareTrue(bolean1, bolean2) {
  if (bolean1 && bolean2 === true){
    return true
  } else {
    return false
  }
}


function calcArea(base, height) {
  return (base*height)/2
}


function splitSentence(phrase) {
  return phrase.split(' ');
}


function concatName(arrayPhrase) {

let phraseDisposition =  arrayPhrase[arrayPhrase.length - 1] + ", " + arrayPhrase[0];

return phraseDisposition

}

function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;

  return wins + ties
}


function highestCount(numbers) {
  let resultado = 0;

  maxNumber = Math.max.apply(Math,numbers)
  // Math.max.apply(Math,Array) found in https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript, Author GSerg
 
  for (index = 0; index < numbers.length; index += 1){
  if (maxNumber === numbers[index]){
  resultado += 1;  
  } 
}
return resultado
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

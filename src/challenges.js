// Desafio 1
function compareTrue(gradeProject, goingToLectures) {
  // seu código aqui
  if (gradeProject === true && goingToLectures === true) {
    return true;
    } else {
    return false;
  }
 }



// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaTriangle;
  return areaTriangle = (base*height)/2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui 
  return sentence.split(' ');
}
//Para resolução do Desafio 3 - Consultei os seguintes artigos: 
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split 
//https://www.codegrepper.com/code-examples/javascript/javascript+split+by+space

// Desafio 4
function concatName() {
  // seu código aqui
}

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

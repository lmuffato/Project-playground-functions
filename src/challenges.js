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
  return areaTriangle = (base * height)/2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui 
  return sentence.split(' ');
}
// Para resolução do Desafio 3, consultei os seguintes artigos: 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split 
// https://www.codegrepper.com/code-examples/javascript/javascript+split+by+space

// Desafio 4
function concatName(nameList) {
  // seu código aqui
  let newString = (' ');
  newString = newString.concat(nameList[nameList.length - 1], ', ', nameList[0]);
  return newString;
}

// Para a resolução do Desafio 4, consultei a seguinte documentação:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let tablePoints;
  return tablePoints = (3 * wins) + ties;
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

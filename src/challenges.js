// Desafio 1
function compareTrue(gradeProject, goingToLectures) {
  // seu código aqui
  let result;

  if (gradeProject >= 80 && goingToLectures >= 95) {
    result === true;
    console.log('Aprovado');
  } else {
    result === false;
    console.log('Reprovado')
  }
  return result;
}
let grade = 78;
let lectures = 90;
console.log(compareTrue(grade, lectures));


// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

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

// Desafio 1
function compareTrue(parameter1, parameter2) {
  // seu código aqui
  let compara;
  if (parameter1 && parameter2 === true){
    compara = true;
  }
  else{
    compara = false;
  }
  return compara;
}

console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculo;
  calculo = (base * height) / 2
  return calculo
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let separa = str.split(" ");
  return separa
}

console.log(splitSentence("foguete"))

// Desafio 4
function concatName(list) {
  // seu código aqui
  let lastName;
  let firstName;
  let concat;
  for(let index = 0; index < list.length; index += 1){
    if (index == list.length - 1){
      lastName = list[index];
    }
    else if(index == 0){
      firstName = list[index];
    }
  }
  concat = lastName + ", " + firstName
  return concat
}

let arrayNames = ['captain', 'my', 'captain']

console.log(concatName(arrayNames));

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

// Desafio 1
function compareTrue(booleanValue1, booleanValue2) {
  if (booleanValue1 === true && booleanValue2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
//Desafio feito com sucesso graças ao tryber Luan Ramalho
//Foi ele quem me deu a brilahnte dica de fazer uma nova function
function highestNumber(arrayNumbers) {
  let highestNumberOfArray = arrayNumbers[0];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > highestNumberOfArray) {
      highestNumberOfArray = arrayNumbers[index];
    }
  }
  return highestNumberOfArray;
}

function highestCount(arrayNumbers) {
  let highNumber = highestNumber(arrayNumbers);
  let counterOfHighestNumber = 0;
   for (let counter = 0; counter < arrayNumbers.length; counter += 1) {
    if (highNumber === arrayNumbers[counter]) {
      counterOfHighestNumber += 1;
    }
  }
  return counterOfHighestNumber;
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

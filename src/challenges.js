// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === 'true' && param2 === 'true')
    return true;
} else {
    return false;
}

// Desafio 2
function calcArea(base, height) {
  return base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
  // Não entendi o porque!! Nem no Overflow tava tão "fácil" assim
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let lastName = array.length-1;
  let newArray = array[lastName], array[0];
  return newArray;
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let resultWins = (wins * 3);
  return(resultWins + ties);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  for (let index = 0; index < array.length; index += 1){
    let newArray = array[index];

      if (newArray[index] === array[index]) {
        let sum += 1
      }

  }

  return sum
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

// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  } else {
    return false;
  }
}
//console.log(compareTrue(true,false))

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area; 
}
//console.log(calcArea(10,50))

// Desafio 3
function splitSentence(string) {
 let symbol = [];
 let phrase = '';
 
}
console.log(splitSentence('go Trybe'))

// Desafio 4
function concatName(strings) {
  for(let index = 0; index < strings.length; index+=1) {
    return strings[strings.length -1] + ',' + strings[index] 
   
  }
  
}
//console.log(concatName(['captain', 'my', 'captain']))

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = 3;
  let empate = 1;
  let resultado = (wins * vitoria + ties * empate);
  return resultado;
}
//console.log(footballPoints(0,0))

// Desafio 6
function highestCount(numbers) {
  if(index = 0; index < numbers.length; index++) {
return index[numbers.length];
  }
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
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

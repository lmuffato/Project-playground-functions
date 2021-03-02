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
function splitSentence(phrase) {
  let result = phrase.split(" ");
 
 return result;
 
}
//console.log(splitSentence("go Trybe"))
//pesquisei o método no site "https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254"

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

  }
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
 if (mouse === cat1 && mouse === cat2) {
   return "os gatos trombam e o rato foge"
 } else if (cat2 > mouse && cat2 < cat1|| cat1 > mouse && cat1 > cat2) {
 return "cat2"
 } else if (cat2 > mouse && cat2 > cat1|| cat1 > mouse && cat1 < cat2 ) {
   return "cat1"
 }
}
console.log(catAndMouse(0,3,2))

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

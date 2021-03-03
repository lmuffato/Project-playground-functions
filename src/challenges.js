// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let phraseArray = string.split(' ');
  return phraseArray;
}
console.log(splitSentence('Go Trybe'));
// *Como usar o split: https://www.guj.com.br/t/o-metodo-split/100456

// Desafio 4
function concatName(string) {
  let name = string;
  name = string[(string.length - 1)] + ", " + string[0];
  return name;
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;    
  return points;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbers) {
  let higherNumber = 0;
  for (let index in numbers) {
  if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
      }
    }
  let numMax = 0;  
  for (let index2 in numbers) {
      if (higherNumber == numbers[index2]){
      numMax = numMax + 1;
      }
    } 
    return numMax;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));         
// *Função para obter o maior valor https://www.youtube.com/watch?v=pkJXwPvselI

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index in numbers){
      if (numbers[index] % 3 === 0){
          numbers[index] = "fizz"
      }
  }
  for (let index in numbers){
    if (numbers[index] % 5 === 0){
        numbers[index] = "buzz"
    }
  }
  for (let index in numbers){
    if (numbers[index] % 3 != 0 && numbers[index] % 5 != 0){
        numbers[index] = "fizzBuzz"
    }
  }
  for (let index in numbers){
    if (numbers[index] % 3 != 0 && numbers[index] % 5 != 0){
        numbers[index] = "fizzBuzz"
    }
  }
  return result   
}
console.log(fizzBuzz[2, 15, 7, 9, 45]);

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
}
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
  name = (`${string[string.length - 1]}, ${string[0]}`);
  return name;
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// ou:
// function concatName(array){
// result = array[(array.length - 1)] + ", " + array[0];
// return result

// Concatenar String em JS:
// https://pt.stackoverflow.com/questions/231359/qual-a-forma-correta-de-concatenar-strings-em-javascript
// https://wesbos.com/javascript-template-strings

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount() {
}

function heightNumber(numbers) {
  let height = 0;
  for (let index in numbers) {
    if (numbers[index] > height) {
      height = numbers[index];
    }
  }
  return height;
}
function countNumbers(numbers) {
  let firstheight = heightNumber(numbers);
  let counter = 0;
  for (let index2 in numbers) {
    if (firstheight === numbers[index2]) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countNumbers([9, 1, 10, 9, 9, 2, 3, 9, 5, 7]));
// *Função para obter o maior valor https://pt.stackoverflow.com/questions/99193/valor-em-array-com-a-maior-ocorr%C3%AAncia

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let result = '';
  if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
console.log(catAndMouse(10, 2, 1));

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
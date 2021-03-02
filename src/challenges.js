// Challenge 1
function compareTrue(parameter1, parameter2) {
  return parameter1 && parameter2;
}

// Challenge 2
function calcArea(base, height) {
  return (base * height) / 2;
}

/* Challenge 3

// In this challenge I did three functions, two using a logic developed by me and the other using functions that I learned to use through the following references:

// https://www.horadecodar.com.br/2020/10/07/como-eliminar-espacos-duplicados-em-uma-string/
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://futurestud.io/tutorials/remove-extra-spaces-from-a-string-in-javascript-or-node-js#:~:text=Use%20JavaScript's%20string.,multiple%20using%20the%20%5Cs%2B%20RegEx.
 
// The first commented function is the one I used reference, the second is one that I developed the whole logic. The two commented are able to fulfill the challenge objective even if they have extra blanks anywhere.
//The non-commented was the basics that asked for the challenge.

// function splitSentence(string) {
//   string = string.replace(/\s+/g, ' ').trim();
//   string = string.split(' ');
//   return string;
// }

Challenge 3
function splitSentence(string) {
  let arrayOfStrings = [];
  let word = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ' ') {
      word += string[index];
    }
    if ((string[index + 1] === ' ' || string[index + 1] === undefined) && word !== '') {
      arrayOfStrings.push(word);
      word = '';
    }
  }
  return arrayOfStrings;
}
*/

function splitSentence(string){
  return string.split(' ');
}

// Challenge 4
function concatName(arrayDeStrings) {
  return (arrayDeStrings[arrayDeStrings.length-1] + ' ' + arrayDeStrings[0]);
}

// Challenge 5
function footballPoints() {
  // seu código aqui
}

// Challenge 6
function highestCount() {
  // seu código aqui
}

// Challenge 7
function catAndMouse() {
  // seu código aqui
}

// Challenge 8
function fizzBuzz() {
  // seu código aqui
}

// Challenge 9
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

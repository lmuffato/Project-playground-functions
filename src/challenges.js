// Challenge 1
function compareTrue(parameter1, parameter2) {
  return parameter1 && parameter2;
}

// Challenge 2
function calcArea(base, height) {
  return (base * height) / 2;
}

/* Challenge 3

  In this challenge I did three functions, two using a logic developed by me and the other using functions that I learned to use through the following references:

  https://www.horadecodar.com.br/2020/10/07/como-eliminar-espacos-duplicados-em-uma-string/
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  https://futurestud.io/tutorials/remove-extra-spaces-from-a-string-in-javascript-or-node-js#:~:text=Use%20JavaScript's%20string.,multiple%20using%20the%20%5Cs%2B%20RegEx.

  The first commented function is the one I used reference, the second is one that I developed the whole logic. The two commented are able to fulfill the challenge objective even if they have extra blanks anywhere.
  //The non-commented was the basics that asked for the challenge.

  function splitSentence(string) {
    string = string.replace(/\s+/g, ' ').trim();
    string = string.split(' ');
    return string;
  }

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

function splitSentence(string) {
  return string.split(' ');
}

// Challenge 4
function concatName(arrayDeStrings) {
  return (`${arrayDeStrings[arrayDeStrings.length - 1]}, ${arrayDeStrings[0]}`);
}

// Challenge 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Challenge 6
// NEGATIVE_INFINITY reference below::
// https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript

function highestCount(arrayOfNumbers) {
  let highestNumber = Number.NEGATIVE_INFINITY;
  let repeatCounter = 0;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > highestNumber) {
      highestNumber = arrayOfNumbers[index];
      repeatCounter = 1;
    } else if (arrayOfNumbers[index] === highestNumber) {
      repeatCounter += 1;
    }
  }
  return repeatCounter;
}

// Challenge 7
// Math.abs reference below:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

function catAndMouse(mouse, cat1, cat2) {
  let cat1Proximity = Math.abs(mouse - cat1);
  let cat2Proximity = Math.abs(mouse - cat2);
  if (cat1Proximity < cat2Proximity) {
    return 'cat1';
  }
  if (cat1Proximity > cat2Proximity) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Challenge 8
function checksFizzBuzz(number) {
  let response = '';
  if (number % 3 === 0 && number % 5 === 0) {
    response = 'fizzBuzz';
  } else if (number % 3 === 0) {
    response = 'fizz';
  } else if (number % 5 === 0) {
    response = 'buzz';
  } else {
    response = 'bug!';
  }
  return response;
}

function fizzBuzz(arrayOfNumbers) {
  let array = [];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    array.push(checksFizzBuzz(arrayOfNumbers[index]));
  }
  return array;
}

// Crie duas funções: a primeira deverá se chamar `encode` e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

// a -> 1 \
// e -> 2 \
// i -> 3 \
// o -> 4 \
// u -> 5

// Challenge 9
function encode(string) {

}

function decode(string) {

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

// Desafio 1
function compareTrue(gradeProject, goingToLectures) {
  if (gradeProject === true && goingToLectures === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaTriangle;
  areaTriangle = (base * height) / 2;
  return areaTriangle;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
// Para resolução do Desafio 3, consultei os seguintes artigos.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://www.codegrepper.com/code-examples/javascript/javascript+split+by+space

// Desafio 4
function concatName(nameList) {
  // seu código aqui
  let newString = `${nameList[nameList.length - 1]}, ${nameList[0]}`;
  return newString;
}

// Para a resolução do Desafio 4, consultei a seguinte documentação:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// E meus agradecimentos ao colega André Jaques pela dica sobre concatenação (link abaixo):
// https://trybecourse.slack.com/archives/C01L16B9XC7/p1614712885340100

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let tablePoints = (3 * wins) + ties;
  return tablePoints;
}

// Desafio 6

function highestCount(listOfNumbers) {
  let count = 0;
  let numberMax = Math.max.apply(null, listOfNumbers);
  for (let index = 0; index < listOfNumbers.length; index += 1) {
    if (listOfNumbers[index] === numberMax) {
      count += 1;
    }
  }
  return count;
}
// Referência utilizada para resolução do Desafio 6:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distanceFromCat1 = Math.abs(mouse - cat1);
  let distanceFromCat2 = Math.abs(mouse - cat2);

  if (distanceFromCat1 < distanceFromCat2) {
    return 'cat1';
  } if (distanceFromCat2 < distanceFromCat1) {
    return 'cat2';
  } if (distanceFromCat1 === distanceFromCat2) {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8

// Necessário dividir em problemas menores.

// 1 - Função para criar novo array com as strings, segundo cada condição.

function fizzBuzzConvert(number) {
  switch (true) {
  case (number % 5 === 0 && number % 3 === 0):
    return 'fizzBuzz';
  case (number % 3 === 0):
    return 'fizz';
  case (number % 5 === 0):
    return 'buzz';
  default:
    return 'bug!';
  }
}

function fizzBuzz(arrayNumbers) {
  let newArrayNumbers = [];
  for (let key = 0; key < arrayNumbers.length; key += 1) {
    newArrayNumbers.push(fizzBuzzConvert(arrayNumbers[key]));
  }
  return newArrayNumbers;
}

// Referências consultadas para resolução do Desafio 8:
// https://developer.mozilla.org/pt-BR/docs/conflicting/Web/JavaScript/Reference/Operators
// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Looping_code

// Desafio 9
// Crie duas funções: a primeira deverá se chamar encode e,
// ao receber uma string como parâmetro, deverá trocar todas
// as vogais minúsculas por números, de acordo com o formato a seguir:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// Ou seja, caso o parâmetro de encode seja "hi there!",
// o retorno deverá ser "h3 th2r2!".

// A segunda função deverá se chamar decode
// e faz o contrário de encode
// ou seja, recebe uma string contendo números
// no lugar de letras minúsculas e retornará uma string
// com vogais minúsculas no lugar dos números
function encode() {
}

function decode() {
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

// Desafio 1
function compareTrue(gradeProject, goingToLectures) {
  let result = true;

  if (gradeProject === true && goingToLectures === true) {
    return result === true;
  } else {
   return result === false;
  }
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
  // seu código aqui 
  return sentence.split(' ');
}
// Para resolução do Desafio 3, consultei os seguintes artigos: 
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
  let tablePoints;
  return tablePoints = (3 * wins) + ties;
}

// Desafio 6
function highestCount(listOfNumbers) {
  // seu código aqui
  let count = 0;
  for (index in listOfNumbers, index += 1) {
    if (listOfNumbers[index] === listOfNumbers[index + 1]) {
      count += 1;
    }
  }
  return count;
}  

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8

// Necessário dividir em problemas menores.

// 1 - Função para criar novo array com as strings, segundo cada condição.

function fizzBuzzConvert (number) {

  if (number % 5 === 0 && number % 3 === 0) {
      return 'fizzBuzz';
  }
  else if (number % 3 === 0) {
      return 'fizz';
  }
  else if (number % 5 === 0) {
      return 'buzz';
  } else {
      return 'bug!';
  }
}

function fizzBuzz(arrayNumbers) {
  
  let newArrayNumbers = [];
  
    for(let key = 0; key < arrayNumbers.length; key += 1) {
       newArrayNumbers.push(fizzBuzzConvert(arrayNumbers[key]));
    } 
    return newArrayNumbers;
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

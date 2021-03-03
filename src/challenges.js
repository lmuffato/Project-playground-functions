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
function distanceCatAndMouse (mouse, cat) {

  let distanceCat = Math.abs(mouse - cat);
  return distanceCat;
}

function catAndMouse(mouse, cat1, cat2) {

  if (distanceCatAndMouse(cat1) < distanceCatAndMouse(cat2)) {
    return 'cat1';
  }
  else if (distanceCatAndMouse(cat2) < distanceCatAndMouse(cat1)) {
    return 'cat2';
  } else { 
    return 'os gatos trombam e o rato foge';
  }
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
function encode(string) {
  let newString;
  newString.push(string.split(''))

  switch (newArray) {
    case ('a') : 
      return  1;
    case ('e') :
      return 2;
    case ('i') :
      return 3;
    case ('o') :
      return 4;
    case ('u'):
    return 5;
    default :
    break;
  }
} 
let stringDeExemplo = 'hi there!'; 
console.log(encode(stringDeExemplo));

function decode(array) {
  
  let newString = ' ';
  let newArray = [];
  
  newArray.push(encode(array)); 

  switch (newArray) {
    case (1) : 
      return 'a';
    case (2) :
      return 'e';
    case (3) :
      return 'i';
    case (4) :
      return 'o';
    case (5) :
      return 'u';
    default :
    break;
  }
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

// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringToArray) {
  return stringToArray.split(' ');
}

// Desafio 4
function concatName(arrayOfStrings) {
  return `${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  let points = wins + ties;
  return points;
}

// Desafio 6
//Este código criei baseado na minha amiga de Tribo Cla Oliveira que me ajudou demais nesse projeto.
//Recriou a função comigo pausadamente me explicando cada detalhe e me fazendo entender o por quê de cada coisa.
//Obrigado Cla Oliveira!!!
function higherNumber(arrayOfNumber) {
  let highest = arrayOfNumber[0];
  for (let index = 0; index < arrayOfNumber.length; index += 1) {
    if (arrayOfNumber[index] > highest) {
      highest = arrayOfNumber[index];
    }
  }
  return highest;
}

function highestCount(arrayOfNumber) {
  let highNumber = higherNumber(arrayOfNumber);
  let higherRepeated = 0;
  for (let indexRepeated = 0; indexRepeated < arrayOfNumber.length; indexRepeated += 1) {
    if (arrayOfNumber[indexRepeated] === highNumber) {
      higherRepeated += 1;
    }
  }
 
return higherRepeated;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catchMouse = 0
  let distanceCat1 = 0
  let distanceCat2 = 0
  if (mouse > cat1) {
    distanceCat1 = mouse - cat1;
  }else{
    distanteCat1 = cat1 - mouse
  }
  if (mouse > cat1) {
    distanceCat2 = mouse - cat2;
  } else{
    distanceCat2 = cat2 - mouse
  }
  if (distanceCat1 > distanceCat2) {
    catchMouse = 'cat1';
  }else if (distanceCat2 > distanceCat1){
    catchMouse = 'cat2';
  }else{
    catchMouse = 'os gatos trombam e o rato foge!'
  }
  return catchMouse;
}
console.log(catAndMouse(1, 2, 2))
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

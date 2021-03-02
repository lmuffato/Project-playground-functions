// Desafio 1:
function compareTrue(a, b) {
  if (a && b === true) {
  return true;
  } 
return false;
}
console.log(compareTrue(true, true));



// Desafio 2
function calcArea(base, height) {
if (base > 0 && height >0) {
return (base * height) / 2
} else {
  return "não é um triângulo."
}
}
console.log(calcArea(51, 1));



// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
console.log(splitSentence("foguete"))



// Desafio 4
function concatName(content) {
  let firstring = content[0];
  let lastString = content[content.length-1];
  return lastString + ', ' + firstring;
}
console.log(concatName(['captain', 'my', 'captain']));



// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  return wins + ties;
}
console.log(footballPoints(0, 0));



// Desafio 6

function highestCount(myArrey) {
  let equalNumbers = 0;
  let higherNmber = 0;
  //encontrando mairo numero
  for (let index = 0; index < myArrey.length; index +=1) {
    if (higherNmber < myArrey[index]) {
      higherNmber = myArrey[index];
    }
  }
  //contar as repetições
  for (let index2 = 0; index2 < myArrey.length; index2 +=1)  {
    if (higherNmber === myArrey[index2]) {
      equalNumbers += 1;
    }
  } return equalNumbers;
}
console.log(highestCount([0, 0, 0]));



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanceCat1 = cat1 - mouse;
  distanceCat2 = cat2 - mouse;
  if (distanceCat2 > distanceCat1) {
    return "cat1";
  } else if (distanceCat1 > distanceCat2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(0, 8, 10))



// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < .length; index +=1) }


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

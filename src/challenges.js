// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  }else{
    return false;
  }
}
//console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}
//console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(phrase) {
    return phrase.split(' ');
}
//console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(arrayNames) {
  //let lastPosition = arrayNames.length - 1;
  //let arrayReturn = [arrayNames[lastPosition], arrayNames[0]];
  return `${arrayNames[arrayNames.length - 1]}, ${arrayNames[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let point = 0;
  return 3*wins + ties;
}
//console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayNumbers) {
  let maior = 0;
  let repeat = 0;
  //descobrindo o maior número do array.
  for(let i = 0; i < arrayNumbers.length; i += 1){
    if(maior < arrayNumbers[i]){
      maior = arrayNumbers[i];
    }
  }
  //verificando qtd de vezes que esse tal maior se repete
  for(let i = 0; i < arrayNumbers.length; i += 1){
    if(maior === arrayNumbers[i]){
      repeat += 1;
    }
  }
  return repeat; //retornando qtd de vezes q o numero maior repetiu.
}
//let arrayNumeros = [0, 0, 0];
//console.log(highestCount(arrayNumeros));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCatOne = mouse - cat1;
  let distCatTwo = mouse - cat2;
  if(distCatOne === distCatTwo){
    return 'os gatos trombam e o rato foge';
  }else if(distCatOne > distCatTwo){
    return 'cat2';
  }else if(distCatOne < distCatTwo){
    return 'cat1';
  }
}

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

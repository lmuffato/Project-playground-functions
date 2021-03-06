// Desafio 1
function compareTrue(valueBooleanOne, valueBooleanTwo) {
  if (valueBooleanOne === true && valueBooleanTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
let areaDoTriangulo = 0;
function calcArea(base, height) {
  areaDoTriangulo = (base * height) / 2;
  return areaDoTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let stringDividida = string.split(' ');
  return stringDividida;
}

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6 - Crie uma função que calcule a repetição do maior número
function highestCount(arrayRip) {
  let guardaMaiorNumero = 0;
  let repeticao = 0;
  for (let index = 0; index < arrayRip.length; index += 1) {
    if (guardaMaiorNumero < arrayRip[index]) {
      guardaMaiorNumero = arrayRip[index];
    }
  }
  for (let index = 0; index < arrayRip.length; index += 1) {
    if (guardaMaiorNumero === arrayRip[index]) {
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7 - calcule as distâncias entre o rato e os gatos
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = cat1 - mouse;
  let gato2 = cat2 - mouse;
  if (gato1 < gato2) {
    return 'cat1';
  } else if (gato2 < gato1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(returnDeArray) {
  let fizzBuzzArray = [];
  for (let index = 0; index < returnDeArray.length; index += 1) {
    if (returnDeArray[index] % 3 === 0 && returnDeArray[index] % 5 === 0) {
        fizzBuzzArray.push('fizzBuzz');
    } else if (returnDeArray[index] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (returnDeArray[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
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

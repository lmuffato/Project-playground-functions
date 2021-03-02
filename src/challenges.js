// Desafio 1
function compareTrue(param1, param2) {
  return param1 === true && param2 === true;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(nomes) {
  let ultimoNome = nomes[nomes.length - 1];
  let primeiroNome = nomes[0];
  return `${ultimoNome}, ${primeiroNome}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties * 1;
  return pontos;
}

// Desafio 6
function maiorNum(arrayNumbers) {
  let highestNum = -9999;
  for (let index = 0; index <= arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > highestNum) {
      highestNum = arrayNumbers[index];
    }
  }
  return highestNum;
}

function highestCount(numbers) {
  let repeats = 0;
  const highestNum = maiorNum(numbers);

  for (let index2 = 0; index2 <= numbers.length; index2 += 1) {
    if (highestNum === numbers[index2]) {
      repeats += 1;
    }
  }
  return repeats;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  if (positionCat1 > positionCat2) {
    return 'cat2';
  } if (positionCat1 < positionCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayFizzs = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      arrayFizzs.push('fizzBuzz');
    } if (arrayNumbers[index] % 3 === 0) {
      arrayFizzs.push('fizz');
    } if (arrayNumbers[index] % 5 === 0) {
      arrayFizzs.push('buzz');
    }
    arrayFizzs.push('bug!');
  }
  return arrayFizzs;
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

// Desafio 1
function compareTrue(valueOne, ValueTwo) {
  if (valueOne === true && ValueTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  /**
   * Me basei um pouco no código do Rich Rhinoceros, link do repositório: https://www.codegrepper.com/code-examples/javascript/javascript+split+string+by+space
   */
  const array = string.split(' ');

  return array;
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  /**
   * Para pegar o último elemento de um array segui de acordo com o código do LINQ,
   * segue o link do StackOverFlow: https://pt.stackoverflow.com/questions/87416/como-retornar-o-%C3%BAltimo-registro-de-um-array-com-javascript-ou-jquery
   */
  let lastItem = array[array.length - 1];

  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let highestValue = 0;
  let highestValueCount = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (highestValue < array[index]) {
      highestValue = array[index];
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    if (highestValue === array[index]) {
      highestValueCount += 1;
    }
  }
  return highestValueCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 > distanceCat2) {
    return 'cat1';
  }
  if (distanceCat1 < distanceCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
      continue;
    }
    if (array[index] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    }
    if (array[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    }
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
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

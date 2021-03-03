// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
// Para o exercicio foi utilizada a documentação da função SPLIT disponível em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

function splitSentence(phrase) {
  let espace = ' ';
  let splitphrase = phrase.split(espace);
  return splitphrase;
}

// Desafio 4

function concatName(phraseArray) {
  let firstItem = phraseArray[0];
  let lastItem = phraseArray[phraseArray.length - 1];
  let phraseString = lastItem + ', ' + firstItem;
  return (phraseString);
}

console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5

function footballPoints(wins, ties) {
  let sumWins = wins * 3;
  let resultPoints = sumWins + ties;
  return resultPoints;
}

// Desafio 6
function highestCount(numberArray) {
  let countRepeat = 0;
  let HighNumber = 0;

  for (let indexH = 0; indexH < numberArray.length; indexH += 1) {
    if (HighNumber < numberArray[indexH]) {
      HighNumber = numberArray[indexH];
    }
  }

  for (let indexR = 0; indexR < numberArray.length; indexR += 1) {
    if (HighNumber === numberArray[indexR]) {
      countRepeat += 1;
    }
  }

  return countRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winner;
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance < cat2Distance) {
    winner = 'cat1';
  } else if (cat2Distance < cat1Distance) {
    winner = 'cat2';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
  return winner;
}

console.log(catAndMouse(1, 0, 2));

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

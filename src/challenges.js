// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  let firstName = stringArray[0];
  let lastName = stringArray[stringArray.length - 1];

  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const winsPoints = 3;
  const totalPoints = (winsPoints * wins) + ties;

  return totalPoints;
}

// Desafio 6
function findHighestValue(array) {
  for (let indexValue = 0; indexValue < array.length; indexValue += 1) {
    let numberOfHits = 0;
    for (let indexComparation = 0; indexComparation < array.length; indexComparation += 1) {
      if (array[indexValue] >= array[indexComparation]) {
        numberOfHits += 1;
        if (numberOfHits === array.length) {
          return array[indexValue];
        }
      }
    }
  }
}

function highestCount(array) {
  let highestNumber = findHighestValue(array);
  let highestNumberShow = array.filter(function (value) { return value === highestNumber; }).length;

  return highestNumberShow;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } if (cat1 > cat2) {
    return 'cat1';
  } if (cat2 > cat1) {
    return 'cat2';
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

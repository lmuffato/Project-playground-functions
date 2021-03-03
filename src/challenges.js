// Desafio 1
function compareTrue(firstBool, secondBool) {
  if (firstBool && secondBool) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(setence) {
  let setenceList = [];
  let split = '';
  for (let index = 0; index < setence.length + 1; index += 1) {
    if ((setence[index] === ' ') || (index + 1 === setence.length + 1)) {
      setenceList.push(split);
      split = '';
    } else {
      split += setence[index];
    }
  }
  return setenceList;
}

// Desafio 4
function concatName(namesArray) {
  let firstItem;
  let secondItem;
  for (let index = 0; index < namesArray.length; index += 1) {
    if (index === 0) {
      secondItem = namesArray[index];
    } else if (index === namesArray.length - 1) {
      firstItem = namesArray[index];
    }
  }
  return `${firstItem}, ${secondItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let index = 1; index <= (wins + ties); index += 1) {
    if (index > wins) {
      points += 1;
    } else {
      points += 3;
    }
  }
  return points;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = numbersArray[0];
  let count = 0;
  for (let index of numbersArray) {
    if (index > highestNumber) {
      count = 1;
      highestNumber = index;
    } else if (index === highestNumber) {
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

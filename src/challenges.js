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
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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

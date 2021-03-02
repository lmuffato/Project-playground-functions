// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false; 
  }
}

// Desafio 2
function calcArea(base, heigh) {
  let area = (base * heigh) / 2;
  return area;
}

// Desafio 3
/* https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
Site onde aprendi sobre o metodo .split() */
function splitSentence(sentence) {
  let sentenceArray = sentence.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(array) {
  let result = `${array[array.length - 1]}, ${array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }
  let sum = 0;
  for (let indexCount = 0; indexCount < array.length; indexCount += 1) {
    if (highestNumber === array[indexCount]) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > mouse) {
    let distanceCat1 = cat1 - mouse;
  }else {
    let distanceCat1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    let distanceCat2 = cat2 - mouse;
  } else { let distanceCat2 = mouse - cat2; }
  if (distanceCat1 > distanceCat2) {
    return 'cat1';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat2';
  } else { return 'os gatos trombam e o rato foge';}
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

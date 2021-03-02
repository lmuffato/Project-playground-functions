// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let splitArray = [];
  return splitArray = (string.split(' '));
}

// Desafio 4
function concatName(array) {
  for (let index = 0; index <= array.length; array += 1) {
    return (array[array.length - 1] + ', ' + array[0]);
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(array) {
  let highestNumb = array[0];
  let repeatedNumb = 0;
  for (let index in array) {
    if (array[index] > highestNumb) {
      highestNumb = array[index];
    }
  }
  for (let index in array) {
    if (array[index] === highestNumb) {
      repeatedNumb += 1;
    }
  }
  return repeatedNumb;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = cat1 - mouse;
  let cat2Dist = cat2 - mouse;
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  }
  else if (cat1Dist > cat2Dist) {
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayResult = [];
  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayResult.push('fizzbuzz');
    }
      else if (array[index] % 3 === 0) {
        arrayResult.push('fizz');    
      }
      else if (array[index] % 5 === 0) {
        arrayResult.push('buzz');
      }
      else {
        arrayResult.push('bug');
      }
  }
  return arrayResult;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode() {
  // seu código aqui
}

// Desafio 10
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

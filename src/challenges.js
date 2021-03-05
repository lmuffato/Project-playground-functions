// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
calcArea(5, 2)

// Desafio 3
function splitSentence(name) {
  
  let result = name.split(' ');
  return result;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let lastFirst = array[array.length - 1] + ',' + array[0];
  return lastFirst;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + (ties);
  return result;
}
footballPoints(14, 8);

// Desafio 6
function highestCount(array) {
  let result = 0;
  let highest = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highest) {
      highest = array[index];
    }
  }
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2] === highest) {
      result += 1;
    }
  }
  return result;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 =  Math.abs(mouse - cat2);
  let result;

  if (distance1 < distance2) {
    result = 'cat1';
  } else if (distance1 > distance2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
catAndMouse(1, 5, 6);

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
fizzBuzz([2, 15, 7, 9, 45]);

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

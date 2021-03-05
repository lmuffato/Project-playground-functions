// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(newArray) {
  return newArray[newArray.length - 1] + ', ' + newArray[0];
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7 - PENDENTE!
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = 0;
  let distanciaCat2 = 0;
  if (cat1 < mouse) {
    distanciaCat1 = distanciaCat1 + mouse - cat1
  } else if (cat1 > mouse) {
    distanciaCat1 = distanciaCat1 + cat1 - mouse
  } if (cat2 < mouse) {
    distanciaCat2 = distanciaCat2 + mouse - cat2
  } else if (cat2 > mouse) {
    distanciaCat2 = distanciaCat2 + cat2 - mouse
  } if (distanciaCat1 > distanciaCat2) {
    return "cat2"
  } else if (distanciaCat1 < distanciaCat2) {
    return "cat1"
  } else if (distanciaCat1 = distanciaCat2) {
    return "os gatos trombam e o rato foge"
  }
}

console.log(catAndMouse(8, 2, 10));
console.log(catAndMouse(2, 20, 1));
console.log(catAndMouse(15, 20, 10));

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let fizzBuzzBug = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 !== 0) {
      fizzBuzzBug.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0 && arrayNumbers[index] % 3 !== 0) {
      fizzBuzzBug.push('buzz');
    } else if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      fizzBuzzBug.push('fizzBuzz');
    } else {
      fizzBuzzBug.push('bug!');
    }
  }
  return fizzBuzzBug;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9 - PENDENTE!
function encode(string) {
  string = string.replace('a', '1')
  string = string.replace('e', '2')
  string = string.replace('i', '3')
  string = string.replace('o', '4')
  string = string.replace('u', '5')
  return string
}
console.log(encode('hi there!'));

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

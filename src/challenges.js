// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  if (value1 === false || value2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(expression) {
  // seu código aqui
  let splitExpression = new Array(0);
  splitExpression = (expression.split(' '));
  return splitExpression;
}

// Desafio 4
function concatName(nameArray) {
  // seu código aqui
  let lastAndFirst;
  lastAndFirst = nameArray[nameArray.length - 1];
  lastAndFirst += ', ';
  lastAndFirst += nameArray[0];
  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let total = 3 * wins + ties;
  return total;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (mouse - cat1 === mouse - cat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (mouse - cat1 < mouse - cat2) {
    return 'cat1';
  }
  if (mouse - cat2 < mouse - cat1) {
    return 'cat2';
  }
}

// Desafio 8
function checkDivideThree(listOfIntegers) {
  let fizzBuzzArray = new Array(listOfIntegers.length);
  for (let index = 0; index < listOfIntegers.length; index += 1) {
    if (listOfIntegers[index] % 3 === 0) {
      fizzBuzzArray[index] = 'fizz!';
    }
  }
  return (fizzBuzzArray, listOfIntegers);
}

// function checkDivideFizzBuzz(integersArray) {
//   let fizzBuzzArray = integersArray;
//   for (let index = 0; index < integersArray.length; index += 1) {
//     if (integersArray[index] % 5 === 0 && integersArray[index] % 3 === 0) {
//       fizzBuzzArray[index] = 'fizzBuzz';
//     }
//   }
//   return fizzBuzzArray;
// }

// function checkDivideBug(integersArray) {
//   for (let index = 0; index < integersArray.length; index += 1) {
//     if (integersArray[index] % 5 !== 0 && integersArray[index] % 3 !== 0) {
//       integersArray[index] = 'bug!';
//     }
//   }
//   return integersArray;
// }

// function checkDivideBuzz(integersArray) {
//   for (let index = 0; index < integersArray.length; index += 1) {
//     if (integersArray[index] % 5 === 0) {
//       integersArray[index] = 'Buzz!';
//     }
//   }
//   return integersArray;
// }

function fizzBuzz(integersArray) {
//   // seu código aqui
//   for (let index = 0; index < integersArray.length; index += 1) {
  return checkDivideThree(integersArray);
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
// console.log(fizzBuzz([7, 9]));
// console.log(fizzBuzz([9, 25]));

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

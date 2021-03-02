function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(height, base) {
  let area = (base * height / 2);
  return area

}

// Desafio 3
function splitSentence(word) {
  let split = word.split(' ')
  return split

}

// Desafio 4
function concatName(names) {
  let divide = {
    firstName: names [0],
    lastName: names[names.length-1]
  }

  let conquer = divide.lastName + ', ' + divide.firstName;

  return conquer;
}
console.log(concatName (['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))


// Desafio 5
function footballPoints(wins, ties) {
  let game = {
    winspoints: 3,
    tiespoints: 1
  }
  let pointsSum = {
    winsplus: wins * game.winspoints,
    tiesplus: ties * game.tiespoints
  }
  let total = pointsSum.winsplus + pointsSum.tiesplus;
  return total;
}

// Desafio 6
function highestCount(num) {
  let objectNumber = {
    highestNum: num[0],
    Count: 0
  }
  for (let highestnumbers in num) {
    if (num[highestnumbers] > objectNumber.highestNum) {
      objectNumber.highestNum = num[highestnumbers];
    }
  }
  for (let verifyCount in num) {
    if (num[verifyCount] === objectNumber.highestNum) {
      objectNumber.Count += 1;
    }
  }
    return objectNumber.Count;
}
 console.log (highestCount([9, 1, 2, 3, 9, 5, 7]))


function highestCount(array) {
  let highestNumber = array[0];
  let counter = 0;
  for (let verifyHighest in array) {
    if (array[verifyHighest] > highestNumber) {
      highestNumber = array[verifyHighest];
    }
  }

  for (let verifyCount in array) {
    if (array[verifyCount] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}
console.log (highestCount([9, 1, 2, 3, 9, 5, 7]))








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

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
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
  let stringArrays = string.split(' ');
  return stringArrays;
}

// Desafio 4
function concatName(array) {
  let lastName = array[array.length - 1];
  let firstName = array[0];
  let concat = `${lastName}, ${firstName}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}

// Desafio 6 //found about the sort and reverse method on https://stackoverflow.com/questions/46640420/how-to-find-number-of-occurrence-of-highest-element-in-an-javascript-array/46640571
function highestCount(numbers) {
  numbers.sort().reverse();
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === numbers[0]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7 //found about an approach to the problem on this article https://javascript.plainenglish.io/javascript-algorithm-cats-and-a-mouse-fd60fb1811ba
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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

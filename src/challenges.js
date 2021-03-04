// Desafio 1
function compareTrue(valueA, valueB) {
  return !!((valueA === true) && (valueB === true));
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(words) {
  const str = `${words.pop()}, ${words.shift()}`;
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let teamWins = wins * 3;
  let teamTies = ties * 1;
  return teamWins + teamTies;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let higherNumber = Math.max.apply(Math, numbers);;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higherNumber) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;
  if (distCat1 < distCat2) {
    return 'cat2';
  } else if (distCat2 < distCat1) {
    return 'cat1';
  } else {
    return 'Os gatos trombam e o rato foge';
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

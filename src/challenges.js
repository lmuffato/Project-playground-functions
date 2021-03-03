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
  function highestNumber() {
    let higherNumber = 0;
    for (let index = 0; index < numbers.lenght; index += 1) {
      if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
      }
    }
    return higherNumber;
  }
  let count = 0;
  for (let index = 0; index < numbers.lenght; index += 1) {
    if (numbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return cat1;
  } if ((cat2 - mouse) < (cat1 - mouse)) {
    return cat2;
  } if ((cat2 - mouse) === (cat1 - mouse)) {
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

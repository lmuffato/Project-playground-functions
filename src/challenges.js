// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let word = '';
  let words = [];
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] !== ' ') {
      word += phrase[index];
    }

    if (index === (phrase.length - 1) || phrase[index] === ' ') {
      words.push(word);
      word = '';
    }
  }
  return words;
}

// Desafio 4
function concatName(arr) {
  let firstName = arr[0];
  let lastName = arr[arr.length - 1];
  let names = lastName + ', ' + firstName;
  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestNumber(arr) {
  let highest = arr[0];

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > highest) {
      highest = arr[index];
    }
  }

  return highest;
}

function highestCount(arr) {
  let highest = highestNumber(arr);
  let countHighest = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === highest) {
      countHighest += 1;
    }
  }
  return countHighest;
}

// Desafio 7

function calcDistance(position1, position2) {
  let distance;
/** Source: https://www.tutorialspoint.com/How-to-convert-a-negative-number-to-a-positive-one-in-JavaScript#:~:text=Front%20End%20Technology-,To%20convert%20a%20negative%20number%20to%20a%20positive%20one%20in,absolute%20value%20of%20a%20number. */
  if (Math.abs(position1) > Math.abs(position2)) {
    distance = Math.abs(position1) - Math.abs(position2);
  } else {
    distance = Math.abs(position2) - Math.abs(position1);
  }

  return distance;
}

function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = calcDistance(mouse, cat1);
  let distanceMouseCat2 = calcDistance(mouse, cat2);
  let message;

  if (distanceMouseCat1 === distanceMouseCat2) {
    message = 'Os gatos trombam e o rato foge';
  } else if (distanceMouseCat1 < distanceMouseCat2) {
    message = 'cat1';
  } else {
    message = 'cat2';
  }

  return message;
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

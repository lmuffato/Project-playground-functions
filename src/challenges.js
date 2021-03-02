// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayOfStrings) {
  let lastString = arrayOfStrings[arrayOfStrings.length - 1];
  let firstString = arrayOfStrings[0];
  return `${lastString}, ${firstString}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highest = -1 * Number.MAX_VALUE;
  let count = 0;
  for (let number in arrayOfNumbers) {
    if (arrayOfNumbers[number] > highest) {
      highest = arrayOfNumbers[number];
      count = 1;
    } else if (arrayOfNumbers[number] === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1ToMouse = Math.abs(cat1 - mouse);
  let distCat2ToMouse = Math.abs(cat2 - mouse);
  if (distCat1ToMouse < distCat2ToMouse) {
    return 'cat1';
  }
  if (distCat2ToMouse < distCat1ToMouse) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let answer = [];
  for (let number in arrayOfNumbers) {
    if (arrayOfNumbers[number] % 5 === 0 && arrayOfNumbers[number] % 3 === 0) {
      answer.push('fizzBuzz');
    } else if (arrayOfNumbers[number] % 3 === 0) {
      answer.push('fizz');
    } else if (arrayOfNumbers[number] % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  }
  return answer;
}

// Desafio 9
let dictEncode = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
function encode(string) {
  let output = '';
  for (let charIndex in string) {
    if (typeof dictEncode[string[charIndex]] !== 'undefined') {
      output += dictEncode[string[charIndex]];
    } else {
      output += string[charIndex];
    }
  }
  return output;
}

let dictDecode = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function decode(string) {
  let output = '';
  for (let charIndex in string) {
    if (typeof dictDecode[string[charIndex]] !== 'undefined') {
      output += dictDecode[string[charIndex]];
    } else {
      output += string[charIndex];
    }
  }
  return output;
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

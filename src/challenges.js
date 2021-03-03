// Desafio 1
function compareTrue(bool1 , bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base , height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let word = '';
  let separatedWords = [];
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] != ' ') {
    word += frase[index];
    } 
    if ((frase[index] === ' ') || (index === frase.length-1)) {
      separatedWords.push(word);
      word = '';
    }
  }
  return separatedWords;
}

// Desafio 4
function concatName(words) {
  return words[words.length-1] + ', ' + words[0];  
}

// Desafio 5
function footballPoints(wins , ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNum = numbers[0];
  let timesRepeat = 0;
  for (let num in numbers) {
    if (numbers[num] > maiorNum) {
      maiorNum = numbers[num];
    }
  }
  for (let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1) {
    if (numbers[indexNumber] === maiorNum) {
      timesRepeat += 1;
    }
  }
  return timesRepeat;
}

// Desafio 7
function catAndMouse(mouse , cat1 , cat2) {
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
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

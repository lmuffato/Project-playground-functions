// Desafio 1
function compareTrue(valueBoolean1, valueBoolean2) {
  if (valueBoolean1 === true && valueBoolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let totalArea = (base * height) / 2;
  return totalArea;
}

// Desafio 3
function splitSentence(string) {
  let splitedString = string.split(' '); // Fui estudar sobre métodos e achei no MDN sobre a split, onde ela divide o parâmetro recebido de acordo com seu valor em ().
  return splitedString;
}

// Desafio 4
function concatName(string) {
  let firstIndex = string[0];
  let lastIndex = string[string.length - 1];
  let nameConcatened = lastIndex + ', ' + firstIndex;
  return nameConcatened; 
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let numbersCount = 0;
  let checkNumber = highestNumber(numbers);
  for (let key in numbers){
    if (checkNumber === numbers[key]){
      numbersCount += 1;
    }
  }
  return numbersCount;
}

function highestNumber(value){
  let number = 0;
  for (let index = 0; index < value.length; index += 1) {
    if (number < value[index]) {
      number = value[index];
    } else {
      number = number;
    }
  }
  return number;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseToCat1 = Math.abs(cat1 - mouse);
  let mouseToCat2 = Math.abs(cat2 - mouse);

  if (mouseToCat1 < mouseToCat2) {
    return 'cat1';
  } else if (mouseToCat1 === mouseToCat2) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let changeArray = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      changeArray.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      changeArray.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      changeArray.push('buzz');
    } else {
      changeArray.push('bug!');
    }
  }
  return changeArray;
}

// Desafio 9

function changeLettersA(value) {
  return value.replace(/a/g, '1');
}

function changeLettersE(value) {
  return value.replace(/e/g, '2');
}

function encode(string) {
  //let changeString = string.split('');
  let changeString = string;
  //changeString = changeString.replace(/a/g, '1');
  for (let index = 0; index < changeString.length; index += 1) {
    changeLettersA(changeString);
    changeLettersE(changeString);
  }
  return changeString;
}
function decode() {
  // seu código aqui
}

console.log(encode('ala ele'));

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

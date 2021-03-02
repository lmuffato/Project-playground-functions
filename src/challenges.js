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
  for (let index = 0; index < numbers.length; index += 1) {
    let numberCheck = numbers[index];
    for (let indexCount = 0; indexCount < numbers.length; indexCount += 1){
      if (numberCheck[index] === numbers[indexCount]){
        numbersCount += 1;
      }
    }
  }
  return numbersCount;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
  let changeArray = numbers;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      changeArray[index].push("fizzBuzz");
    } else if (numbers[index] % 3 === 0) {
      changeArray[index].push("fizz");
    } else if (numbers[index] % 5 === 0) {
      changeArray[index].push("buzz");
    } else {
      changeArray[index].push("bug!");
    }
    return changeArray;
  }
}

//console.log(fizzBuzz(2, 15, 7, 9, 45));

// Desafio 9
function encode(string) {
  let changeString = string.split('');
  for (let index = 0; index < changeString.length; index +=1) {
    if (changeString[index] === 'a') {
      changeString[index].replace(/a/g, '1');
    } else {
      changeString[index].replace(/e/g, '2');
    }
  }
  return changeString;
}
function decode() {
  // seu código aqui
}

console.log(encode('ala'));

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

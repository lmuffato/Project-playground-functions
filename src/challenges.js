// Desafio 1
function compareTrue(value1, value2) {
  let result;
  if (value1 === true && value2 === true) {
    result = true;
  } else { result = false }
  return result;
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
function concatName(strArray) {
  return strArray[strArray.length - 1] + ', ' + strArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  wins = wins * 3;
  points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0
  let highestNumber = Math.max(...numbers);
  for(let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
      count += 1
    }
  }
  return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = mouse - cat1
  let distMouseCat2 = mouse - cat2
  if(distMouseCat1 < distMouseCat2) {
    return 'cat1'
  } else if(distMouseCat1 > distMouseCat2) {
    return'cat2'
} else { return 'os gatos trombam e o rato foge' }
}
    

// Desafio 8
function fizzBuzz(numberArray) {
  let arrayFizzBuzz = []
  for(let i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] % 3 == 0 && numberArray[i] % 5 == 0) {
      arrayFizzBuzz.push('fizzbuzz')
    } else if (numberArray[i] % 5 == 0) {
      arrayFizzBuzz.push('buzz')
    } else if (numberArray[i] % 3 == 0) {
      arrayFizzBuzz.push('fizz')
    } else { arrayFizzBuzz.push('bug!') }
  }
  return arrayFizzBuzz
}

// Desafio 9
function encode(encodeString) {
  let splitedString = encodeString.split('')
 for (let index = 0; index < splitedString.length; index += 1) {
   if (splitedString[index] === 'a') {
     'a' = 1
   } if else (splitedString[index] === 'e'); {
     'e' = 2
   } if else (splitedString[index] === 'i'); {
     'i' = 2
   } if else (splitedString[index] === 'o'); {
     'o' = 2
   } else (splitedString[index] === 'u'); {
     'u' = 2
   }
  }
   splitedString.join('')
   return splitedString
}
 // return encodeString
//}
encode('batata')
  

function decode(decodeString) {}
  


console.log(compareTrue(true, true));

console.log(calcArea(51, 1));

console.log(splitSentence('vamo que vamo'));

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

console.log(footballPoints(14, 8));

console.log(highestCount([1, 4, 4, 4]));

console.log(catAndMouse(9, 1, 10));

console.log(fizzBuzz([1, 6, 9]));

console.log(encode('Eicke'))

console.log()

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

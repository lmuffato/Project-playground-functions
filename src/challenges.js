// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true) {
    return true
  } else { return false}
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}

// Desafio 4
function concatName(strArray) {
  return strArray[0], strArray[(strArray.lenght) - 1]
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3
  points = wins + ties
  return points
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = [0]
  for (let i = 0; i < numbers.length; i += 1) {
    if (highestNumber < numbers[i]) {
      highestNumber = numbers[i];
    }
  }
  return highestNumber;
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
    if (numberArray[i] % 3 === 0 && numberArray[i] % 5 === 0) {
      arrayFizzBuzz.push('fizzbuzz')
    } else if (numberArray[i] % 5 === 0) {
      arrayFizzBuzz.push('buzz')
    } else if (numberArray[i] % 3 === 0) {
      arrayFizzBuzz.push('fizz')
    } else { arrayFizzBuzz.push('bug!') }
  }
  return arrayFizzBuzz
}

// Desafio 9
function encode(encodeString) {
  
}
function decode(decodeString) {
  // seu código aqui
}

console.log(compareTrue(true, false))

console.log(calcArea(51, 1))

console.log(splitSentence('vamo que vamo'))

console.log(concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo'))

console.log(footballPoints(14, 8))

console.log(highestCount([1, 2, 3, 4]))

console.log(catAndMouse(9, 1, 10))

console.log(fizzBuzz([1, 6, 9]))


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

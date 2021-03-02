// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return(true)
  } else {
    return(false)
  }
}

// Desafio 2
function calcArea(base, height) {
  calcArea = base * height / 2
 return(calcArea);
}

// Desafio 3
function splitSentence(string) {
  let phrase = string.split(' ')
  return(phrase);
}

// Desafio 4
function concatName(arrayStrings) {
  let lastItem = arrayStrings.length - 1
  if (lastItem > 0) {
  return(arrayStrings[lastItem] + ' , ' + arrayStrings[0])
  } return(arrayStrings)
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = 3;
  let empates = 1
  return(vitorias * wins + empates * ties)
}

// Desafio 6
let repeticoes = 0
let maiorItem = 0;
function highestCount(values) {
  for (let index in values) {
    if (values[index] > maiorItem) {
      maiorItem = values[index]
    } 
  } for (let currentNumber in values) {
    if (values[currentNumber] === maiorItem) {
      repeticoes += 1
      } 
  } return(repeticoes)
} 

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse < cat2 - mouse) {
    return("cat1")
  } else if (cat2 - mouse < cat1 - mouse) {
    return("cat2")
  } else {
    return("os gatos trombam e o rato foge")
  }
}

// Desafio 8
let fizzOrBuzz = []
function fizzBuzz(divisibleNumbers) {
  for(let currentDivisible in divisibleNumbers) {
    if (divisibleNumbers[currentDivisible] % 3 && divisibleNumbers[currentDivisible] % 5 === 0) {
      fizzOrBuzz.push("fizzbuzz")
    } else if (divisibleNumbers[currentDivisible] % 3 === 0) {
      fizzOrBuzz.push("fizz")
    } else if (divisibleNumbers[currentDivisible] % 5 === 0) {
      fizzOrBuzz.push("buzz")
    } else {
      fizzOrBuzz.push("bug")
    }
  } return fizzOrBuzz
} console.log(fizzBuzz([2, 15, 7, 9, 45]))

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

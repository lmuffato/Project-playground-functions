// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(names) {
  let firstName = names[0];
  let lastName = names[names.length - 1];
  return (firstName) + (lastName);
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let hightNumer = -1000000;
  let countHighNumber = 0;
  for (let key in numbers) {
    if (numbers[key] > hightNumer) {
      hightNumer = numbers[key];
    }
  }
  for (let index in numbers) {
    if (hightNumer === numbers[index]) {
      countHighNumber += 1;
    }
  }
  return countHighNumber;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if (math.abs(cat2 - mouse) > math.abs(cat1 - mouse)) {
    return 'cait2'
  }
  if (math.abs(cat2 - mouse) < math.abs(cat1 - mouse)) {
    return 'cait1'
  }
  if (math.abs(cat2 - mouse) === math.abs(cat1 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
// Desafio 8
function fizzBuzz(numbers) {
  let getFizzBuzz = [];
  for (let index in numbers) {
    if (numbers[index] % 3 === 0){
      getFizzBuzz.push('fizz');
    } 
    else if (numbers[index] % 5 === 0) {
      getFizzBuzz.push('buzz');
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      getFizzBuzz.push('fizzBuzz');
    } else {
      getFizzBuzz.push('bug!');
    }
  }
  return getFizzBuzz;
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
}
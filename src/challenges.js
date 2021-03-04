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

// Desafio 4 Credits: https://pt.stackoverflow.com/questions/231359/qual-a-forma-correta-de-concatenar-strings-em-javascript
function concatName(names) {
  let lastName = names[names.length - 1];
  let firstName = names[0];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function findWhichIsBigger(numbers) {
  let bigger = 0;
  for (let key in numbers) {
    if (numbers[key] > bigger) {
      bigger = numbers[key];
    }
  }
  return bigger;
}

function highestCount(numbers) {
  let selecTheBigger = findWhichIsBigger(numbers);
  let couter = 0;
  for (let key in numbers) {
    if (selecTheBigger === numbers[key]) {
      couter += 1;
    }
  }
  return couter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);
  if (cat1Position > cat2Position) {
    return 'cat2';
  } if (cat1Position < cat2Position) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
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

// Desafio 9 credits https://www.youtube.com/watch?v=7a-a6lKoyIQ - https://www.youtube.com/watch?v=ZYPqPoijCAQ

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

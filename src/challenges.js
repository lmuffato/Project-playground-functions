// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true;
  } 
    return false;
  }

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(names) {
  let firstAndLast = [];
  firstAndLast = names[0] + names[names.lenght-1];
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointWins = wins * 3;
  return (pointWins + ties);
}

// Desafio 6
function highestCount(array) {
  let highest = '';
  let index = 0;
  let count = 0;
  let indexcount = 0;
  for (index = 0; index < array.lenght; index += 1 ) {
    if (array[index] > highest) {
      highest = array[index]
    }
  } for (indexcount = 0; indexcount < array.length; indexcount += 1) {
    if (highest === array [indexcount]){
      count += 1;
    }
    return count;
  }
}


// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let same = 'os gatos trombam e o rato foge';
  if (cat1 < cat2){
    return cat1;
  } else if (cat1 > cat2) {
  return cat2;
  } 
  return same;
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
}

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
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
  let firstAndLast = '';
  let name = '';
  name = names[names.length - 1];
  firstAndLast = name;
  firstAndLast = firstAndLast + ',';
  name = names[0];
  firstAndLast = firstAndLast + ' ' + name;
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointWins = wins * 3;
  return (pointWins + ties);
}

// Desafio 6
function highestCount(array) {
  let highest = 0;
  let index = 0;
  let count = 1;
  let indexcount = 0;
  for (index = 0; index < array.length; index += 1) {
    if ((array[index]) > highest) {
      highest = array[index];
    }
  } for (indexcount = 0; indexcount < array.length; indexcount += 1) {
    if (highest === array [indexcount]) {
      count += 1;
    }
    return count;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let same = 'os gatos trombam e o rato foge';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
  return same;
  }
}

// Desafio 8
// Dica do Murilo Gonçalves quanto a divisão da função em mais de uma para passar
function fizzBuzz(array) {
  let codified = [];
  let index = 0;
  for (index = 0; index < array.lenght; index += 1) {
    //if ((array[index] % 3 && array[index] % 5) === 0) {
      //codified += 'fizzBuzz';
  //  } else if (array[index] % 3 === 0) {
    //  codified += 'fizz';
   // } else if (array[index] % 5 === 0) {
    //codified += 'buzz';
    //} else {
    //codified += 'bug!';
    //}
    doubledivision(array);
    fizz(array);
    buzz(array);
    notdivisible(array);
  }
  return codified;
}

function doubledivision(array){
  if ((array[index] % 3 && array[index] % 5) === 0) {
    codified += 'fizzBuzz';
}
}

function fizz(array){
  if (array[index] % 3 === 0) {
    codified += 'fizz';
}
}

function buzz(array){
  if (array[index] % 5 === 0) {
    codified += 'buzz';
}
}

function notdivisible(array){
  if ((array[index] % 3 || array[index] % 5) === 0) {
  codified += 'bug!';
    }
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

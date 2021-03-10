// Desafio 1
function compareTrue(param1, param2) {

  if (param1 && param2) {
      return true;
    } else {
      return false;
    }

}

console.log(compareTrue(false, false))

// Desafio 2
function calcArea(base, height) {
  area = (base*height) / 2;
  return area;
}

console.log(calcArea(51 , 1));

// Desafio 3
function splitSentence(string1) {
  let result = string1.split(' ');
    return result;
}

console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(array) {
  let bothNames = `${array[array.length-1]}, ${array[0]}`;
  return bothNames;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties*1;
}
console.log(footballPoints(0,0));

// Desafio 6 <!-Contribuição Lucas Godoi->
function highestCount(arrayNumbers) {
  let high = 0;
  let count = 0;
    for (let index = 0; index < arrayNumbers.length; index +=1) {
      if (arrayNumbers[index] > high) {
        high = arrayNumbers[index];
      }
    }

    for (let indexx = 0; indexx < arrayNumbers.length; indexx +=1) {
      if (arrayNumbers[indexx] === high) {
        count += 1;
      }
    }
    return count

  }
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// Desafio 7 --- Contribuição Lucas Godoi e Maria Luiza Victorio ---
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
      return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }

}
 console.log(catAndMouse(0,6,12));
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

//Fim do Projeto

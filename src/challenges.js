// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
      return true
  }
  else {
      return false
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(text){
  let array = text.split(' ');
  return array;
}
console.log(splitSentence('Esse texto é um teste'))

// Desafio 4
let stringDeNomes = []
function concatName(arrayDeNomes) {
  stringDeNomes.push(arrayDeNomes[arrayDeNomes.length - 1]);
  stringDeNomes.push(arrayDeNomes[0]);
  return stringDeNomes;
}
// console.log(concatName(['Eric', 'de', 'Souza', 'Santos']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(14, 8));

// Desafio 6
bigger = 0;
countBigger = 0;
function highestCount(arrayDeNumeros) {
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (bigger < arrayDeNumeros[index]) {
      bigger = arrayDeNumeros[index]
    }
  }
  for (let index2 = 0; index2 < arrayDeNumeros.length; index2 +=1) {
    if (bigger === arrayDeNumeros[index2]) {
      countBigger += 1
    }
  }
return countBigger
}
console.log(highestCount([9, 1, 2, 9, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  if (dist1 < 0) {
    dist1 = dist1 * (-1)
  }
  if (dist2 < 0) {
    dist2 = dist2 * (-1)
  }
  if (dist1 > dist2) {
    return 'cat2'
  }
  if (dist1 < dist2) {
    return 'cat1'
  }
  if (dist1 === dist2) {
    return "os gatos trombam e o rato foge"
  }
}
console.log(catAndMouse(8, 19, 4));

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

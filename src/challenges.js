// Desafio 1
function compareTrue(param1, param2) {
  return (param1 && param2);
}

// Desafio 2
function calcArea(base, height) {
  return (base*height/2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
 return `${arrayDeStrings[arrayDeStrings.length - 1]}, ${arrayDeStrings[0]}` 
} // pesquisado no youtube - https://www.youtube.com/watch?v=ORI_HTXaIw0

// Desafio 5
function footballPoints(win, ties) {
  return (win*3)+ties
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  let repetitionCounter = 0;
  highestNumber = Math.max(...[numbers]);
  for (let index=0; index<numbers.length; index+=1) {
    if (numbers[index] === highestNumber) {
    repetitionCounter += 1;
    }
  }
  return repetitionCounter;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance > cat2Distance) {
    return "cat2";
  } if (cat1Distance < cat2Distance){
    return "cat1";
  } else return "os gatos trombam e o rato foge"
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
};

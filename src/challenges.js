// Desafio 1
function compareTrue(value1,value2) {
  if(value1 == true && value2 == true){
    return true;
  } else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4, tive ajuda dos colegas na breakroom do fechamento dia 2/03
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`; 
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins *3) + ties;
}

// Desafio 6
function highestCount(arrayNumber) {

}
console.log(arrayNumber(9, 1, 2, 3, 9, 5, 7))
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {

  if((cat1-mouse) < (cat2-mouse)){
    return "cat1"
  } else if ((cat1-mouse) > (cat2-mouse)){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

console.log(catAndMouse(1,0,2))

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

// Desafio 1
function compareTrue(valueA, valueB) {
  // seu código aqui
  if (valueA === true && valueB === true) {
    return True;
       } 
       return False;
 }  

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
   return (base*height/2)
  }

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
     return sentence.split(" ")
}

// Desafio 4
function concatName (name = []) {
  // seu código aqui
    let lastName = [name[name.length - 1]];
  concatName =  lastName.concat(name[0])
    return concatName

 }

 // Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
     return (wins*3 + ties);
    
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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

// Desafio 1
function compareTrue(value1, value2) {
  if(value1===true && value2===true){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  var arr=[];
  var i=0;
  var a;
  var b;
  for(let index=0; index<string.length; index+=1){
      a=string[index];
     if(string[index]===' '){
        i+=1;
      }

      if(arr[i]===undefined){
        arr[i]=string[index];
      }
      else{
        arr[i]+=string[index];
      }
  }
  return arr;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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







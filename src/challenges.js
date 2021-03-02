// Desafio 1
function compareTrue(x,y) {
  if((x&&y)==true){
    return true;
  }
  else{
    return false;
  }
}
// Desafio 2
function calcArea(base,height) {
  return (base*height/2);
}

// Desafio 3
function splitSentence(word) {
  let setence="";
  let setenceSplited=[];
  for(let index=0;index<word.length;index++){
    if(word[index]!=" "){
      setence=setence+word[index];
    }else if(word[index]==" "){
      setenceSplited.push(setence);
      setence="";
    }
  }
  setenceSplited.push(setence);
  return setenceSplited;
}

// Desafio 4
let words=['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(words) {
 let firstConcat="";
 let lastConcat=""; 
  for (let index = 0; index < words.length; index++) {
      if(index==0){
        firstConcat=words[index];
      }else if(index == words.length-1){
        lastConcat=words[index];
      }
    }
  const concat=lastConcat+", "+firstConcat;
  return concat;
}
console.log(concatName(words));

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

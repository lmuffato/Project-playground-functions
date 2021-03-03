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
// Desafio 5
function footballPoints(wins, ties){
 let winsPoints=wins*3
 let tiesPoints=ties*1
 let points=winsPoints+tiesPoints; 
 return points
}
// Desafio 6
function getBiggest(array){
  let biggestOne=0;
  for (let index = 1; index < array.length; index++) {
        if(array[index]>biggestOne){
        biggestOne=array[index];
    }  
  }
  return biggestOne;
}
function highestCount(array){
  let biggestOne=getBiggest(array)
  let repeaterchecker=0;
    for (let index = 0; index < array.length; index++) {
      if(biggestOne==array[index]){
        repeaterchecker++;
      }
  }
  return repeaterchecker
}
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if(cat1<cat2){
    return 'cat1';
  }else if(cat1>cat2){
    return 'cat2';
  }else if(cat1==cat2){
    return 'os gatos trombam e o rato foge';
  }

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

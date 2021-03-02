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
        if(string[index]!==' '){
          arr[i]=string[index];
        }
      }
      else{

        arr[i]+=string[index];

      }
  }
  return arr;

}


// Desafio 4
function concatName(names) {
  return names[names.length-1] + ' ' + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}

// Desafio 6
function highestCount(array) {
  let conta=0;
  let maior =0;
  for (index=0; index<array.length; index+=1){
    if(array[index]===maior){
      conta+=1;
    }
    else if(array[index]>maior){
      maior=array[index];
      conta=1;
    }

  }
  return conta;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;

  if(Math.abs(distanciaCat1)<Math.abs(distanciaCat2)){
    return 'cat1';
  }
  else if(Math.abs(distanciaCat2)<Math.abs(distanciaCat1)){
    return 'cat2';
  }
  else{
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

//console.log(splitSentence('foguete'));
//console.log(concatName(['captain', 'my', 'captain']));
//console.log(footballPoints(0,0));
//console.log(highestCount([0,0,0]));
console.log(catAndMouse(1,3,2));





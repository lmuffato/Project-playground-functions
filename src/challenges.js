// Desafio 1
function compareTrue(val1, val2) {
  if ((val1===true) && (val2===true)){
    return true; 
  } else {
    return false;
  }

}


// Desafio 2
function calcArea(base, height) {
  return ((base*height/2));
}


// Desafio 3
function splitSentence(strings) {

  let armazenaPalavras = [];
  let palavra = [];
  strings+=' ';

  for (let index in strings){
    
    if (strings[index]!=' ') {
      armazenaPalavras += strings[index];
    } else {
      palavra.push(armazenaPalavras);
      armazenaPalavras = [];
    }
}
return palavra;

}


// Desafio 4
function concatName(paramNomes) {
  
  let nomes = [];
  let primeiroNome = '';
  let segundoNome = '';

  for (let index in paramNomes){
    nomes.push (paramNomes[index]);
  }

  primeiroNome = nomes[nomes.length-1];
  segundoNome = nomes[0];
  
  let fullName = primeiroNome + ', ' + segundoNome;
  
  return console.log(fullName);
}



// Desafio 5
function footballPoints(wins, ties) {

    let vit = wins*3;
    let emp = ties*1;
    let sum = vit+emp;

    return (console.log(sum));
  
}


// Desafio 6
function highestCount(numeros) {

  let arrayDeNum = [];
  arrayDeNum = numeros;
  let maiorNum = 0;
  let cont = 0;

  for (let index in arrayDeNum){
    if (arrayDeNum[index]>maiorNum){
      maiorNum = arrayDeNum[index];
    }
  }

  for (let index in arrayDeNum){
      if (arrayDeNum[index] === maiorNum){
        cont++;
      }
  }

  return console.log(cont);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distCat1 = Number;
  let distCat2 = Number;

  distCat1 = cat1-mouse;
  distCat2 = cat2-mouse;

  if (cat1<cat2) 
  {
    return console.log('cat1');
  } 
  else if (cat2<cat1) 
  {
    return console.log('cat2');
  } else {
    return (console.log('os gatos trombam e o rato foge'));
  }
}

catAndMouse(1,6,6);



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

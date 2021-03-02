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

concatName(['captain', 'my', 'captain']);

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

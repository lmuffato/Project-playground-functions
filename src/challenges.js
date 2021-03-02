// Desafio 1
function compareTrue(val1, val2) {
  val1 = Boolean;
  val2 = Boolean;

  if ((val1 === true) && (val2 === true)) {
    return true;
  } else {
    return false;
  }
}

compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  return (((base * height) / 2));
}

// Desafio 3
function splitSentence(strings) {

  let armazenaPalavras = [];
  let palavra = [];
  strings+=' ';

  for (let index in strings) {    
    if (strings[index] !== ' ') {
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

  for (let index in paramNomes) {
    nomes.push (paramNomes[index]);
  }

  primeiroNome = nomes[nomes.length - 1];
  segundoNome = nomes[0];
  
  let fullName = primeiroNome + ', ' + segundoNome;
  
  return console.log(fullName);
}

// Desafio 5
function footballPoints(wins, ties) {
  let vit = wins * 3;
  let emp = ties * 1;
  let sum = vit + emp;
  return (console.log(sum));
}

// Desafio 6
function highestCount(numeros) {

  let arrayDeNum = [];
  arrayDeNum = numeros;
  let maiorNum = 0;
  let cont = 0;

  for (let index in arrayDeNum) {
    if (arrayDeNum[index] > maiorNum) {
      maiorNum = arrayDeNum[index];
    }
  }
  for (let index in arrayDeNum) {
    if (arrayDeNum[index] === maiorNum) {
      cont += 1;
    }
  }
  return console.log(cont);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;

  if (cat1 < cat2) {
    console.log('cat1');
  } else if (cat2 < cat1) {
    console.log('cat2');
  } else if (cat1 === cat2) {
    return (console.log('os gatos trombam e o rato foge'));
  }
}

// Desafio 8
function fizzBuzz(fizzBuzzParam) {
  let status = fizzBuzzParam;
  for (let index in fizzBuzzParam - 1) {
    status.push = fizzBuzzParam[index];}
  let symbols = [];
  for (let index in status){
    if ((status[index] % 3 === 0) && (status[index] % 5 === 0)) {
      symbols.push('fizzBuzz');
    } else if (status[index] % 3 === 0) {
      symbols.push('fizz');
    } 
    else if (status[index] % 5 === 0) {
      symbols.push('buzz');
    }
    else {
      symbols.push('bug');
    }
  }
  return console.log(symbols);
}

// Desafio 9
function encode(frase) {
  let encodingPhrase = frase;
  return (console.log(encodingPhrase));
}

encode('Hi there');

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



// Desafio 1
function compareTrue(val1, val2) {

   if ((val1 === true) && (val2 === true)) {
    return true;
  } else {
    return false;
}

// Desafio 2
function calcArea(base, height) {
  return console.log(((base * height) / 2));
}

// Desafio 3
function splitSentence(frase) {

  let str = '';
  str = frase;
  str += ' ';
  let letra = [];
  let armazenaPalavra = [];

  for (let index=0; index<str.length; index++){
    if (str[index] != ' '){
      letra += str[index];
    } else {
      armazenaPalavra.push(letra);
      letra = [];
    }    
  }
  return (console.log(armazenaPalavra));
}

// Desafio 4
function concatName(paramNomes) {
  let nomes = [];
  let primeiroNome = '';
  let ultimoNome = '';

  for (let index in paramNomes) {
    nomes.push (paramNomes[index]);
  }

  primeiroNome = nomes[nomes.length - 1];
  ultimoNome = nomes[0];
  
  let fullName = primeiroNome + ', ' + ultimoNome;
  
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

    let dist1 = cat1 - mouse;
    let dist2 = cat2 - mouse;

    if ((mouse > cat1) || (mouse > cat2)) {

      if (dist1 > dist2) {
        console.log ('cat1');
      } else if (dist1 < dist2) {
        console.log ('cat2')
      } else if (dist1 === dist2) {
        console.log('os gatos trombam e o rato foge');
      }
    } else {
      if (dist1 > dist2) {
        console.log ('cat2');
      } else if (dist1 < dist2) {
        console.log ('cat1')
      } else if (dist1 === dist2) {
        console.log('os gatos trombam e o rato foge')
    }
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
    } else if (status[index] % 5 === 0) {
      symbols.push('buzz');
    } else {
      symbols.push('bug!');
    }
  }
  return console.log(symbols);
}

// Desafio 9
function encode(frase) {
  let encodingPhrase = frase;
  let newPhrase = '';
  for (let index in encodingPhrase) {
    if (encodingPhrase[index] === 'a') {
      newPhrase += '1';
    } else if (encodingPhrase[index] ==='e') {
      newPhrase += '2';
    } else if (encodingPhrase[index] ==='i') {
      newPhrase += '3';
    } else if (encodingPhrase[index] ==='o') {
      newPhrase += '4';
    } else if (encodingPhrase[index] ==='u') {
      newPhrase += '5';
    } else {
      newPhrase += encodingPhrase[index];
    }
  }  return console.log(newPhrase);
}

function decode(frase) {
  let encodingPhrase = frase;
  let newPhrase = '';
  for (let index in encodingPhrase) {
    if (encodingPhrase[index] === '1') {
      newPhrase += 'a';
    } else if (encodingPhrase[index] ==='2') {
      newPhrase += 'e';
    } else if (encodingPhrase[index] ==='3') {
      newPhrase += 'i';
    } else if (encodingPhrase[index] ==='4') {
      newPhrase += 'o';
    } else if (encodingPhrase[index] ==='5') {
      newPhrase += 'u';
    } else {
      newPhrase += encodingPhrase[index];
    }
  }  return console.log(newPhrase);
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



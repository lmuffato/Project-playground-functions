// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

//console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

//console.log(calcArea(10,50));
//console.log(calcArea(5,2));
//console.log(calcArea(51,1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

//let teste = "go Trybe"
//console.log(splitSentence(teste));


// Desafio 4
function concatName(stringArray) {
  return `${ stringArray[stringArray.length -1] }, ${ stringArray[0] }`;
}

let arrayTeste = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
//console.log(concatName(arrayTeste));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

//console.log(footballPoints(14,8));
//console.log(footballPoints(1,2));
//console.log(footballPoints(0,0));

// Desafio 6
// usei esse link para me ajudar a decobrir qual o maior valor de um array https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
function highestCount(arrayNumbers) {
  let maiorNumero = 0;
  let repeticao = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > maiorNumero) {
       maiorNumero = arrayNumbers[index];
    }
  }
  
   for (let index = 0; index < arrayNumbers.length; index += 1) {
    if ( arrayNumbers[index] === maiorNumero){
      repeticao += 1
    }
   }
   return repeticao;
}

// Desafio 7          1       10    5
function catAndMouse(mouse, cat1, cat2) {
  let posição1 = Math.abs(cat1 - mouse);
  let posição2 = Math.abs(cat2 - mouse);
  if (posição1 > posição2) {
    return 'cat2';
  } else if (posição2 > posição1){
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

console.log(catAndMouse(1,8,5));


// Desafio 8
function fizzBuzz(arrayNumbers) {
  let resultadosFizzBuzz = [];
  for (let index = 0; index < arrayNumbers.length; index += 1){
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
    resultadosFizzBuzz.push('fizzBuzz');
    } else if (arrayNumbers[index] % 5 === 0) {
    resultadosFizzBuzz.push('buzz');   
    } else if (arrayNumbers[index] % 3 === 0) {
    resultadosFizzBuzz.push('fizz');   
    } else {
    resultadosFizzBuzz.push('bug!');
    }
  }
  return resultadosFizzBuzz;
}

//let testeArray = [2, 15, 7, 9, 45];
//console.log(fizzBuzz(testeArray));

// Desafio 9
function encode(string) {
  let substituirVogais =  string.replace('a', '1');
  console.log(substituirVogais);
  for ( let index = 0; index < string.length; index += 1){
    
  }
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

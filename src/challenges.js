// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  } else {
    return false;
  }
}
//console.log(compareTrue(true,false))

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area; 
}
//console.log(calcArea(10,50))

// Desafio 3
function splitSentence(phrase) {
  let result = phrase.split(" ");
 
 return result;
 
}
//console.log(splitSentence("go Trybe"))
//pesquisei o método no site "https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254"

// Desafio 4
function concatName(strings) {
  for(let index = 0; index < strings.length; index+=1) {
    return strings[strings.length -1] + ',' + strings[index] 
   
  }
  
}
//console.log(concatName(['captain', 'my', 'captain']))

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = 3;
  let empate = 1;
  let resultado = (wins * vitoria + ties * empate);
  return resultado;
}
//console.log(footballPoints(0,0))

// Desafio 6

function highestCount(arrayNumbers) {
let maxNumbers = Math.max.apply(this, arrayNumbers);
let contador = 0;
for (index = 0; index < arrayNumbers.length; index +=1) {
  if (maxNumbers === arrayNumbers[index]) {
    contador += 1;
  } 
}
return contador;
}
//let arrayNumbers = [0, 0, 0];
//pesquisei o método no site "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
 if (mouse === cat1 && mouse === cat2) {
   return "os gatos trombam e o rato foge"
 } else if (cat2 > mouse && cat2 < cat1|| cat1 > mouse && cat1 > cat2) {
 return "cat2"
 } else if (cat2 > mouse && cat2 > cat1|| cat1 > mouse && cat1 < cat2 ) {
   return "cat1"
 }
}
//console.log(catAndMouse(0,3,2))

// Desafio 8
//let array = [9, 25]
function fizzBuzz(array) {
  let result = [];
  
  for(let index = 0; index < array.length; index += 1) {
  
  if (array[index] % 3 != 0 && array[index] % 5 != 0 )  {
      result.push("bug!");
    
    } else if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      result.push("fizzBuzz");
    
    }else if (array[index] % 5 == 0) {
      result.push("buzz");
    
    } else if (array[index] % 3 == 0 ) {
      result.push("fizz");
    } 
} return fizzBuzz(array) 
//console.log(result)
} 

// Desafio 9
//let stringNumbers = 'hi there!'
function encode(stringNumbers) {
  let vogal = [];
  let textArray = stringNumbers.split('');
  
  for (index = 0; index < stringNumbers.length; index += 1) {
    if (textArray[index] === 'a') {
      vogal.push('1');
    } else if (textArray[index] === 'e') {
      vogal.push('2');
    }else if (textArray[index] === 'i') {
      vogal.push('3');
    }else if (textArray[index] === 'o') {
      vogal.push('4');
    }else if (textArray[index] === 'u') {
      vogal.push('5');
    }else {
      vogal.push(stringNumbers[index])
    }
  } 
  let result = vogal.join('')
  //console.log(result)
  return result
}

//let vogalNumbers = 'h3 th2r2!'
function decode(vogalNumbers) {
  let vogalArray = [];
  let text = vogalNumbers.split('');
  
  for (index = 0; index < vogalNumbers.length; index += 1) {
    if (text[index] === '1') {
      vogalArray.push('a');
    } else if (text[index] === '2') {
      vogalArray.push('e');
    }else if (text[index] === '3') {
      vogalArray.push('i');
    }else if (text[index] === '4') {
      vogalArray.push('o');
    }else if (text[index] === '5') {
      vogalArray.push('u');
    }else {
      vogalArray.push(vogalNumbers[index])
    }
  } 
  let result = vogalArray.join('')
  // console.log(result)
  return result
}
//pesquisei o método no site: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join"

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

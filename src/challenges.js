// Desafio 1
function compareTrue(value1,value2) {
  if(value1 == true && value2 == true){
    return true;
  } else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4, tive ajuda dos colegas na breakroom do fechamento dia 2/03
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`; 
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins *3) + ties;
}

// Desafio 6
/* vezes que numero aparece
descobrir maior numero
 */
function highestCount(arrayNumber) {
  let guardaMaiorNumero = 0;
  let contaMaiorNumero = 0;
  for(let index = 0;index < arrayNumber.length;index +=1){
    if (arrayNumber[index] > guardaMaiorNumero){
      guardaMaiorNumero = arrayNumber[index]
    }
    for(let index =0;index < arrayNumber;indice += 1){
      if (contaMaiorNumero == guardaMaiorNumero){
        contaMaiorNumero += 1
      }
    }
  }
  return contaMaiorNumero;
}
console.log(highestCount(2,8,9,7,9,1))

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let mouseForCat1 = Math.abs(mouse-cat1);
  let mouseForCat2 = Math.abs(mouse-cat2);

  if(mouseForCat1 < mouseForCat2){
    return "cat1"
  } else if (mouseForCat1 > mouseForCat2){
    return "cat2"
  } else if(mouseForCat1 == mouseForCat2) { 
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let result = []

  for(let index in arrayNumber){  

    if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0){
      result.push("fizzbuzz")
    } 
    else if (arrayNumber[index] % 3 === 0) {
      result.push("fizz")
    } 
    else if (arrayNumber[index] % 5 === 0){
      result.push("buzz")
    } 
    else {
      result.push("bug!")
    }
  }
  return result
}
console.log(fizzBuzz([2,5,15,20]))
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

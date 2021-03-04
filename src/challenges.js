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
function highestCount(arrayNumber) {
  let maxNumber = 0;
  for(let index = 0;index < arrayNumber.length;index +=1){
    if (arrayNumber[index] > maxNumber ){ 
      maxNumber = arrayNumber[index]
    }
    return maxNumber;
  }
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
 if (arrayNumber % 3 === 0) {
   return "fizz"
 } else if (arrayNumber % 5 === 0){
   return "buzz"
 }else if (arrayNumber % 3 === 0 && arrayNumber % 5 === 0){
   return "fizzbuzz"
 } else {
   return "bug!"
 }
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

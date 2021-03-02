// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
      return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return (base*height)/2

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  // vi isso em : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return string.split(" ");

}

// Desafio 4
function concatName(name_array) {
  // seu código aqui
  //bloco abaixo eu fiz
    var resultado = [];
   for (let index = 0; index < name_array.length; index++) {
         if (index === 0){
              resultado[index]= name_array[name_array.length -1];
         } 
        if (index === name_array.length-1){
            resultado.push(name_array[0]);
        }
   }
   name_array = resultado;
  return name_array;
  /* //bloco abaixo aprendi no plantão
  return `${name_array[name_array.length -1]}, ${name_array[0]}`;
  */
} 


 




// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let valueWins = 3 ;
  let valueTies = 1 ;
  return (wins*valueWins)+(ties * valueTies);

}


console.log(footballPoints(0,0));

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

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true
  }
  else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return base*height/2
}

// Desafio 3
function splitSentence(frase) {
  for (index = 0; index=length.frase; index ++){
    let caracter = frase[index]
    palavra = ''
    spliter =[]
      if (caracter != ' '){
        palavra.append(caracter)
      }
      else if(caracter = ' '){
        spliter.append(palavra)
        palavra = ''
      }
  return(spliter)
  }
}

// Desafio 4
function concatName(lista) {
  let caracter = ''
  let primeiraPalavra = ''
  let ultimaPalavra = ''
  for (index = 0; index = length.lista; index++){
    if (lista[index] != ' '){
      primeiraPalavra.append(lista[index])
    }
    else{
      break
    }
  }
  for (index = lengh.lista - 1; index = 0; index -=1){
    if (lista[index] != ' '){
      ultimaPalavra.append(lista[index])
    }
    else{
      break
    }
  }
let listaRetorno =[]
listaRetorno.append(primeiraPalavra)
listaRetorno.append(ultimaPalavra)
return(listaRetorno)
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins*3 + ties
  return pontos
}

// Desafio 6
function highestCount(numeros) {
  let contador = 0
  let numero = 0
  let maiorContador = 0
  for (index = 0; index < length.numeros; index ++){
    numero = parseInt(numeros[index])
    for (secondIndex = 0; secondIndex < length.numeros; secondIndex ++){
      if (numero == numeros[1]){
        contador++
      }
    if (maiorContador < contador){
      maiorContador = contador
    } 
    }

  }
return(maiorContador)
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

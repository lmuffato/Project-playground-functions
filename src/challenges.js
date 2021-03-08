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
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = mouse - cat1
  let distance2 = mouse - cat2
  if (distance1 > distance2){
    return(cat1)
  }
  else if (distance2 > distance1){
    return(cat2)
  }
  else if (distance1 == distance2){
    return("os gatos trombam e o rato foge")
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  for (index = 0; index < length.numeros; index++){
    if (numeros[index] % 3 == 0 && numeros[index] % 5 == 0){
      console.log('fizzBuzz')
    }
    if (numeros[index] % 3 == 0 && numeros[index] % 5 != 0){
      console.log('fizz')
    }
    else if (numeros[index] % 3 == 0 && numeros[index] % 5 == 0){
      console.log('buzz')
    }
    else{
      console.log('bug!')
    }

  }
}

// Desafio 9
function encode(fraseNormal) {
  fraseEncriptada = ''
  for (index = 0; index <length.fraseNormal; index++){
    if (fraseNormal[index] == 'a'){
    fraseEncriptada.append('1')
    }
    else if (fraseNormal[index] == 'e'){
      fraseEncriptada.append('2')
    }
    else if (fraseNormal[index] == 'i'){
      fraseEncriptada.append('3')
    }
    else if (fraseNormal[index] == 'o'){
      fraseEncriptada.append('4')
    }
    else if (fraseNormal[index] == 'u'){
      fraseEncriptada.append('5')
    }
    else{
      fraseEncriptada.append(fraseNormal[index])
    }
  }
return(fraseEncriptada)
}
function decode(fraseEncriptada) {
  fraseNormal = ''
  for (index = 0; index <length.fraseEncriptada; index++){
    if (fraseEncriptada[index] == '1'){
      fraseNormal.append('a')
    }
    else if (fraseEncriptada[index] == '2'){
      fraseNormal.append('e')
    }
    else if (fraseEncriptada[index] == '3'){
      fraseNormal.append('i')
    }
    else if (fraseEncriptada[index] == '4'){
      fraseNormal.append('o')
    }
    else if (fraseEncriptada[index] == '5'){
      fraseNormal.append('u')
    }
    else{
      fraseNormal.append(fraseEncriptada[index])
    }
  }
return(fraseNormal)
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

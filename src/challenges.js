// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
 
}

// Desafio 2
function calcArea(base, height) {
  let triangulo = ((base * height) / 2);
  return triangulo;
}

// Desafio 3
function splitSentence(string) {
  let splited = [];
  splited = string.split(' ');

  return splited;
}

// Desafio 4
function concatName(arrayNames) {
  let firstWord = arrayNames[0];
  let lastWord = arrayNames.pop();
  
  let lastFirst = firstWord.concat(', ', lastWord);
  return lastFirst;
}

// Desafio 5
function footballPoints(win, ties) {
  // definir variavel coeficiente de pontos pra win
  // definir variavel coeficiente de pontos pra ties
  // variável cálculo da soma
  // condicionar 0 pontos se win = 0 tier = 0
  // retornar cálculo
}

// Desafio 6
function highestCount() {
  // colocar o array em ordem crescente
  // identificar o maior
  // percorrer o array crescente e condicionar quantas vezes igualdade com array inicial aparece
  // a recorrencia retorna quantas vezes aparece
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // as proximidades dos gatos depende da posição do rato
  // rato sempre como referencial
  // valores como posições em eixo x
  // atribuir variavel distanciaReal em calculo de subtração
  // comparar os valores de distânciaReal, menor vence 
  // condicionar se distancia iguais, nenhum cat ganha

}

// Desafio 8
function fizzBuzz() {
  // atribuir array vazio fizzBuzzy
  // percorrer o array de números passados
  // condicionar as divisões
  // critérios de divisões definem o .push no array vazio
  // retornar o array fizzBuzzy com as palavras 
}

// Desafio 9
function encode() {
  // atribuir variável = 0
  // percorrer a string
  // criar um objeto para a tabela de trocar
  // usar o for pra percorrer o objeto
  // condicionar as trocas de letras
  // retornar a string decodificada
  
  

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

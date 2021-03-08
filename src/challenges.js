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
  let lastArray = arrayNames.length - 1;
  let lastWord = arrayNames[lastArray];
  
  let lastFirst = lastWord.concat(', ', firstWord);

  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;

  let score = winsPoints + tiesPoints;

  return score; 
}

// Desafio 6
function highestCount(arrayValues) {
  let crescente = arrayValues.sort();
  let higherNumber = crescente[crescente.length - 1];
  let repeat = [higherNumber];

  for (let index = 0; index < arrayValues.length - 1; index += 1) {
    if (arrayValues[index] == higherNumber) {
      repeat.push(arrayValues[index])
    }
  }

  return repeat.length;
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

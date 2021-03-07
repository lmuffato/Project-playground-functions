// Desafio 1
function compareTrue(teamFlamengoChampion, teamInterNoChampion) {
  if (teamFlamengoChampion && teamInterNoChampion === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3 - Aprendi a usar o SPLIT no site https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(frase, fraseSplit) {
  fraseSplit = frase.split(' ');
  return fraseSplit;
}

// Desafio 4
function concatName(listaDeNomes, ultimoPrimeiroNome) {
  ultimoPrimeiroNome = listaDeNomes[listaDeNomes.length - 1] + ', ' + listaDeNomes[0];
  return ultimoPrimeiroNome;
}

// Desafio 5
function footballPoints(wins, ties, score) {
  score = wins * 3 + ties * 1;
  return score;
}

// Desafio 6 - ?Aprendi neste link https://www.youtube.com/watch?v=IY7TRbXLU6c
function highestCount(conjuntoNumeros) {
  let quantidadeVezes = 0;
  let maiorNumero = Math.max(...conjuntoNumeros);
  for (let index = 0; index < conjuntoNumeros.length; index += 1) {
    if (maiorNumero === conjuntoNumeros[index]) {
      quantidadeVezes += 1;
    }
  }
  return quantidadeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > cat2) {
    return 'cat1';
  }
  if (cat1 < cat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }   
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

function highestCount(arrayNumbers) {
    let numMaior = 0;
    let contaRepeticao = 0;
    for (let index in arrayNumbers) {
        if (numMaior < arrayNumbers[index]) {
            numMaior = arrayNumbers[index];
        }
        if (numMaior === arrayNumbers[index]) {
            contaRepeticao += 1;
        }
    }
    return contaRepeticao;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

/* function maiorPalavra(string) {
    let maiorPalavra = string[0];
    for (let indice in string) {
      if (maiorPalavra.length < string[indice].length) {
        maiorPalavra = string[indice];
      }
    }
    return maiorPalavra;
  }
  
  console.log(maiorPalavra(['José', 'Lucas', 'Tibúrcio', 'Fernanda', 'Cairo', 'Joana'])); */
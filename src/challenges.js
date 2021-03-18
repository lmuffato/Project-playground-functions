// Desafio 1
function compareTrue(calculo1 , calculo2) {
  if (calculo1 === true && calculo2 === true) {
    return true;
} else {
    return false;
}

}

// Desafio 2
function calcArea(base , height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(texto) {
  return texto.split(" ");
}
// Desafio 4
function concatName(nomes) {
  // seu código aqui
  return `${nomes[nomes.length -1]}, ${nomes[0]}`
}

// Desafio 5
function footballPoints(wins , ties) {
  let pontos
  return pontos = wins * 3 + ties

}

// Desafio 6
function highestCount(valor) {
  let maiorNumeroAteAgora = valor[0];
    let count = 0;
    for (let i = 0; i < number.length; i++) {
      if (maiorNumeroAteAgora < valor[i]){
        maiorNumeroAteAgora = valor [i];
      }
    }
    for (let index = 0; index < number.length; index++) {
      if (number[index] === higher){
        count += 1;
      }
    }
    return count
  }
  //referencia https://pt.stackoverflow.com/questions/459413/verificar-quantas-vezes-um-n%C3%BAmero-aparece-no-array //
  // seu código aqui

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if (cat1 > cat2) {
    return 'cat2'
  }
  else if (cat2 > cat1){
    return 'cat1'
  }
  else if (cat1 && cat2 == mouse) {
    return 'os gatos trombam e o rato foge'
  }
}
  

  // seu código aqui

// Desafio 8
function fizzBuzz(array) {
  for(let i = 0; i < array.lenght; i += 1);
  if (array[i] % 3 == 0 && array[i] % 5){
      return 'fizzBuzz'
  }
  else if (array[i] % 3 == 0) {
      return 'fizz'
   }
  else if (array[i] % 5 == 0) {
      return 'buzz'
      
  } else {
      return 'bug!'
  }
  
}

// Desafio 9
function encode(palavras) {
  palavras = palavras.replace ('a' , '1').replace ('e' , '2').replace ('i' , '3').replace ('o' , '4')
  .replace ('u' , '5');
  return palavras

}
function decode(palavras) {
  palavras = palavras.replace ('1' , 'a').replace ('2' , 'e').replace ('3' , 'i').replace ('4' , 'o')
  .replace ('5' , 'u');
  return palavras
}
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

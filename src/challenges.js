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
function highestCount(array) {
  let maiorNumeroAteAgora = array[0];
  let count = 0;
  for (let index = 0; index < array.length; index += 1){
    if (maiorNumeroAteAgora < array[index]){
      maiorNumeroAteAgora = array [index];
    }
  }
  for (let index = 0; index < array.length; index += 1){
    if (array[index] === maiorNumeroAteAgora){
      count += 1;
    }
  }
  return count
}
  //referencia https://pt.stackoverflow.com/questions/459413/verificar-quantas-vezes-um-n%C3%BAmero-aparece-no-array //
  // seu código aqui

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positions = [mouse, cat1, cat2]
  let cat1Position = positions[0] - positions [1]
  let cat2Position = positions[0] - positions [2]
  
  if (cat1Position > cat2Position) {
    return 'cat2'
  }
  else if (cat2Position > cat1Position) {
    return 'cat2'
  
  } else {
    return 'os gatos trombam e o rato foge'
  }

}

  // seu código aqui

// Desafio 8
function divison(arrayFizzBuzz) {
  let words;

  if (arrayFizzBuzz % 3 === 0 && arrayFizzBuzz % 5 === 0) {
    words = 'fizzBuzz';
  } else if (arrayFizzBuzz % 3 === 0) {
    words = 'fizz';
  } else if (arrayFizzBuzz % 5 === 0) {
    words = 'buzz'; 
  } else {
    words = 'bug!';
  } 
  return words;
}
  
function fizzBuzz(words) {

  for(let i = 0; i < arrayFizzBuzz.length; i+= 1) {
    words.push(divison(arrayFizzBuzz[i]))
  }
  return console.log(words)
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

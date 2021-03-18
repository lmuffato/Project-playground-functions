// Desafio 1 //
function compareTrue(calculo1 , calculo2) {
    if (calculo1 === true && calculo2 === true){
        return true;
    } else {
        return false;
    }
}

// Desafio 2 //
function calcArea(base , height) {
    return base * height / 2;
}


// Desafio 3 //
function splitSentence(texto) {
    return texto.split(' ', 2);
}

// Desafio 4 //
function concatName(nomes) {
    return `${nomes[nomes.length -1]},${nomes[0]}`
    
}

concatName()
// Desafio 5 //
let pontos
function footballPoints(wins , ties) {
    return pontos = wins * 3 + ties
}
footballPoints(0 , 0)

// Desafio 6
function highestCount(valor) {
    let maiorNumeroAteAgora = valor[0];
    let count = 0;
    for (let i = 0; i < number.length; i++){
      if (maiorNumeroAteAgora < valor[i]){
        maiorNumeroAteAgora = valor [i];
      }
    }
    for (let index = 0; index < number.length; i++){
      if (number[index] === higher){
        count += 1;
      }
    }
    return count
  }

//Desafio 7 //
function catmouse(cat1, cat2, mouse) {
    let position = {
      positionCat1: Math.abs (cat1 - mouse) 
      positionCat2: Math.abs (cat2 - mouse)
    }
    if (position.positionCat2 > position.positionCat1) {
        return 'cat2';
    }
        else if (position.positionCat1 > position.positionCat2) {
            return 'cat1';
        }
        else {
            return 'os gatos trombam e o rato foge';
        }
}
    console.log (catmouse(0,0,0));


// Desafio 8 //
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

// Desafio 9 //
function encode(palavras) {
    
    
    for(let i = 0; i < palavras.lenght; i += 1)
    if (palavras[i] == 'a') {
        palavras[i] = 1
    }
    else if (palavras[i] == 'e') {
        palavras[i] == 2
    }
    else if (palavras[i] == 'i') {
        palavras == 3
    }
    else if (palavras[i] == 'o') {
        palavras == 4
    }
    else if (palavras[i] == 'u') {
        palavras == 5
    }
    return palavras

}


function decode(palavras) {
    
    
    for(let i = 0; i < palavras.lenght; i += 1)
    if (palavras[i] == 1) {
        palavras[i] = 'a'
    }
    else if (palavras[i] == 2) {
        palavras[i] == 'e'
    }
    else if (palavras[i] == 3) {
        palavras == 'i'
    }
    else if (palavras[i] == 4) {
        palavras == 'o'
    }
    else if (palavras[i] == 5) {
        palavras == 'u'
    }
    return palavras

}

// Desafio 10 //
    
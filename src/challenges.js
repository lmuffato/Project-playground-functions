// Desafio 1
function compareTrue(value1, value2) {
    //compara valores
  if (value1 === true && value2 === true) {
    //retorna true se os dois valores sao verdadeiros
    return true;
  } else
  //retorna false se algum dos valores é falso
    return false;
}

// Desafio 2
function calcArea(base, height) {
    //retorna valor da area do triangulo formado pela base e altura 
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(string) {
    //divide a string de entrada onde tem o caractere especial ' ' 
  return string.split(' ')
}

// Desafio 4
function concatName(strings) {
    //retorna o ultimo e depois o primeiro valor do array de strings
  return strings[strings.length - 1] + ', ' + strings[0]
}

// Desafio 5
function footballPoints(wins, ties) {
    //retorna o resultado do calculo de soma ponderada dos pontos
  return ((wins * 3) + (ties * 1))
}

// Desafio 6
function highestCount(numbers) {
    let count = 0; //variavel contadora
    let maxNumber = 0; //variavel para armazenar o maior numero encontrado
    //percorrer o parametro pra identificar o maior numero
    for (let index = 0; index < numbers.length; index += 1){
        if (maxNumber < numbers[index]){
            maxNumber = numbers[index]
        }
    }
    //percorre o parametro para contar quantas vezes ele aparece
    for (index = 0; index < numbers.length; index += 1){
        if (maxNumber === numbers[index]){
            count += 1;
        }
    }
    return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let distance1 = (cat1)**2 - (mouse)**2;//parametriza a distancia do gato1 ate o rato
    let distance2 = (cat2)**2 - (mouse)**2;//parametriza a distancia do gato2 ate o rato
      if (distance1 < distance2) {
          return('cat1');//caso o gato 1 esteja mais perto         
      }
      if (distance1 > distance2) {
          return('cat2');//caso o gato 2 esteja mais perto
      }
      else if (distance1 === distance2) {
          return('os gatos se trombam e o rato foge');//a distancia sendo a mesma
      }
}

// Desafio 8
function fizzBuzz(array) {
    let result = [];//variavel para armazenar array de resultados
        //percorre o array para trocar valores
        for (let index = 0; index < array.length; index += 1){
            if (array[index] % 3 === 0 && array[index] % 5 === 0){
              result.push('fizzBuzz');//troca valores inteiros divisiveis por 3 e por 5 
            }
            if (array[index] % 3 === 0 && array[index] % 5 !== 0){
              result.push('fizz');//troca valores inteiros divisiveis apenas por 3 
            }
            if (array[index] % 3 !== 0 && array[index] % 5 === 0){
              result.push('buzz');//troca valores inteiros divisiveis apenas por 5 
            }
            if (array[index] % 3 !== 0 && array[index] % 5 !== 0){
              result.push('bug!');//troca valores inteiros nem divisiveis por 3 nem por 5
            }
        }
    return(result);//retorna array de resultados 
}

// Desafio 9
function encode(string) {
    let output = [];
    let encodeString = [];
    for (let index = 0; index < string.length; ){
        if (string[index] === 'a'){
            encodeString.push('1');
            index += 1;
        }
        if (string[index] === 'e'){
            encodeString.push('2');
            index += 1;
        }
        if (string[index] === 'i'){
            encodeString.push('3');
            index += 1;
        }
        if (string[index] === 'o'){
            encodeString.push('4');
            index += 1;
        }
        if (string[index] === 'u'){
            encodeString.push('5');
            index += 1;
        }
        else {
            encodeString.push(string[index]);
            index += 1;
        }
    }
    for(index = 0; index < encodeString.length; index += 1){
        output = output + encodeString[index];
    }
    return(output)
  }
function decode(string) {
    let output = [];
        let decodeString = [];
        for (let index = 0; index < string.length + 1; ){
            if (string[index] === '1'){
                decodeString.push('a');
                index += 1;
            }
            if (string[index] === '2'){
                decodeString.push('e');
                 index += 1;
            }
            if (string[index] === '3'){
                 decodeString.push('i');
                index += 1;
            }
            if (string[index] === '4'){
                decodeString.push('o');
                index += 1;
            }
            if (string[index] === '5'){
                decodeString.push('u');
                index += 1;
            }
            else {
                decodeString.push(string[index]);
                index += 1;
            }
        }
    decodeString.pop();
    for(index = 0; index < decodeString.length; index += 1){
        output = output + decodeString[index];
    }
    return(output)// seu código aqui
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

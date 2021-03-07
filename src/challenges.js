// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
      return true
  }
  else {
      return false
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(text){
  let array = text.split(' ');
  return array;
}
console.log(splitSentence('Esse texto é um teste'))

// Desafio 4
let stringDeNomes = []
function concatName(arrayDeNomes) {
  stringDeNomes.push(arrayDeNomes[arrayDeNomes.length - 1]);
  stringDeNomes.push(arrayDeNomes[0]);
  let ultimoNomeMaisPrimeiro = stringDeNomes.toString();
  return ultimoNomeMaisPrimeiro
}
 console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(14, 8));

// Desafio 6
bigger = 0;
countBigger = 0;
function highestCount(arrayDeNumeros) {
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (bigger < arrayDeNumeros[index]) {
      bigger = arrayDeNumeros[index]
    }
  }
  for (let index2 = 0; index2 < arrayDeNumeros.length; index2 +=1) {
    if (bigger === arrayDeNumeros[index2]) {
      countBigger += 1
    }
  }
return countBigger
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  if (dist1 < 0) {
    dist1 = dist1 * (-1)
  }
  if (dist2 < 0) {
    dist2 = dist2 * (-1)
  }
  if (dist1 > dist2) {
    return 'cat2'
  }
  if (dist1 < dist2) {
    return 'cat1'
  }
  if (dist1 === dist2) {
    return "os gatos trombam e o rato foge"
  }
}
console.log(catAndMouse(8, 19, 4));

// Desafio 8
let arrayFizzBuzzResposta = []
let marcadorFizzBuzz = 0
function fizzBuzz(arrayFizzBuzz) {
  for (let index3 = 0; index3 < arrayFizzBuzz.length; index3 += 1) {
    marcadorFizzBuzz = arrayFizzBuzz[index3];
    if ((marcadorFizzBuzz % 3 === 0) && (marcadorFizzBuzz % 5 === 0)) {
      return arrayFizzBuzzResposta.push('fizzBuzz')
    } else if (marcadorFizzBuzz % 3 === 0) {
      return arrayFizzBuzzResposta.push('fizz')
    } else if (marcadorFizzBuzz % 5 === 0) {
      return arrayFizzBuzzResposta.push('buzz')
    } else {
      return arrayFizzBuzzResposta.push('bug!')
    }
  }
}
console.log(fizzBuzz([5]));

// Desafio 9
function encode(trocar) {
  newArray = trocar.split('');
  for (let index4 = 0; index4 < newArray.length; index4 += 1) {
    if (newArray[index4] === 'a') {
      newArray[index4] = '1'
    }
    if (newArray[index4] === 'e') {
      newArray[index4] = '2'
    }
    if (newArray[index4] === 'i') {
      newArray[index4] = '3'
    }
    if (newArray[index4] === 'o') {
      newArray[index4] = '4'
    }
    if (newArray[index4] === 'u') {
      newArray[index4] = '5'
    }
  }
  newString1 = newArray.join('');
  return newString1;
}
console.log(encode('frase'));

function decode(destrocar) {
  newArray = destrocar.split('')
  for (let index5 = 0; index5 < newArray.length; index5 += 1) {
    if (newArray[index5] === '1') {
      newArray[index5] = 'a'
    }
    if (newArray[index5] === '2') {
      newArray[index5] = 'e'
    }
    if (newArray[index5] === '3') {
      newArray[index5] = 'i'
    }
    if (newArray[index5] === '4') {
      newArray[index5] = 'o'
    }
    if (newArray[index5] === '5') {
      newArray[index5] = 'u'
    }
  }
  newString2 = newArray.join('');
  return newString2;
}
console.log(decode('h3 th2r2!'));

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

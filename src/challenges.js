// Desafio 1
function compareTrue(test1, test2) {
  return test1 && test2;
  // seu código aqui
}

// Desafio 2
function calcArea(base, heigt) {
  // seu código aqui
  return (base * heigt) / 2;

}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let word = '';
  let sentenceSplited = [];
  for (let index in sentence) {
    if (sentence[index] !== ' ') {
      word += sentence[index];
      index += 1;
    } else if (word !== '' || index === sentence.length - 1) {
      sentenceSplited.push(word);
      word = '';
    }
  }
  sentenceSplited.push(word);
  return sentenceSplited;
}

// Desafio 4
function concatName(originArray) {
  // seu código aqui
  return originArray[originArray.length -1] + ', ' + originArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbersArray) {
  // seu código aqui
  let count = 0;
  let testNumber = numbersArray[0];
  for (let index in numbersArray) {
    if (testNumber < numbersArray[index]) {
      testNumber = numbersArray[index];
      count = 1;
    } else if (testNumber === numbersArray[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  let result;
  if (cat1Distance < cat2Distance) {
    result = 'cat1';
  } else if (cat1Distance > cat2Distance) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbersArray) {
  // seu código aqui
  let word = '';
  let mensage = [];
  for (let index in numbersArray) {
    if (numbersArray[index] % 3 === 0) {
      word = 'fizz';
      if (numbersArray[index] % 5 === 0) {
        word = 'fizzBuzz';
      }
    } else if (numbersArray[index] % 5 === 0) {
      word = 'buzz';
    } else {
      word = 'bug!';
    }
    mensage.push(word);
  }
  return mensage;
}

// Desafio 9
function encode(decriptMensage) {
  // seu código aqui
  let mensageEncripted = '';
  let codeDic = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  }
  for (let index in decriptMensage) {
    if (decriptMensage[index] === 'a' || decriptMensage[index] === 'e' || decriptMensage[index] === 'i'|| decriptMensage[index] === 'o'|| decriptMensage[index] === 'u' ) {
      mensageEncripted += codeDic[decriptMensage[index]];
    } else {
      mensageEncripted += decriptMensage[index];
    }
  }
  return mensageEncripted;
}

function decode(encriptMensage) {
  // seu código aqui
  let mensageDecripted = '';
  let decodeDic = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  for (let index in encriptMensage) {
    if(encriptMensage[index] === '1' || encriptMensage[index] === '2' || encriptMensage[index] === '3'|| encriptMensage[index] === '4'|| encriptMensage[index] === '5' ) {
      mensageDecripted += decodeDic[encriptMensage[index]];
    } else {
      mensageDecripted += encriptMensage[index];
    }
  }
  return mensageDecripted;
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

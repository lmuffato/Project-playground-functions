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
  return originArray[originArray.length - 1] + ', ' + originArray[0];
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
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0) {
      word += 'fizz';
    } else if (numbersArray[index] % 5 === 0) {
      word += 'buzz';
    } else {
      word = 'bug!';
    }
    if (word === 'fizzbuzz') {
      word = 'fizzBuzz';
    }
    mensage.push(word);
    word = '';
  }
  return mensage;
}

// Função verifica se caractere é uma vogal e retorna true se for e false se não for.
function isVogal(char) {
  return (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u');
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
  };
  for (let index in decriptMensage) {
    if (isVogal(decriptMensage[index])) {
      mensageEncripted += codeDic[decriptMensage[index]];
    } else {
      mensageEncripted += decriptMensage[index];
    }
  }
  return mensageEncripted;
}

// Função verifica  o caratere correponte a um número de 1 a 5 e retorna true se for e false se não for.
function isNumber1to5(char) {
  return (char === '1' || char === '2' || char === '3' || char === '4' || char === '5');
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
  };
  for (let index in encriptMensage) {
    if (isNumber1to5(encriptMensage[index])) {
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

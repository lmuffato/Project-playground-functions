// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let stringTranformed = string.split(' ');

  return stringTranformed;
}

// Desafio 4
function concatName(listName) {
  let indexLastName = listName.length;
  let lastName = listName[indexLastName - 1];
  let firstName = listName[0];
  let concatNames = lastName + ', ' + firstName;

  return concatNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let draw = 1;
  let points = 0;

  if (wins > 0) {
    points += wins * victory;
  }

  if (ties > 0) {
    points += ties * draw;
  }

  return points;
}

// Desafio 6
function highestCount(listNumbers) {
  let indexHighestValue = 0;
  let contRepete = 0;
  let valueHighest = listNumbers[0];

  for (let indexOne = 0; indexOne < listNumbers.length; indexOne += 1) {
    if (listNumbers[indexOne] > valueHighest) {
      valueHighest = listNumbers[indexOne];
    }
  }

  for (let indexTwo = 0; indexTwo < listNumbers.length; indexTwo += 1) {
    if (listNumbers[indexTwo] === valueHighest) {
      contRepete += 1;
    }
  }

  return contRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let inputCat = '';

  if (distCat1 > distCat2) {
    inputCat = 'cat2';
  } else if (distCat2 > distCat1) {
    inputCat = 'cat1';
  } else if (distCat2 === distCat1) {
    inputCat = 'os gatos trombam e o rato foge';
  }

  return inputCat;
}

// Desafio 8
function fizzBuzz(listNumbers) {
  let listArrayString = [];

  for (let index in listNumbers) {
    
    if (listNumbers[index] % 3 === 0 && listNumbers[index] % 5 === 0) {
      listArrayString.push("fizzBuzz");
    } else if (listNumbers[index] % 3 === 0) {
      listArrayString.push("fizz");
    } else if (listNumbers[index] % 5 === 0) {
      listArrayString.push("buzz");
    } else {
      listArrayString.push("bug!");
    }
  }

  return listArrayString;
}

// Desafio 9
function encode(codStringCodif) {
  let arrayCodif = codStringCodif.split("")

  for (let index in arrayCodif) {
    if (arrayCodif[index] === 'a') {
      arrayCodif[index] = 1;
    } else if (arrayCodif[index] === 'e') {
      arrayCodif[index] = 2;
    } else if (arrayCodif[index] === 'i') {
      arrayCodif[index] = 3;
    } else if (arrayCodif[index] === 'o') {
      arrayCodif[index] = 4;
    } else if (arrayCodif[index] === 'u') {
      arrayCodif[index] = 5;
    }
  }

  return arrayCodif.join('');
}
function decode(codStringDecodif) {
  let arrayDecodif = codStringDecodif.split("");

  for (let index in arrayDecodif) {
    if (arrayDecodif[index] === '1') {
      arrayDecodif[index] = 'a';
    } else if (arrayDecodif[index] === '2') {
      arrayDecodif[index] = 'e';
    } else if (arrayDecodif[index] === '3') {
      arrayDecodif[index] = 'i';
    } else if (arrayDecodif[index] === '4') {
      arrayDecodif[index] = 'o';
    } else if (arrayDecodif[index] === '5') {
      arrayDecodif[index] = 'u';
    }
  }

  return arrayDecodif.join('');
}

// Desafio 10
function tecnologias(ListTech, name) {
  let myObject = {};
  let myObjectList = [];

  for (let index in ListTech) {
    myObject['tech'] = ListTech[index];
    myObject['name'] = name;
    myObjectList.push(myObject)
    delete myObject.tech;
    delete myObject.name;
  }

  return myObjectList
}

console.log(tecnologias(['CSS', 'HTML'], 'Lucas'))

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

let object1 = {
  tech: 'css',
  nome: 'lucas'
}

for (let index in object1) {
  object1['idade'] = 28
}

console.log(object1)
// Desafio 10
function createObj(string1, string2) {
  let obj = {
    tech: string1,
    name: string2,
  };
  return obj;
}

function techList(arrayOfStrings, string) {
  arrayOfStrings.sort();
  if (arrayOfStrings.length === 0) {
    return 'Vazio!';
  }
  let objects = [];
  for (let index = 0; index < arrayOfStrings.length; index += 1) {
    objects.push(createObj(arrayOfStrings[index], string));
  }
  return objects;
}

// Desafio 11
function generatePhoneNumber(arrayOfNumbers) {
  if (arrayOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let countNumberRepetition = {};
  for (let index in arrayOfNumbers) {
    if (typeof countNumberRepetition[arrayOfNumbers[index]] === 'undefined') {
      countNumberRepetition[arrayOfNumbers[index]] = 1;
    } else {
      countNumberRepetition[arrayOfNumbers[index]] += 1;
    }
  }
  for (let key in countNumberRepetition) {
    if (key < 0 || key > 9 || countNumberRepetition[key] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${arrayOfNumbers[0]}${arrayOfNumbers[1]}) ${arrayOfNumbers[2]}${arrayOfNumbers[3]}${arrayOfNumbers[4]}${arrayOfNumbers[5]}${arrayOfNumbers[6]}-${arrayOfNumbers[7]}${arrayOfNumbers[8]}${arrayOfNumbers[9]}${arrayOfNumbers[10]}`;
}

// Desafio 12
function checkLine(lineToCheck, otherLine1, otherLine2) {
  if (
    lineToCheck < otherLine1 + otherLine2 &&
    lineToCheck > Math.abs(otherLine1 - otherLine2)
  ) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (checkLine(lineA, lineB, lineC) === false) {
    return false;
  }
  if (checkLine(lineB, lineC, lineA) === false) {
    return false;
  }
  if (checkLine(lineB, lineC, lineC) === false) {
    return false;
  }
  return true;
}
console.log(triangleCheck(6,9,2));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

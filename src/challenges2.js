// Desafio 10
function techList(tech, name) {
  let newList = [];
  tech = tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    newList.push({
      tech: tech[index],
      name,
    });
  }
  if (tech.length === 0) {
    return 'Vazio!';
  }
  return newList;
}

// Desafio 11
arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
function generatePhoneNumber(arrayOfNumbers) {
  if (arrayOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    let repeatedNumbersIndex = 0;
    for (let indexOfRepetitions = 0; indexOfRepetitions < arrayOfNumbers.length; indexOfRepetitions += 1) {
      if (arrayOfNumbers[index] === arrayOfNumbers[indexOfRepetitions]) {
        repeatedNumbersIndex += 1;
      }
      if (arrayOfNumbers[indexOfRepetitions] < 0 || arrayOfNumbers[indexOfRepetitions] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    if (repeatedNumbersIndex >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let phoneNumber = '';
  for (let indexOfNumber = 0; indexOfNumber < arrayOfNumbers; indexOfNumber += 1) {
    switch (true) {
    case indexOfNumber === 0:
      phoneNumber += ('(' + arrayOfNumbers[indexOfNumber]);
      break;

    case indexOfNumber === 2:
      phoneNumber += (') ' + arrayOfNumbers[indexOfNumber]);
      break;

    case indexOfNumber === 7:
      phoneNumber += ('-' + arrayOfNumbers[indexOfNumber]);
      break;

    default:
      phoneNumber += arrayOfNumbers[indexOfNumber];
      break;
    }
  }
  return phoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

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

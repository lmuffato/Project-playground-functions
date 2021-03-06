// Desafio 10
function techList(techNames, personName) {
  let techNamesSorted;
  let techObjects;
  
  if (techNames.length !== 0) {
    techObjects = [];
    techNamesSorted = techNames.sort();
    for (let index = 0; index < techNamesSorted.length; index += 1) {
      let techObject = { tech: techNamesSorted[index], name: personName };

      techObjects.push(techObject);
    }
  } else {
    techObjects = 'Vazio!';
  }
  return techObjects;
}

// Desafio 11
function checkLength(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
}

function checkNumberRange(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function checkRepeatThreeTimes(numbers) {
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    let number = numbers[index];
    for (let innerIndex = 0; innerIndex < numbers.length; innerIndex += 1) {
      if (numbers[innerIndex] === number) {
        count += 1;
      }
    }
  }
  if (count >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

function generatePhoneNumber(numbers) {
  let errorInfo = '';

  errorInfo = checkLength(numbers);
  errorInfo = checkNumberRange(numbers);
  errorInfo = checkRepeatThreeTimes(numbers);
}

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

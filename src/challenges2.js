// Desafio 10
function techList(arrayList, name) {
  let newArrayList = [];

  if (arrayList.length > 0) {
    for (let index = 0; index < arrayList.length; index += 1) {
      newArrayList.push({ tech: arrayList[index], name });
    }
  } else {
    return 'Vazio!';
  }

  newArrayList.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }

    if (a.tech < b.tech) {
      return -1;
    }

    return 0;
  });

  return newArrayList;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let formatedPhoneNumber = '';

  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  formatedPhoneNumber = formatedPhoneNumber.concat('(');
  for (let index = 0; index < 2; index += 1) {
    formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
  }

  formatedPhoneNumber = formatedPhoneNumber.concat(') ');

  for (let index = 2; index < 7; index += 1) {
    formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
  }

  formatedPhoneNumber = formatedPhoneNumber.concat('-');

  for (let index = 7; index < 11; index += 1) {
    formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
  }

  return formatedPhoneNumber;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Wanderson'));

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

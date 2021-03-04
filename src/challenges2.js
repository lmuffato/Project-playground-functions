// Desafio 10

function techList(technologies, profile) {
  if (technologies.length === 0) {
    return 'Vazio!';
  }

  let arraySort = technologies.sort();
  let array = [];

  for (let index = 0; index < technologies.length; index += 1) {
    array.push({
      tech: arraySort[index],
      name: profile,
    });
  }

  return array;
}

// Desafio 11

function verifyRepetition(telephone) {
  let sorted = [...telephone].sort();

  for (let index = 0; index < telephone.length; index += 1) {
    if (sorted[index] === sorted[index + 1] && sorted[index] === sorted[index + 2]) return true;
  }

  return false;
}

function verifyBiggerSmaller(telephone) {
  for (let index in telephone) {
    if (telephone[index] < 0 || telephone[index] > 9) return true;
  }
  return false;
}

function createPhoneNumber(number, index) {
  let stringNumber = number.toString();

  if (index === 0) {
    return `(${stringNumber}`;
  }

  if (index === 1) {
    return `${stringNumber}) `;
  }

  if (index === 7) {
    return `-${stringNumber}`;
  }

  return stringNumber;
}

function generatePhoneNumber(telephone) {
  let stringPhoneNumber = '';

  if (telephone.length !== 11) return 'Array com tamanho incorreto.';

  if (verifyBiggerSmaller(telephone) === true || verifyRepetition(telephone) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  for (let index = 0; index < telephone.length; index += 1) {
    stringPhoneNumber += createPhoneNumber(telephone[index], index);
  }

  return stringPhoneNumber;
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

/*

REFERÊNCIAS UTILIZADAS :
https://medium.com/swlh/5-ways-to-replace-if-else-statements-857c0ff19357
https://flaviocopes.com/how-to-get-index-in-for-of-loop/
https://flaviocopes.com/how-to-find-duplicates-array-javascript/
https://eslint.org/docs/rules/no-else-return
https://stackoverflow.com/questions/24074968/does-sort-function-change-original-array
https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript/
*/

// Desafio 10
/**
 * Para esse desafio usei a implementação do João Pimentel para ordenar um array de objetos,
 * link do StackOverFlow: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
 */
function compare(a, b) {
  if (a.tech < b.tech) {
    return -1;
  }
  if (a.tech > b.tech) {
    return 1;
  }
  return 0;
}

function techList(array, name) {
  let techListObjects = [];

  if (array.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < array.length; index += 1) {
    techListObjects.push({
      tech: array[index],
      name,
    });
  }
  return techListObjects.sort(compare);
}

// Desafio 11
function lengthValid(array) {
  if (array.length !== 11) {
    return true;
  }
  return false;
}

function isValidNumber(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return false;
    }
  }
  return true;
}
/**
 * Estava com um pouco de dificuldade para verificar quantas vezes um número se repete,
 * dei uma pesquisada no códigos dos colegas e achei a implementação do Bruno Mendes bem interessante
 * e resolvi implementá-la. Link do GitHub: https://github.com/tryber/sd-010-a-project-playground-functions/tree/bruno-s-mendes-project-playground-functions
 */
function isRepeat(array) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let index = 0; index < array.length; index += 1) {
    count[array[index]] += 1;
  }

  for (let index = 0; index < count.length; index += 1) {
    if (count[index] >= 3) {
      return true;
    }
  }
  return false;
}

function phoneNumber(array) {
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`
  + `-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

function generatePhoneNumber(array) {
  if (lengthValid(array)) {
    return 'Array com tamanho incorreto.';
  }

  if (isValidNumber(array) && !isRepeat(array)) {
    return phoneNumber(array);
  }
  return 'não é possível gerar um número de telefone com esses valores';
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

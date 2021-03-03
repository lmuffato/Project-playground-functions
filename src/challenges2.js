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
function generatePhoneNumber() {
  // seu código aqui
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

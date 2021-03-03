// Desafio 10
function techList(list, name) {
  let result;
  if (list.length === 0) {
    result = 'Vazio!';
  } else {
    list = list.sort();
    result = [];
    for (let index = 0; index < list.length; index += 1) {
      let tech = list[index];
      let item = {
        tech,
        name,
      };
      result.push(item);
    }
  }
  return result;
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

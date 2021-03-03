// Desafio 10
function techList(list, name) {
  if (list.lenght >=0) {
    list = list.sort();
    let result = [];
    for (let index = 0; index < list.length; index +=1) {
      let item = {
        tech: list[index],
        name: name,
      };
      result.push(item);
    }
  } else {
    let result = 'Vazio!';
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

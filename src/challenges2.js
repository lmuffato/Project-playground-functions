// Desafio 10
function techList(techArray, name) {
  let result;
  if (techArray.length > 0) {
    techArray = techArray.sort();
    let objectArray = [];
    for (let index = 0; index < techArray.length; index += 1) {
      let object = { tech: techArray[index], name: name };
      objectArray.push(object);
    }
    result = objectArray;
  } else {
    result = 'Vazio!';
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

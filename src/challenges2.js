// Desafio 10
function techList(techArray, name) {
  let resultArray = [];
  let objectList;
  for (let index = 0; index < techArray.length; index += 1) {
    let objectList = {
      tech: techArray[index],
      nome: name,
    };
    resultArray.push(objectList);
  }
  if (techArray.length === 0) {
    objectList = 'Vazio!';
  }
  console.log(resultArray);
  return resultArray;
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

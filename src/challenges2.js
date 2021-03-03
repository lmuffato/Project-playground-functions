// Desafio 10
function techList(techListArray, name) {
  const listTechObj = [];
  const OrdenedTechListArray = techListArray.sort();

  if (techListArray.length === 0) {
    return 'Vazio!';
  }

  for (let index in OrdenedTechListArray) {
    // Referencia: https://eslint.org/docs/rules/guard-for-in
    if (Object.prototype.hasOwnProperty.call(OrdenedTechListArray, index)) {
      listTechObj.push({
        tech: OrdenedTechListArray[index],
        name,
      });
    }
  }

  return listTechObj;
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

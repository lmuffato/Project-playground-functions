// Desafio 10
function techList(arrayTechNames, name) {
  if (arrayTechNames.length > 0) {
    let arraySorted = arrayTechNames.sort();
    let exitArray = [];
    for (let index in arraySorted) {
      let insertObj = {};
      insertObj.tech = arraySorted[index];
      insertObj.name = name;
      exitArray.push(insertObj);
    }
  } else {
    return 'Vazio!';
  }
  return exitArray;
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

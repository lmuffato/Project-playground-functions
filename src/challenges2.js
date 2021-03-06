// Desafio 10
function techList(techName, name) {
  let techListArray = [];
  let techNameOrdened = techName.sort();

  for (let i = 0; i < techNameOrdened.length; i += 1) {
    let techListObjetc = {
      tech: techNameOrdened[i],
    };
    techListObjetc.name = name;
    techListArray.push(techListObjetc);
  }
  return techListArray;
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

// Desafio 10
function techList(paramTech, paramNome) {
  // seu código aqui
  let arrayTec = [];
  arrayTec = paramTech;
  arrayTec.sort();
  let name = '';
  name = paramNome;
  let novoArray = [];
  let objetoSeparado = {};
  for (let index = 0; index < arrayTec.length; index += 1) {
    objetoSeparado = { tech: arrayTec[index], name : name };
    novoArray.push(objetoSeparado);
  }
  if (novoArray.length === 0) {
    return 'Vazio!';
  } return novoArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

generatePhoneNumber();

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

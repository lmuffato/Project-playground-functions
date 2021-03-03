// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techListObject = {};
  let retornoObject = [];

  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < tech.length; i += 1) {
    techListObject.tech = tech[i];
    techListObject.name = name;
    retornoObject.push({tech: [tech[i]], name});
  }
  return retornoObject;
}

// Desafio 11
function generatePhoneNumber(telNumber) {
  // seu código aqui
  let j = 0;
  let repete = 0;
  for (let i = 0; i < telNumber.length; i += 1) {
    if (telNumber.length > 11) {
    return 'Array com tamanho incorreto.'
    }
    for (let k = 0; k < telNumber.length; k += 1) {
      repete = 0;
      if (telNumber[i] === telNumber[k]) {
        repete += 1;
      }
      if (repete > 3 || telNumber[i] < 0 || telNumber[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      for (let j = 0; j < telNumber.length; j += 1){
        ddd1 = telNumber[0];
        telNumber[0] = '(';
        telNumber[]
      }
    }
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

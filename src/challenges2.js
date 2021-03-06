// Desafio 10
function techList(nomesTech,name) {
  nomesTech.sort();
  let result = [];
  
  if (nomesTech.length === 0) {
    return 'Vázio!';
  }
  for(let index = 0; index < nomesTech.lenght; index += 1){
    nomesTech.push(
      {
      tech: nomesTech[index],
      name: name,
    }
    );
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

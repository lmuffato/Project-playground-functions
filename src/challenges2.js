// Desafio 10
function techList(techs, name) {
  const resultArr = [];

  if (techs.length === 0) return 'Vazio!';

  for (let tech in techs.sort()) {
    if (techs[tech]) {
      resultArr.push({ tech: techs[tech], name });
    }
  }

  return resultArr;
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
// Função replace e parâmetros retirados do Stackoverflow(https://stackoverflow.com/questions/30607419/return-only-numbers-from-string) combinado com documentação do MDN
function hydrate(drinks) {
  let glassesOfWater = 0;
  const numbers = drinks.replace(/\D/g, '').split('');

  for (let number of numbers) {
    glassesOfWater += Number(number);
  }

  return `${glassesOfWater} copo${glassesOfWater > 1 ? 's' : ''} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

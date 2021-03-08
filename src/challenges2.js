// Desafio 10
function techList(technologies, name) {
  let technologiesGroup = []
  if (technologies.length === 0) {
    technologiesGroup = 'Vazio!';
  } else {
    technologies = technologies.sort()
    for (let index = 0; index < technologies.length; index++) {
      technologiesGroup.push({
        tech: technologies[index],
        name: name
      });
    }
  }
  return technologiesGroup;
}

// Desafio 11
function generatePhoneNumber(numbersGroup) {
  if (numbersGroup.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  for (i = 0; i < numbersGroup.length; i++) {
    let n = numbersGroup[i];
    let cont = 0;
    if (n < 0 || n > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (index = 0; index < numbersGroup.length; index++) {
      if (n == numbersGroup[index]) {
        cont++;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }

  }
  return '(' + numbersGroup[0] + numbersGroup[1] + ') ' + numbersGroup[2] + numbersGroup[3] + numbersGroup[4] + numbersGroup[5] + numbersGroup[6] + '-' + numbersGroup[7] + numbersGroup[8] + numbersGroup[9] + numbersGroup[10];
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

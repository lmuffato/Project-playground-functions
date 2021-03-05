// Desafio 10
function techList(techNames, name) {
  // seu código aqui
  let technologies = [];
  if (techNames.length <= 0) {
    return 'Vazio!';
  }
  for (let techName in techNames.sort()) {
    technologies.push({
      tech: techNames[techName],
      name: name,
    });
  } return technologies;
}
techList([], 'Alexandre');
// Desafio 11
// seu código aqui
function numberRepeat(phoneNumber) {
  for (let index = 0; index < phoneNumber.length; index += 1) {
    let numberRepeat = 0;
    for (let secondIndex = 0; secondIndex < phoneNumber.length; secondIndex += 1) {
      if ((phoneNumber[index] === phoneNumber[secondIndex])) {
        numberRepeat += 1;
      } if (numberRepeat >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
}
function generatePhoneNumber(phoneNumber) {

  let firstPart = '';
  let secondPart = '';
  let thirdPart = '';
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (phoneNumber.length != 11) {
      return 'Array com tamanho incorreto.'
    } else if (phoneNumber[index] < 0 || phoneNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      let allNumber = phoneNumber.join('');
      firstPart = allNumber.slice(0, 2);
      secondPart = allNumber.slice(2, 7);
      thirdPart = allNumber.slice(7, 11);
      numberAdjusted = `(${firstPart}) ${secondPart}-${thirdPart}`;
    }
    return numberAdjusted
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

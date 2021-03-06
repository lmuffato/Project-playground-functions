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


function verifyRepeatNumber(phoneNumber) {
  for (let index = 0; index < phoneNumber.length; index += 1) {
    let numberRepeat = 0;
    for (let secondIndex = 0; secondIndex < phoneNumber.length; secondIndex += 1) {
      if ((phoneNumber[index] === phoneNumber[secondIndex])) {
        numberRepeat += 1;
      } else if (phoneNumber[index] < 0) {
        return console.log('Array com tamanho incorreto.');
      } else if (phoneNumber[index] > 11) {
        return console.log('Array com tamanho incorreto2.');
      } if ((numberRepeat >= 3)) {
        return console.log('não é possível gerar um número de telefone com esses valores');
      }
    }
  } return verifyRepeatNumber
}
function generatePhoneNumber() {
  let firstPart = '';
  let secondPart = '';
  let thirdPart = '';
  let numberAdjusted = 0
  for (let thirdIndex = 0; thirdIndex < phoneNumber.length; thirdIndex += 1) {
    if (phoneNumber.length != 11) {
      return console.log('não é possível gerar um número de telefone com esses valores');
    } else {
      let allNumber = phoneNumber.join('');
      firstPart = allNumber.slice(0, 2);
      secondPart = allNumber.slice(2, 7);
      thirdPart = allNumber.slice(7, 11);
      numberAdjusted = `(${firstPart}) ${secondPart}-${thirdPart}`;
    }
  } return console.log(numberAdjusted)
} verifyRepeatNumber([1, 2, 3, 4, 5, 6, 7, 8, 8, 9,0])

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

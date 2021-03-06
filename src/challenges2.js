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
let firstPart = '';
let secondPart = '';
let thirdPart = '';
let numberAdjusted = ''
let allNumber = ''
function verifyArrayLength(arrayNumbers) {
  for (let number in arrayNumbers) {
    if (arrayNumbers[number] < 0) {
      return 'Array com tamanho incorreto.';
    } else if (arrayNumbers[number] > 9) {
      return 'Array com tamanho incorreto.';
    }
  } return true
}
function verifyRepeatedNumber(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let numberRepeat = 0;
    for (let secondIndex = 0; secondIndex < arrayNumbers.length; secondIndex += 1) {
      if (arrayNumbers[index] === arrayNumbers[secondIndex]) {
        numberRepeat += 1;
      } if (arrayNumbers.length != 11) {
        return 'não é possível gerar um número de telefone com esses valores';
      } if ((numberRepeat >= 3)) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } return true
}
function generatePhoneNumber(phoneNumber) {
  if (verifyRepeatedNumber(phoneNumber) && verifyArrayLength(phoneNumber)) {
  }
  allNumber = phoneNumber.join('');
  firstPart = allNumber.slice(0, 2);
  secondPart = allNumber.slice(2, 7);
  thirdPart = allNumber.slice(7, 11);
  numberAdjusted = `(${firstPart}) ${secondPart}-${thirdPart}`;
  return numberAdjusted
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

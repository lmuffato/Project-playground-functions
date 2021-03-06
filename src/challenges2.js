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
    if (arrayNumbers[number] < 0 || arrayNumbers[number] > 9) {
      return false
    }
  } return true
}
function verifyArrayIndex(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers.length != 11) {
      return false
    }
  } return true
}
function verifyRepeatedNumber(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let numberRepeat = 0;
    for (let secondIndex = 0; secondIndex < arrayNumbers.length; secondIndex += 1) {
      if (arrayNumbers[index] === arrayNumbers[secondIndex]) {
        numberRepeat += 1;
      } if ((numberRepeat >= 3)) {
        return false
      }
    }
  } return true
}
function generatePhoneNumber(phoneNumber) {
  if (verifyRepeatedNumber(phoneNumber) === false) {
    return console.log('não é possível gerar um número de telefone com esses valores')
  } if (verifyArrayLength(phoneNumber) === false) {
    return console.log('Array com tamanho incorreto.')
  } if (verifyArrayIndex(phoneNumber) === false) {
    return console.log('não é possível gerar um número de telefone com esses valores')
  }
  allNumber = phoneNumber.join('');
  firstPart = allNumber.slice(0, 2);
  secondPart = allNumber.slice(2, 7);
  thirdPart = allNumber.slice(7, 11);
  numberAdjusted = `(${firstPart}) ${secondPart}-${thirdPart}`;
  return console.log(numberAdjusted)
} generatePhoneNumber([2, 4, 5, 6, 5, 8, 9, 3, 4, 8, 1])
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

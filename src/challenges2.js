// Desafio 10
function techList(techs, name) {
  let devTechnology = { tech: techs, name };
  let devTechs = [];
  for (let index = 0; index <= techs.length; index += 1) {
    if (devTechnology.tech.length === 0) {
      devTechs.push('Vazio!');
    } else {
      devTechnology.tech = techs[index];
      devTechnology.name = name;
      let devTechnologyCopy = Object.assign({}, devTechnology);
      devTechs.push(devTechnologyCopy);
    }
  }
  return devTechs;
}
// Desafio 11
// Organiza os números do telefone
function cellPhoneOrganizer(phoneNumberArrenge) {
  for (let index = 0; index < phoneNumberArrenge.length; index += 1) {
    if (index === 0) {
      phoneNumberArrenge[index] = `(${phoneNumberArrenge[index]}`;
    } else if (index === 1) {
      phoneNumberArrenge[index] = `${phoneNumberArrenge[index]})`;
    } else if (index === 6) {
      phoneNumberArrenge[index] = `${phoneNumberArrenge[index]}-`;
    }
  }
  return phoneNumberArrenge.join('');
}

// Conta os números repetidos
function numbersRepeatCounter(repeatedNumbers) {
  let counter = 0;
  for (let index in repeatedNumbers) {
    for (let index2 in repeatedNumbers) {
      if (repeatedNumbers[index2] === repeatedNumbers[index]) {
        counter += 1;
      }
    }
    if (counter > 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    counter = 0;
  }
  return cellPhoneOrganizer(repeatedNumbers);
}

// Confere se os números atendem a algumas exigências
function numbersCheck(numbers) {
  if (numbers.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return numbersRepeatCounter(numbers);
}

// Gera o número do telefone
function generatePhoneNumber(phoneNumber) {
  return numbersCheck(phoneNumber);
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

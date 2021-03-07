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
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';

  const ddd = `${numbers[0]}${numbers[1]}`;
  let firstPart = '';
  let secondPart = '';

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    if (numbers.filter((number) => number === numbers[index]).length >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    if (index >= 2 && index < 7) {
      firstPart += numbers[index];
    }

    if (index >= 7) {
      secondPart += numbers[index];
    }
  }

  return `(${ddd}) ${firstPart}-${secondPart}`;
}

console.log(generatePhoneNumber([1, 1, 2, 2, 3, 6, 7, 8, 9, 0, 3])); // (12) 34567-8901

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
// Função replace e parâmetros retirados do Stackoverflow(https://stackoverflow.com/questions/30607419/return-only-numbers-from-string) combinado com documentação do MDN
/*
function hydrate(drinks) {
  let glassesOfWater = 0;
  const numbers = drinks.replace(/\D/g, '').split('');

  for (let number of numbers) {
    glassesOfWater += Number(number);
  }

  return `${glassesOfWater} copo${glassesOfWater > 1 ? 's' : ''} de água`;
}
*/

// Refazendo com filter por estar inseguro com "/\D/g"
// Verificação Number.isNaN retirada da doc do MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
function hydrate(drinks) {
  let glassesOfWater = 0;
  const numbers = drinks
    .replace(/ /g, '')
    .split('')
    .filter((character) => !Number.isNaN(Number(character)));

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

// Desafio 10
function techList(tecnologias, nome) {
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }

  let arrayTech = tecnologias.sort();
  let newArray = [];

  for (let index = 0; index < arrayTech.length; index += 1) {
    newArray.push(
      {
        tech: arrayTech[index],
        name: nome,
      },
    );
  }
  return newArray;
}

// Desafio 11
// Exercício corrigido com a ajuda do código do Felipe Flores
// Link: https://github.com/tryber/sd-010-a-project-playground-functions/blob/9cc66910b7a0b4bd1a816105407ad14e7594d1b1/src/challenges2.js
function comparantionsNumbers(contador, numbers, index) {
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index] === numbers[index2]) {
      contador += 1;
    }
  }
  if (contador >= 3) {
    return true;
  }
  return false;
}

function checkingRepetition(numbers) {
  let comparando;
  for (let index = 0; index < numbers.length; index += 1) {
    let contador = 0;
    comparando = comparantionsNumbers(contador, numbers);
  }
  return comparando;
}

function checkingBiggerAndSmaller(numbers) {
  let evaluator = false;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      evaluator = true;
    }
  }
  return evaluator;
}

function generatePhoneNumber(numbers) {
  // seu código aqui
  let numberFone = [];

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (checkingBiggerAndSmaller(numbers) === true || checkingRepetition(numbers) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  numberFone = `${'('}${numbers[0]}${numbers[1]}${')'}`;
  numberFone += `${' '}${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}`;
  numberFone += `${'-'}${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  return numberFone;
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

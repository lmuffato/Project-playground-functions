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
function checkingBiggerAndSmaller(numbers) {
  if (numbers < 0 || numbers > 9) {
    return numbers;
  }
}

function checkingRepetition(array, numbers) {
  let contadorNumbers = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (numbers === array[index]) {
      contadorNumbers += 1;
    }
  }
  return contadorNumbers;
}

function generatePhoneNumber(numbers) {
  // seu código aqui
  let numberFone = [];
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    let numbersArray = checkingBiggerAndSmaller(numbers[index]);
    let checkRepeat = checkingRepetition(numbers, numbersArray);

    if (numbersArray === true || checkRepeat >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
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

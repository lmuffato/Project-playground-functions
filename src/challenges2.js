// Desafio 10
function techList(array, name) {
  let aux = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    let student = {
      tech: array[index],
      name,
    };
    aux[index] = student;
  }
  return aux;
}

// Desafio 11
function lessZeroMoreNine(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return true;
    }
  }
  return false;
}

function tooBigOrTooSmall(array) {
  if (array.length !== 11) {
    return true;
  }
  return false;
}
function conta(array, value) {
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) {
      counter += 1;
    }
  }
  return counter;
}
function doesItRepeat(array) {
  for (let index = 0; index < array.length; index += 1) {
    let counter = conta(array, array[index]);
    if (counter >= 3) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(array) {
  let aux = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  aux += `-${array[7]}${array[8]}${array[9]}${array[10]}`;
  if (tooBigOrTooSmall(array) === true) {
    return 'Array com tamanho incorreto.';
  }
  if (lessZeroMoreNine(array) === true || doesItRepeat(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return aux;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  // generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

// Desafio 10
function techList(list, name) {
  let result;
  if (list.length === 0) {
    result = 'Vazio!';
  } else {
    list = list.sort();
    result = [];
    for (let index = 0; index < list.length; index += 1) {
      let tech = list[index];
      let item = {
        tech,
        name,
      };
      result.push(item);
    }
  }
  return result;
}
// função auxiliar exercico 11
function repeat3Times(array) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result = false;
  for (let index = 0; index < array.length; index += 1) {
    count[array[index]] += 1;
  }
  for (let index = 0; index < count.length; index += 1) {
    if (count[index] >= 3) {
      result = true;
    }
  }
  return result;
}

// função auxiliar exercicio 11
function checkRange(array) {
  let result = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      result = false;
    }
  }
  return result;
}

// função auxiliar exercicio 11
function createPhone(array) {
  return '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
}

// Desafio 11
function generatePhoneNumber(array) {
  let result;
  if (array.length === 11 && checkRange(array) === true && repeat3Times(array) === false) {
    result = createPhone(array);
  } else if (array.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (checkRange(array) === false || repeat3Times(array) === true) {
    result = 'não é possível gerar um número de telefone com esses valores';
  }
  return result;
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

// Desafio 10
function techList(techNames, name) {
  let object = {
    tech: '',
    name: name,
  };
  array = [];

  for (let index = 0; index < techNames.length; index += 1) {
    array.push((object = { tech: techNames[index], name: name }));
  }

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (object.tech[i] < object.tech[j]) {
        let position = object.tech[i];

        object.tech[i] = object[j];
        object.tech[j] = position;
      }
    }
  }

  return array;
}

// Desafio 11
function generatePhoneNumber(phone) {
  let numberOfTimes = 0;
  let trueOrFalse = false;
  let repeticoes = [];

  for (let j = 0; j < phone.length; j += 1) {
    numberOfTimes = 0;
    for (let k = 0; k < phone.length; k += 1) {
      if (phone[k] === phone[j]) {
        numberOfTimes += 1;
      }
    }
    repeticoes.push(numberOfTimes);
  }

  for (let l = 0; l < repeticoes.length; l += 1) {
    if (repeticoes[l] >= 3) {
      trueOrFalse = true;
    } else {
      trueOrFalse = false;
    }
  }

  if (numberOfTimes >= 3) {
    trueOrFalse = true;
  } else {
    trueOrFalse = false;
  }
  for (let i = 0; i < phone.length; i += 1) {
    if (phone[i] < 0 || phone[i] > 9 || trueOrFalse === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (phone.length !== 12) {
      return 'Array com tamanho incorreto.';
    }
  }
  return `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
}

console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10]));

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

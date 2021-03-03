// Desafio 10
function techList(techNames, name) {
  let object = {
    tech: '',
    name: name,
  };
  array = [];

  if (techNames.length == 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < techNames.length; index += 1) {
    array.push((object = { tech: techNames[index], name: name }));
  }

  array.sort(function (x, y) {
    let a = x.tech.toUpperCase();
    let b = y.tech.toUpperCase();

    return a == b ? 0 : a > b ? 1 : -1;
  });

  // Referência das linhas 24 a 29 (Ordenando objetos por uma propriedade string): https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a

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
    if (repeticoes[l] > 2) {
      trueOrFalse = true;
    }
  }

  if (phone.length !== 11 || phone.length === 0) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < phone.length; i += 1) {
    if (phone[i] < 0 || phone[i] > 9 || trueOrFalse === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
}

console.log(generatePhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let trueFalse = true;
  let modAB = Math.abs(lineA - lineB);
  let modAC = Math.abs(lineA - lineC);
  let modBC = Math.abs(lineB - lineC);

  if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
    trueFalse = true;
  } else {
    trueFalse = false;
  }

  if (modAB < lineC && lineC < lineA + lineB) {
    trueFalse = true;
  } else if (modAC < lineB && lineB < lineA + lineC) {
    trueFalse = true;
  } else if (modBC < lineA && lineA < lineB + lineC) {
    trueFalse = true;
  } else {
    trueFalse = false;
  }

  return trueFalse;
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

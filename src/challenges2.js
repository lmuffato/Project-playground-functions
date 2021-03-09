// Desafio 10
function techList(array, name) {
  array = array.sort();
  let techlist = [];
  for (let index = 0; index < array.length; index += 1) {
    techlist.push(
      {
        tech: array[index],
        name,
      },
    );
  }
  if (array.length === 0) {
        return 'Vazio!'
      }
  return techlist;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],
'Lucas'));

// Desafio 11 - 
function generatePhoneNumber(array) {
  let phoneNumber = [];
  let repeatCounter = 0;
  for (let key in array) {
    if (array.length < 10 || array.length > 11) {
      return 'Array com tamanho incorreto.';
    }
    if (array[key] < 0 || array[key] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let key in array) {
    if (array[key] === array[key +=1]) {
     let = repeatCounter += 1;
      if (repeatCounter > 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  for (let key in array) {
    phoneNumber.push(array[key]);
  }

  for (let key in phoneNumber) {
    return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC || lineA > Math.abs(lineB - lineC)) {
    return true;
  } 
  if (lineB < lineA + lineC || lineB > Math.abs(lineA - lineC)) {
      return true;
  }
  if (lineC < lineA + lineB || lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    false;
  }
}
console.log(triangleCheck(10, 14, 8))

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

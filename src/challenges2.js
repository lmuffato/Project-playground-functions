// Desafio 10
function techList(techArray, name) {
  // seu código aqui
  let listOfTechs = [];
  if (techArray.length === 0) {
    listOfTechs = 'Vazio!';    
  } else if (techArray.length === 5){
    for (let index = 0; index < techArray.length; index += 1) {
      let techItem = {
        tech: '',
        name: '',
      };
      techItem.name = name;
      techItem.tech = techArray[index];
      listOfTechs.push(techItem);
    }
  }
  return listOfTechs;
}

// let  technologies = ['zezim', 'huguim', 'luizim'];
// let myName = 'Rogerio';
// console.log(techList(technologies, myName));

// esta função retorna o número vezes aparece o número que mais se repete no arrayNumber

function howManyRepete(arrayNumbers) {
  let count = 0;
  let maxRepetions = 0;
  for (let index1 = 0; index1 < arrayNumbers.length; index1 += 1) {
    for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
      if (arrayNumbers[index1] === arrayNumbers[index2]) {
        count += 1;
      }
    }
    if (count > maxRepetions) {
      maxRepetions = count;
    }
    count = 0;
  }
  return maxRepetions;
}

function testValid(phoneNumberArray) {
  let isValid = true;
  for (let index = 0; index < phoneNumberArray.length; index += 1) {
    if (phoneNumberArray[index] < 0 || phoneNumberArray[index] > 9) {
      isValid = false;
      index = phoneNumberArray.length;
    }
  }
  if (howManyRepete(phoneNumberArray) >= 3) {
    isValid = false;
  }
  return isValid;
}

function mountPhoneNumber(phoneNumberArray) {
  let mensage = '(';
  for (let index = 0; index < phoneNumberArray.length; index += 1) {
    if (index === 2) {
      mensage += ') ';
    }
    if (index === 7) {
      mensage += '-';
    }
    mensage += phoneNumberArray[index];
  }
  return mensage;
}

// Desafio 11
function generatePhoneNumber(phoneNumberArray) {
  // seu código aqui
  let mensage = '';
  if (phoneNumberArray.length !== 11) {
    mensage = 'Array com tamanho incorreto.';
  } else if (testValid(phoneNumberArray)) {
    mensage = mountPhoneNumber(phoneNumberArray);
  } else {
    mensage = 'não é possível gerar um número de telefone com esses valores';
  }
  return mensage;
}

console.log(generatePhoneNumber([3, 0, 4, 8, 9, 4, 7, 2, 1, 2, 0]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return (lineA + lineB) > lineC && Math.abs(lineA - lineB) < lineC;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let count = 0;
  let mensage = '';
  for (let index = 0; index < drinks.length; index += 1) {
    let test = parseInt(drinks[index], 10);
    if (!(Number.isNaN(test))) {
      count += test;
    }
  }
  if (count > 1) {
    mensage = count.toString(10) + ' copos de água';
  } else {
    mensage = count.toString(10) + ' copo de água';
  }
  return mensage;
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

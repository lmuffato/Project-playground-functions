// Desafio 10
function techList(nomeTech, name) {
  let listNomeTechOrdenada = nomeTech.sort();
  let myObjectList = [];
  let myObject = {}

  for (let index = 0; index < listNomeTechOrdenada.length; index += 1) {
    myObject['tech'] = listNomeTechOrdenada[index]
    myObject['name'] = name
    myObjectList[index] = myObject;
    myObject = {};
  }

  if (myObjectList.length > 0) {
    return myObjectList;
  } else {
    return 'Vazio!'
  }
}

// Desafio 11
function generatePhoneNumber(listNumber) {
  let listPhone = [];
  let delimitador = 0;

  if (testListPhone(listNumber) === true) {
    return "não é possível gerar um número de telefone com esses valores";
  } else if (listNumber.length > 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (let index = 0; index < listNumber.length + 4; index += 1) {
      if(index === 0) {
        listPhone[index] = '(';
        delimitador += 1;
      } else if (index === 3) {
        listPhone[index] = ')';
        delimitador += 1;
      } else if (index === 4) {
        listPhone[index] == ' ';
        delimitador += 1;
      } else if (index === 10) {
        listPhone[index] == '-';
        delimitador += 1;
      } else {
        listPhone[index] = listNumber[index - delimitador].toString()
      }
    }
  }

  return listPhone.join('');
}
function testListPhone(listNumber) {
  let numberZero = false;
  let bigNumber = false;
  let repetTree = false;
  let contRepete = 0;
  let numberRepet = 0;

  for (let index = 0; index < listNumber.length; index += 1) {
    if (listNumber[index] < 0) {
      numberZero = true;
    } else if (listNumber[index] > 9) {
      bigNumber = true;
    }
    for (let indexTwo = 0; indexTwo < listNumber.length; indexTwo += 1) {
      if (listNumber[index] === listNumber[indexTwo]) {
        contRepete += 1;
      }
    }
    if (contRepete > repetTree) {
      numberRepet = contRepete;
    }
    contRepete = 0;
  }
  if (numberRepet >= 3) {
    repetTree = true;
  }
  if (numberZero === true || bigNumber === true || repetTree === true) {
    return true
  } else {
    return false
  }
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaBC = lineB + lineC;
  let valueAbs = Math.abs(lineB - lineC);

  if (lineA < somaBC && lineA > valueAbs) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(myDrink) {
  let arrayDrink = myDrink.split(' ');
  let contCopy = 0;
  let myCopyH20 = '';

  for (let index = 0; index < arrayDrink.length; index += 1) {

  }

  if (contCopy > 0) {
    myCopyH20 += contCopy + ' copo de água'
  }

  return myCopyH20;
}

console.log(hydrate('1 cerveja, 2 refrigerante'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

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

  return myObjectList;
}

// Desafio 11
function generatePhoneNumber(listNumber) {
  let listPhone = [];
  let delimitador = 0;

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

  let phone = listPhone;
  return phone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
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

// let object1 = ['Css', 'Adelino junior', 'HTML']
// let object2 = []
// object2.push(object1[1- 1])
// console.log(object2)0
// Desafio 10
function techList(techArray, name) {
  // seu código aqui
  let listOfTechs = [];
  let techItem = {
    tech: '',
    name: '',
  }
  techItem['name'] = name;
  for (let index in techArray) {
    techItem['tech'] = techArray[index];
    listOfTechs.push(techItem);
  }
  return listOfTechs;
}

let  technologies = ['java', 'piriri', 'pororo', 'pururu'];
let myName = 'Rogerio';
console.log(techList(technologies, myName));

function testValid(phoneNumberArray) {
  let count = 0;
  let maxRepetions = 0
  let isValid = true;
  for (let index1 = 0; index1 < phoneNumberArray.length; index1 += 1) {    
    for (let index2 in phoneNumberArray) {
      if (phoneNumberArray[index2] < 0 || phoneNumberArray[index2] > 9) {
        isValid = false;
        index1 = phoneNumberArray.length
        break;
      }
      if (phoneNumberArray[index1] === phoneNumberArray[index2]) {
        count += 1;
      }
    }
    if (count > maxRepetions) {
      maxRepetions = count;
    }
    count = 0;
  }
  if(maxRepetions >= 3){
    isValid = false; 
  }
  return isValid;
}


// Desafio 11
function generatePhoneNumber(phoneNumberArray) {
  // seu código aqui
  let mensage = '(';
  if (phoneNumberArray.length !== 11) {
    mensage = 'Array com tamanho incorreto.';
  } else if (testValid(phoneNumberArray)) {
    for (let index in phoneNumberArray) {
      if (index == 2){
        mensage += ') ';
      }
      if (index == 7){ 
        mensage += '-';
      }
      mensage += phoneNumberArray[index];
    }
  } else {
    mensage = 'não é possível gerar um número de telefone com esses valores'
  }
  return mensage;
}

console.log(generatePhoneNumber([3 , 0 , 4 , 8 , 9 , 4 , 7 , 2 , 1 , 2 , 0 ]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return (lineA + lineB) > lineC && Math.abs(lineA - lineB) < lineC;
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

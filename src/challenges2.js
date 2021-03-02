// Desafio 10
function techList(techArray, name) {
  // seu código aqui
  let listOfTechs = [];
  for (let index in techArray) {
    let techItem = {
      tech: '',
      name: '',
    }
    techItem['name'] = name;
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
function hydrate(drinks) {
  // seu código aqui
  let count = 0;
  for (let index in drinks) {
    switch(drinks[index]){
      case '1': 
        count += 1; 
        break;
      case '2': 
        count += 2; 
        break;
      case '3': 
        count += 3; 
        break;
      case '4': 
        count += 4; 
        break;
      case '5': 
        count += 5; 
        break;
      case '6': 
        count += 6; 
        break;
        case '7': 
        count += 7; 
        break;
      case '8': 
        count += 8; 
        break;
      case '9': 
        count += 9; 
        break;      
    }
  }
  return count.toString() + ' copos de água';
}

console.log(hydrate(' 2 cervejas 9 pingas e 3 caipirinhas'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

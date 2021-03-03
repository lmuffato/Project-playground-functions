// Desafio 10
function techList(techArray, name) {
  let result;
  if (techArray.length > 0) {
    techArray = techArray.sort();
    let objectArray = [];
    for (let index = 0; index < techArray.length; index += 1) {
      let object = { tech: techArray[index], name: name };
      objectArray.push(object);
    }
    result = objectArray;
  } else {
    result = 'Vazio!';
  }
  return result;
}

// Desafio 11
// Definindo funções a serem utilizadas na generatePhoneNumber()
function arrayLengthValidation(array) {
  return array.length === 11;
}

function arrayNumericalValidation(array) {
  for (let index of array) {
    if (array[index] < 0 || array[index] > 9) {
      return false;
    }
  }
  return true;
}

// function arrayRepeatValidation(array) {
//   // Checa se o array tem numeros se repetindo 3 vezes ou mais
//   let numberCount = {};
//   for (let index of array) {
//     if ()
//   }
// }

function generatePhoneNumber(numberArray) {
 

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

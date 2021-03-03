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
      return false
    } else {
      return true
    }
  }
}

function generatePhoneNumber(numberArray) {
 // Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto."

 // Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".



}

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

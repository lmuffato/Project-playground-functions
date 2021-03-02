// Desafio 10
function techList(techArray, name) {
  techArray.sort()
  let arrayOfObjects = []
  if (techArray.length == 0) {
    arrayOfObjects = 'Vazio!'
  }
  for (let index = 0; index < techArray.length; index += 1) {
    arrayOfObjects.push({tech: techArray[index], name: name})
  }
  return arrayOfObjects
}

// Desafio 11
function generatePhoneNumber(array) {

  let phoneNumber = '';
  let countRepeatedNumbers = 0;
  let lastNumber = array[0]
  let firstPart = ''
  let secondPart = ''
  let thirdPart = ''

  if (array.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let index = 0; index < array.length; index += 1) {
    for (indexRepeated = index; indexRepeated < array.length; indexRepeated += 1){
      if (array[index] < 0 || array[index] > 9 || countRepeatedNumbers >= 2) {
        return 'não é possível gerar um número de telefone com esses valores'
      } else if (array[index] == array[indexRepeated]) {
        countRepeatedNumbers += 1

      }
    } 
    countRepeatedNumbers = 0
    phoneNumber += array[index]     
  }
  
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (index < 2) {
      firstPart += phoneNumber[index]
    } else if (index < 7) {
      secondPart += phoneNumber[index]
    } else {
      thirdPart += phoneNumber[index]
    }
  }
  
  phoneNumber = '(' + firstPart + ') ' + secondPart + '-' + thirdPart

  return phoneNumber
  
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

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])) // normal
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, -8, 9, 0, 1])) // valor negativo
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 13, 0, 1])) // valor acima de 9
console.log(generatePhoneNumber([1, 2, 3, 3, 3, 7, 5, 6, 0, 1, 3])) // valor repetido 4x
console.log(generatePhoneNumber([1, 0, 1, 5, 9,8,9,9,6,2,0,2,3,7,6,7,6])) // mais numeros que o esperado
console.log(generatePhoneNumber([1, 0, 1, 5, 6])) // menos numeros que o esperado
console.log(generatePhoneNumber([8, 3, 3, 3, 9, 4, 7, 8, 5, 0, 1])) // valor repetido 3x
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4])) // teste do git - número repetido 3x



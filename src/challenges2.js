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

  let countMax = 1;
  let countElement = 0;
  let phoneNumber = '';
  let firstPart = '';
  let secondPart = '';
  let thirdPart = '';

  if (array.length != 11) {
    return 'Array com tamanho incorreto.'
  }

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    for (indexRepeated = index; indexRepeated < array.length+1; indexRepeated += 1) {
      if (countElement > 2) {
        return 'não é possível gerar um número de telefone com esses valores'
      } else if (array[index] == array[indexRepeated]) {
        countElement += 1
      } else if (countElement > countMax) {
        countMax = countElement
      } 
    }

    countElement = 0
    phoneNumber += array[index]  
  }

  // pesquisei a ideia do contado no site www.stackoverflow.com, segue o link: https://stackoverflow.com/questions/31227687/find-the-most-frequent-item-of-an-array-not-just-strings/31227768
  
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
function triangleCheck(lineA, lineB, lineC) {
  //Um lado tem que ser menor do que a soma dos outros dois e maior do que o valor absoluto da diferença dos dois (math.abs)
  //retorno deve ser booleano
  if (lineA < lineB + lineC && lineA > Math.abs(lineB-lineC) || lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) || lineC < lineA+lineB && lineC > Math.abs(lineA - lineB)) {
    return true
  } else {
    return false
  }

}

// Desafio 13
function hydrate(string) {
  let quantityOfDrinks = string.replace(/\D/g, "")

  let sum = 0
  for (let index = 0; index < quantityOfDrinks.length; index += 1) {
    sum += parseInt(quantityOfDrinks[index])
  }

  if (sum < 2) {
    return sum + ' copo de água'
  } else {
    return sum + ' copos de água'
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
// Desafio 10
function techList(tech, name) {
  if(!tech || tech.length === 0) {
    return 'Vazio!'
  }

  let techsList = tech.sort();
  let list = [];
  
  for(let index in techsList){
    list.push(
      {
        tech: tech[index],
        name,
      }
    )
  }

  return list

}

// Desafio 11
function generatePhoneNumber(numbers) {
  const isLengthValid = numbers.length === 11;
  const isNumbersValid = numbers.find((number) => number < 0 | number > 9) ? false : true;
  const repeatedNumber = numbers.find((element) => element === element );
  const hasThreeRepeatedNumber = numbers.filter(number => number === repeatedNumber).length >= 3 ? true : false;

  if(!isLengthValid) {
    return 'Array com tamanho incorreto.'; 
  }
  
  if (!isNumbersValid | hasThreeRepeatedNumber) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumber = [];
  
  for (let index in numbers) {
    let number = numbers[index];
  
    switch(Number(index)) {
      case 0:
        phoneNumber.push('(', number);
        break;
      case 1:
        phoneNumber.push(number, ')');
        break;
      case 6:
        phoneNumber.push(number, '-');
        break;
      default:
        phoneNumber.push(number);
    }
  }

  return phoneNumber.join('');

}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

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

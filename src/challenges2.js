
function techList(tech, name) {

  tech.sort();
  let techs = [];

if (tech.length === 0){
  return 'Vazio!'
}

for (let indexTech = 0; indexTech < tech.length; indexTech += 1){
    techs.push(
    { 
      tech: tech[indexTech],   
      name: name, 
    });
  }
  return techs
}


numbers = [1, 2, 0, 4, 4, 0, 7, 8, 7, 9, 1];











function generatePhoneNumber(numbers) {

  let telephoneNumber;

  let lowerNumber = Math.min.apply(Math,numbers)
  
  let repeatedNumber = 0;
  
  let comparedNumber = 0;
  
  
  for (let repeatIndex = 0; repeatIndex < numbers.length; repeatIndex += 1){
  
    for (let compareIndex = 0; compareIndex < numbers.length; compareIndex += 1){
  
      if (numbers[repeatIndex] === numbers[compareIndex]){
        repeatedNumber += 1;
      } 
  
      if (repeatedNumber >= 3){
        comparedNumber += 1
      } 
  
     if (compareIndex === (numbers.length-1)){
        repeatedNumber = 0;
      }
    } 
  }
  
  if (numbers.length > 11 || numbers.length < 11){
    telephoneNumber = "Array com tamanho incorreto.";
  } else if (lowerNumber < 0 || comparedNumber > 2){
    telephoneNumber = "não é possível gerar um número de telefone com esses valores";
  } else {
    telephoneNumber = "("
    for (let indexTel = 0; indexTel < 2; indexTel += 1){
    telephoneNumber += numbers[indexTel]
    }
    telephoneNumber += ")"
    for (let indexTel = 2; indexTel < 7; indexTel += 1){
      telephoneNumber += numbers[indexTel]
      }
    telephoneNumber += "-"
  for (let indexTel = 7; indexTel < 11; indexTel += 1){
    telephoneNumber += numbers[indexTel]
      } 
  }

return telephoneNumber
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
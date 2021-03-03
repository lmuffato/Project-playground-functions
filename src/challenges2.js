// Desafio 10
function techList(techsArray, name) {
  if (!techsArray || techsArray.length == 0) {
    return 'Vazio!'
  }
  
  return serailizedTechs = techsArray.sort().map((tech) => {
    return {
      tech: tech,
      nome: name,
    }
  })
}

// Desafio 11
function generatePhoneNumber(phone) {
  let verifyNumberCondition = true;
  
  phone.map((number) => {  
    let numberAppearenceCount = 0;

    for (let index = 0 ; index < phone.length ; index +=1) {
      if (number == phone[index]) {
        numberAppearenceCount += 1;
      }
    }

    if (numberAppearenceCount >= 4 || number > 9 || number < 0) {
      verifyNumberCondition = false;
    }
  })
  
  if (phone.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  
  if (verifyNumberCondition == false){
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`
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

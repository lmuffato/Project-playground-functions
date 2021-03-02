// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  let message;
  
  for (let index in phoneNumber) {
    
    phoneNumber.length = 11;
    if (phoneNumber.length < 11) {
      message = "Array com tamanho incorreto.";
    }
    else if (phoneNumber[index] < 0 || phoneNumber[index] > 9 || phoneNumber[index] === phoneNumber[index].repeat(3)) {
      message = "não é possível gerar um número de telefone com esses valores"; 
    } else {
      message = `(${phoneNumber[0]} ${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
    }
  }
  return message;
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

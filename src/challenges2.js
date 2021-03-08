// Desafio 10
function techList(tech, name) {
  if (tech.length < 1) {
    return 'Vazio!';
  }
  let objects = tech.sort();
  let listTech = [];
  for (let index = 0; index < objects.length; index += 1) {
    listTech[index] = {
      tech: objects[index],
      name,
    };
  } return listTech;
}

// Desafio 11
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let index= 0; index <= phone.length; index += 1) {
    let count = 0
    for (let indexCount = 0; indexCount < phone.length; indexCount += 1) {
      if (phone[index] === phone[indexCount]) {
        count += 1;
      }
    }
    if (phone[index] < 0 || phone[index] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  } return ('(' + phone[0] + phone[1] + ')' + ' ' + phone[2] + phone[3] + phone[4] + phone[5] + phone[6] + '-' + phone[7] + phone[8] + phone[9] + phone[10])
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultado;
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 13
function hydrate(waterQ) {
  let quantity = /\d+/g;
  let number = [];
  let string;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

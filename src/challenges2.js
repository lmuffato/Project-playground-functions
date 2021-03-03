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
function triangleCheck(lineA, lineB, lineC) {
  let verifyLineA = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  let verifyLineB = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);
  let verifyLineC = lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA);

  if (verifyLineA && verifyLineB && verifyLineC) {
    return true;
  }else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let r = /\d+/g; // Este trrecho código foi retirado de https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994

  let numberInTheString = string.match(r);

  let sum = 0;
  
  numberInTheString.map((n) => sum += Number(n));
  
  return `${sum} copos da água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

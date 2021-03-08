// Desafio 10
// Este código fiz com ajuda da Elisa França.
// Usei também o W3School para aprender sobre o sort.
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let tecno = tech.sort();
  let techSortList = [];
  for (let index = 0; index < tecno.length; index += 1) {
    techSortList.push(
      {
        tech: tecno[index],
        name,
      },
    );
  }
  return techSortList;
}
console.log(techList([]));
// Desafio 11
// Tirei uma dúvida no repositório do Edmilson - PullRequest #139 sobre o segundo for utilizado na função o restante eu já havia feito. Então percebi que o primeiro for guarda o número e o segundo compara todos os outros com esse guardado até que todos sejam comparados para que seja verificado se algum deles se repetem mais de 3 vezes e se são maiores que 9 ou menos que 0.
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phoneNumber.length; index += 1) {
    let number = phoneNumber[index];
    let count = 0;
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index2 = 0; index2 < phoneNumber.length; index2 += 1) {
      if (number === phoneNumber[index2]) {
        count += 1;
      }
      if (count >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
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

// Desafio 10
function sorting(a, b) {
  return b.tech > a.tech ? -1 : 1;
}

function techList(numbers, name) {
  let namelist = name;
  let numberlist = [];
  if (numbers.length === 5) {
    for (let index = 0; index < 5; index += 1) {
      let techlist = {
        name: ' ',
        tech: ' ',
      };
      techlist.tech = numbers[index];
      techlist.name = namelist;
      numberlist[index] = techlist;
    }
    return numberlist.sort(sorting);
  } if (numbers.length === 0) {
    return 'vazio!';
  }
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Hernanne'));
// novamente exercicio 10 finalizado com ajuda, por estar tendo mt dificuldade com for

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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

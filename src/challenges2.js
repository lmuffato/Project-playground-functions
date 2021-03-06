// Desafio 10
function techList(techArray, name) {
  let technologies = [];

  tech = techArray.sort();
  for (index = 0; index < techArray.length; index += 1) {
    technologies.push({
      tech: techArray[index],
      name,
    });
    if (techArray.length === 0) {
      return 'Vazio!';
    }
  } 
  return technologies;  
} 
// let tech = ["React", "Jest", "HTML", "CSS", "JavaScript"]
// let name = 'Lucas'
// console.log(techList(tech, name));

// Desafio 11
function generatePhoneNumber(arrayPhone) {
  let counter = 0;
  for (let i = 0; i < counter.length; i+= 1) {
    if (arrayPhone === counter[i]) {
      counter += 1;
    }
  }
  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto.'
  } else if (arrayPhone < 0 || arrayPhone < 9 || counter >= 3) {
    return 'não é possível gerar um número de telefone com esses valores.'
  }
  let numbersPhone = arrayPhone.join("");
  
  let part1 = numbersPhone.slice(0,2)
  let part2 = numbersPhone.slice(2,7)
  let part3 = numbersPhone.slice(7,11)

  let resultPhone = `(${part1}) ${part2}-${part3}`
  return resultPhone;
} 
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
// pesquisei o método no site: "https://www.alura.com.br/artigos/criando-uma-mascara-de-telefone-com-javascript"

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

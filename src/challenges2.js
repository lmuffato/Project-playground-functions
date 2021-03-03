// Desafio 10
//Referência https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/#:~:text=Caso%20voc%C3%AA%20tenha%20um%20array,usar%20o%20m%C3%A9todo%20sort().&text=return%20(a.,nome%20%3E%20b.
function techList(techs, name) {
  if (techs.length == 0) return 'Vazio!';
  return techs.map(el => { return { tech: el, name }; })
              .sort((el, el2) => 
                  el.tech > el2.tech ? 1 : (el2.tech > el.tech ? -1 : 0) );
}

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

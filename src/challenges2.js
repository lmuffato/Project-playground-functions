// Desafio 10
function techList(techName, humanName) {
      if (techName.length < 0){
        console.log('Vazio!');
      }
      let list = [];
      for (let i = 0; i < techName.length; i += 1){
        list.push({name: humanName, tech: techName[i]});
        }
      return list;
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

console.log(techList(['react', 'jest', 'HTML', 'CSS', 'javascript'], 'Matheus'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};



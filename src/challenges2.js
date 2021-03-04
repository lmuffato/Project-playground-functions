// Desafio 10
function techList(techNames, name) {
  // seu código aqui
  techNames.sort()
  let techNameslist = {}
  let technologies = [];
  if (techNames.length === 0) {
    console.log('Vazio!')
  }
  else {

    for (let tech in techNames) {

      techNameslist.tech = (techNames[tech])
      techNameslist.name = name
      technologies.push(techNameslist)

    } console.log(technologies)
  }
} techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Alexandre')


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
}

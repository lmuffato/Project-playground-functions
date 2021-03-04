// Desafio 10
function techList(tech, name) {
  let functionality = {
    tech: tech.sort (),
    techList: []
  }
  if (tech.length === 0) {
     return 'Vazio!'
  }
  for(let index in tech){
     functionality.techList.push ({
        tech: tech[index],
        name: name
    })
  } return functionality.techList
} console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))


let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arr = array.sort(function(a, b){return a-b});
console.log (arr)

// referencia - https://www.w3schools.com/jsref/jsref_sort.asp - Me ajudou a entender como o sorte nũmerico em órdem crescente funciona
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

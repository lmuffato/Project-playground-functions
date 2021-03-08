// Desafio 10
function techList(techs, name) {

  let ret = [];

  for (let index = 0; index < techs.length; index += 1) {
    let obj = {};

    obj.tech = techs[index];
    obj.name = name;

    ret.push(obj);
  }

  ret.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });

  if (techs.length === 0){
    return "Vazio!";
  } else {
    return ret;
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
console.log(techList([], "Teste"));

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

// Desafio 10

function techList(techs, name) {
  techs.sort();
  let techAndNameObj = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techs.length; index += 1) {
    techAndNameObj[index] = {
      tech: techs[index],
      name,
    };
  }
  return techAndNameObj;
} 


/* let nome = "Lucas"
let bbb = ["React", "Jest", "HTML", "CSS", "JavaScript"];
console.log(techList(bbb, nome)); */

// Desafio 11

function wrongRangeCheck(currentValue) {
  (currentValue > 9 || currentValue < 0);
}

function generatePhoneNumber(phoneNumb) {

  if (phoneNumb.length !== 11) {
    return "Array com tamanho incorreto."
  };

  if (phoneNumb.some(wrongRangeCheck) === true) {
    return "não é possível gerar um número de telefone com esses valores"
  }
  
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
} 


let aaa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(aaa));

// Desafio 12
function triangleCheck() {
  // seu código aqui


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

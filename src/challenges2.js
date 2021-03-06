// Desafio 10
function techList(paramTech, paramNome) {
  // seu código aqui
  let arrayTec = [];
  arrayTec = paramTech;          //Passando parametro 1 para array e ordenando
  arrayTec.sort();

  let name = '';
  name = paramNome;              //Passando parametro 2 pra string

  let novoArray = [];               
  let objetoSeparado = {}

  for (let index=0; index<arrayTec.length; index++){

      objetoSeparado = { tech: arrayTec[index], name: name}
      novoArray.push(objetoSeparado);
  }
  
  if (novoArray.length === 0) {
    console.log('Vazio!')}
    else {
  return(console.log(novoArray));
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
} 

generatePhoneNumber();

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

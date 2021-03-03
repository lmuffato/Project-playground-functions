// Desafio 10
function techList(arrayNames, name) {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) ) {
    return true;
  } else if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false; 
  } 
}
// Desafio 13 
// pesuisei o metodo .substring no site https://www.devmedia.com.br/javascript-substring-selecionando-parte-de-uma-string/39232
function hydrate(string) {
  let stringCaracteres = string.substring(0, string.length); // para extrair uma sequência de caracteres de uma string
  let alcool = 0;
  let agua = 0;

  for (let index = 0; index < stringCaracteres.length; index += 1){
    if (stringCaracteres[index] == Number){
      alcool += 1;
    }
  }

  if ( acool > 0){
    agua +=1;
  }

  return console.log(agua) + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

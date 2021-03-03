// Desafio 10
function techList(arrayNames, name) {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let telephoneNumber = [];
  for (index = 0; index < 11; index += 1){
    telephoneNumber.push(Math.ceil(Math.random() * 9));
  }
  

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
  let stringCaracteres = string.split('');         // string.substring(0, string.length); // para extrair uma sequência de caracteres de uma string
  let agua = 0;

  for (let index = 0; index < stringCaracteres.length; index += 1){
    if (stringCaracteres[index] == Number){
      agua += 1;
    }
  }

  if (agua > 0){
    return agua + ' copos de água';
  }
}

  

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

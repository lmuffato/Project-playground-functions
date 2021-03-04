// Desafio 10
function techList(arrayNames, name) {
  if ( arrayNames.length === 0){
    return 'Vazio!'
  } 
  
  let ObjetoTech = []; //criei o bjeto que vai ser retornado
  let arrayOrdenado = arrayNames.sort() //coloquei em ordem 

  for (let index = 0; index < arrayOrdenado.length; index += 1){ // percorri o array e cada indice adicio no meu objetoTech
   ObjetoTech.push({
   tech: arrayNames[index],
   name: name
    })
} 
  return ObjetoTech;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'lucas'));

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let telephoneNumber = [];
 
  if (arrayNumbers.length !== 11){
    return "Array com tamanho incorreto.";
  } else if (arrayNumbers.length < 0){
    return "não é possível gerar um número de telefone com esses valores";
  } else if (arrayNumbers.length > 9){
    return "não é possível gerar um número de telefone com esses valores";
  } 
  }


 //for (index = 0; index < 11; index += 1){
  //  telephoneNumber.push(Math.ceil(Math.random() * 9));
  //}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) ) {
    return true;
  } else if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false; 
  } 
}
// Desafio 13 

function hydrate(string) {
  let stringCaracteres = string.split('');  //transformando a string em array       
  let agua = 0;

  for (let index = 0; index < stringCaracteres.length; index += 1){
    let  converterCaracter = parseInt (stringCaracteres[index]) // A função parseInt() analisa um argumento string e retorna um inteiro
    //if (typeof(converterCaracter) === 'number'){ // O operador typeof retorna uma string indicando o tipo de um operando.
    if (converterCaracter == Number){
      agua += parseInt(stringCaracteres[index]);
    }
  }

  if (agua === 1){
    return agua + ' copo de água';
  } else if ( agua > 1){
    return agua + ' copos de água';
  }
}


console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));



  

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

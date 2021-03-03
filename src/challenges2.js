// Desafio 10
function techList(arrayTechs, name) {
  if(arrayTechs.length === 0){
    return 'Vazio!';
  }
  let arrayNamesSort = arrayTechs.sort(); //ordenando arrayTechs.
  let arrayObjectInsert = []; //criando array vazio que será lotado de objetos e retornado.
  for(let i = 0; i < arrayNamesSort.length; i += 1){
    let objectInsert = {}; //criando objeto vazio que será preenchido e colocado no arrayObjectInsert
    objectInsert['tech'] = arrayNamesSort[i];
    objectInsert['name'] = name;
    // objectInsert[i].tech = arrayNamesSort[i];
    // objectInsert[i].name = name;
    arrayObjectInsert.push(objectInsert);
  }
  return arrayObjectInsert;
}
// array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
// console.log(techList(array, 'stanrley'));

// Desafio 11
function verificaArrayNumber(arrayNumber){//função que retorna false se o arrayNumbe tiver algum inconssitencia
  let count = 0;
  for(let j = 0; j < arrayNumber.length; j += 1){
    let compareNumber = arrayNumber[j];
    for(let i = 0; i < arrayNumber.length; i += 1){
      if(compareNumber === arrayNumber[i]){
        count += 1;
      }
      if(arrayNumber[i] < 0 || arrayNumber[i] > 9){
        return false;
      }
    }
    if(count >= 3){
      return false;
    }else{
      count = 0;
    }
  }
}
function retornaNumeroMontado(arraySeparado){//função que retorna o array em forma de uma unica string.
  let numberReturn = '(';
  for(let i = 0; i < arraySeparado.length; i += 1){
    if(i == 1){
      numberReturn = numberReturn + arraySeparado[i] + ')';
    }else if(i == 6){
      numberReturn = numberReturn + arraySeparado[i] + '-';
    }else{
      numberReturn = numberReturn + arraySeparado[i];
    }
  }
  return numberReturn;
}

function generatePhoneNumber(arrayNumber) {
  if(arrayNumber.length != 11){
    return 'Array com tamanho incorreto.';
  }else if(verificaArrayNumber(arrayNumber) == false){
    return 'não é possível gerar um número de telefone com esses valores';
  }else{
    return retornaNumeroMontado(arrayNumber);
  }
}
// array = [1,2,3,4,5,6,7,-1,9,0,1];
// console.log(generatePhoneNumber(array));

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

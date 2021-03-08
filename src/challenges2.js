// Desafio 10
function techList(array, names){
  if (array.length === 0)
  return 'Vazio!';
  array = array.sort();
  let object = {};
  let lista = [];
for (index = 0; index < array.length; index += 1) {
  object[index] = { tech: array[index], name: names }
  lista[index] = object[index];
}
return lista;
}

// Desafio 11
function generatePhoneNumber (array){
  if (array.length != 11) {return 'Array com tamanho incorreto'}
  let count = 0;
  let phoneNumber;
  for (index = 0; index < array.length; index += 1) {
      if (array[index] < 0 || array[index] >= 10) {return 'não é possível gerar um número de telefone com esses valores'}}     
      for (index1 = 0; index1 < array.length; index1 += 1) {
          count = 0;
          for (index2 = 0; index2 < array.length; index2 += 1) {
              if (array[index1] === array[index2]) {count += 1;}
          }
      }              
      if (count >= 3) {return 'não é possível gerar um número de telefone com esses valores';}
      phoneNumber = ( '(' + array[0] + array[1] + ')' + ' '
                              + array[2] + array[3] + array[4] + array[5] + array[6] + '-' +
                              + array[7] + array[8] + array[9] + array[10]);
return phoneNumber;}

// Desafio 12
function triangleCheck ([lineA, lineB, lineC]) {
  let array = [ lineA, lineB, lineC, lineA, lineB ];
      for (index = 1; index < (array.length - 1); index += 1) {     
      if (array[index] > array[index-1] + array[index+1]) {return false};
      if (array[index] < (Math.abs(array[index-1]) - Math.abs(array[index+1]))){return false};        
  }
  return true;}

// Desafio 13
function hydrate (string){
  let myString = string;
  let toFind = /\d+/g;
  let arrayNumb = (myString).match(toFind);
  let totalNumb = 0
  for (index = 0; index < arrayNumb.length; index += 1 ){
  totalNumb += (arrayNumb[index]*1);
  }
  if (totalNumb == 1) {
  return (totalNumb + ' ' + 'copo de água');}
  else {return (totalNumb + ' ' + 'copos de água')}
  }

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

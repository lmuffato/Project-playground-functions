// Desafio 10
function techList(array,name) {
  let retorno = [];
  let objeto = {
    tech: '',
    name: name
  };
  for(let index in array){
    objeto['tech'] = array[index];
    retorno[index] = objeto;
  }
  return retorno;
}

// Desafio 11
function generatePhoneNumber(array) {
  let i;
  let count = 0;
  let number = '(';
  if(array.length!==11){
    return 'Array com tamanho incorreto.'
  }
  for(let i=0; i<array.length; i+=1){
    if(array[i]>9 || array[i]<0){
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count=0;
    for(let j=1; j<array.length; j+=1){
      if(array[j]===array[i]){
        count += 1;
        if(count>=3){
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }

  }
  var k;
  for(let k=0; k<array.length; k+=1){

    if (k===2){
      number += ') ';
    }
    else if (k===7){
      number += '-';
    }

    number += array[k];

  }
  return number;
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
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));
console.log(generatePhoneNumber([3,1,9,8,5,3,0,1,9,5,8]));

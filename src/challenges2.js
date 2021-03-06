// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (la(lineA, lineB, lineC) && lb(lineA, lineB, lineC) && lc(lineA, lineB, lineC)){
    return true;
  } 
    return false;
}

function la(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs (lineB - lineC)));{
    return true;
  }
}

function lb(lineA, lineB, lineC) {
  if (lineB < lineA + lineC && lineB > Math.abs (lineA - lineC)){
    return true;
  }
}

function lc(lineA, lineB, lineC) {
  if (lineC < lineB + lineA && lineC > Math.abs (lineB - lineA)){
    return true;
  }
}    


// Desafio 13
// resposta feita a partir do video https://www.youtube.com/watch?v=pfkkdzeyx6U
function hydrate(phrase) {
  let reg = /\d+/g;
  let result = phrase.match(reg);
  let answer = 0;
  for (index = 0; index < result.length; index += 1) {
    answer += parseInt(result[index]);
  }
  if (answer === 1){
    console.log(answer + ' copo de água');
  } else {
  console.log(answer + ' copos de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

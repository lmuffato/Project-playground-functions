

let adas = 0; 

function maiorNumInt(numeros) {
  let maiorNum = 0;
  let repeatNum = 0;

  for (let index in numeros) {
    if (numeros[index] >= maiorNum) {
      maiorNum = numeros[index];
    }
  }

  for (let i in numeros) {
    if (numeros[i] === maiorNum) {
      repeatNum += 1;
    }
  }
  return repeatNum;
}

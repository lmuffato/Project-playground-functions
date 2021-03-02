// vamos começar
// Desafio 1
function compareTrue(value1, value2) {
  let returnValue ;
  if (value1 && value2) {
    returnValue = true;
  } else {
    returnValue = false;
  }
  return returnValue;
  // ty jackson
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let totalPoints = 3*wins + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maiorNumber = numbers[0]
  for(let i in numbers) {
  if(numbers[i] > maiorNumber) {
    maiorNumber = numbers[i];
  }
  }
  let repeatTimes = 0;
  for(let i in numbers) {
  if(maiorNumber === numbers[i]) {
  repeatTimes += 1
  }
  }
  return repeatTimes
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let dCat1NMouse = Math.abs(mouse - cat1);
	let dCat2NMouse = Math.abs(mouse - cat2);
	if(dCat1NMouse == dCat2NMouse) {
		return 'os gatos trombam e o rato foge';
	} else if (dCat1NMouse > dCat2NMouse) {
		return 'cat2';
	} else {
		return 'cat1';
	}
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let fizzBuzz = [];
  for(let i in array) {
    let diviFor3 = array[i]%3 == 0;
    let diviFor5 = array[i]%5 == 0;
    if(diviFor3 && diviFor5) {
      fizzBuzz.push('fizzBuzz');
    } else if (diviFor3 && !diviFor5) {
      fizzBuzz.push('fizz');
    } else if (diviFor5 && !diviFor3) {
      fizzBuzz.push('buzz')
    } else {
      fizzBuzz.push('bug!');
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode(word) {
  // seu código aqui
	// criando maneira de manipular o string
	let changeWord = [];
	let encondeWord = '';
	for(let i = 0;i < word.length ; i += 1) {
		changeWord.push(word[i]);
	}
	// modificando string
	for(let i in changeWord) {
		if(changeWord[i] == 'a') {
			changeWord[i] = 1;
		} else if (changeWord[i] == 'e') {
			changeWord[i] = 2;
		} else if (changeWord[i] == 'i') {
			changeWord[i] = 3;
		} else if (changeWord[i] == 'o') {
			changeWord[i] = 4;
		} else if (changeWord[i] == 'u') {
			changeWord[i] = 5;
		}
	}
	// construindo o output do string modificado
	for(let i in changeWord) {
		encondeWord += changeWord[i]
	}
	// retornando o string modificado
	return encondeWord
}
function decode(word) {
  // seu código aqui
    // criando maneira de manipular o string
    let changeWord = [];
    let encondeWord = '';
    for(let i = 0;i < word.length ; i += 1) {
        changeWord.push(word[i]);
    }
    // modificando string
    for(let i in changeWord) {
        if(changeWord[i] == 1) {
            changeWord[i] = 'a';
        } else if (changeWord[i] == 2) {
            changeWord[i] = 'e';
        } else if (changeWord[i] == 3) {
            changeWord[i] = 'i';
        } else if (changeWord[i] == 4) {
            changeWord[i] = 'o';
        } else if (changeWord[i] == 5) {
            changeWord[i] = 'u';
        }
    }
    // construindo o output do string modificado
    for(let i in changeWord) {
        encondeWord += changeWord[i]
    }
    // retornando o string modificado
    return encondeWord
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

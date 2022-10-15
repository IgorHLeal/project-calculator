const result = document.getElementById('result');

function insert(num) {
  let number = result.innerHTML;
  result.innerHTML = number + num;
}

function clean() {
  result.innerHTML = '';
}

function back() {
  let resultFinal = result.innerHTML;
  result.innerHTML = resultFinal.substring(0, resultFinal.length -1);
}

function calcular() {
  let resultFinal = result.innerHTML;

  resultFinal ? result.innerHTML = eval(resultFinal) : result.innerHTML = 0;
  
  /* if(resultFinal) {
    result.innerHTML = eval(resultFinal);
  } else {
    result.innerHTML = "Nada..."
  } */
}


// Referências

// Gustavo Neitzke: https://youtu.be/42TShjXR0m0
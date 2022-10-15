const result = document.getElementById('result');

function insert(num) { result.innerHTML += num }

function clean() { result.innerHTML = '' }

function back() {
  let resultFinal = result.innerHTML;
  result.innerHTML = resultFinal.substring(0, resultFinal.length -1);
}

function calcular() {
  result.innerHTML ? result.innerHTML = eval(result.innerHTML) : result.innerHTML = 0;
}

// Referências

// Gustavo Neitzke: https://youtu.be/42TShjXR0m0
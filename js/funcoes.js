const input = document.querySelector('#inputDisplay');
let operador = '';
let numero1 = 0;
let numero2 = 0;
let numero3 = 0;

function limpar() {
  input.value = '0';
}

function atualizaOperacao(op) {
  operador = op;
  numero1 = parseInt(input.value);
  input.value = '0';
}

function resolver() {
  numero2 = parseInt(input.value);

  switch (operador) {
    case '+':
      numero3 = numero1 + numero2;
      break;
    case '-':
      numero3 = numero1 - numero2;
      break;
    case '*':
      numero3 = numero1 * numero2;
      break;
    case '/':
      numero3 = numero1 / numero2;
      break;
  }

  input.value = numero3;
}

function atualizaDisplay(numero) {
  if (input.value === '0') input.value = numero;
  else input.value = input.value + numero;
}

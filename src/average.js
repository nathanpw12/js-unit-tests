/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// Referências
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round

const average = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    let arrayIisNaN = array[i];
    if (typeof arrayIisNaN === 'string') {
      return undefined;
    }
  }

  if (array.length === 0) {
    return undefined;
  }

  if (Array.isArray(array)) {
    let sum = array.reduce((acc, cur) => acc + cur, 0);
    let averageMath = Math.round(sum / array.length);
    return averageMath;
  }
};

module.exports = average;

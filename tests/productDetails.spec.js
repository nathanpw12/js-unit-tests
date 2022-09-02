const productDetails = require("../src/productDetails");

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

// Teste se productDetails é uma função.
// Teste se o retorno da função é um array.
// Teste se o array retornado pela função contém dois itens dentro.
// Teste se os dois itens dentro do array retornado pela função são objetos.
// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
// Teste se os dois productIds terminam com 123.

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se productDetails é uma função", () => {
    expect(typeof productDetails === "function").toEqual(true);
  });

  it("Verifica se o retorno da função é um array", () => {
    expect(Array.isArray(productDetails("Alcool gel", "Máscara"))).toBe(true);
  });

  it("Verifica se o array retornado pela função contém dois itens dentro", () => {
    expect(productDetails("Alcool gel", "Máscara")).toHaveLength(2);
  });

  it("Verifica se os dois itens dentro do array retornado pela função são objetos.", () => {
    expect(typeof productDetails("Alcool gel", "Máscara") === "object").toBe(
      true
    );
  });

  it("Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.", () => {
    expect(productDetails("Big Mac", "Whopper")).toEqual([
      { name: "Big Mac", details: { productId: "Big Mac123" } },
      { name: "Whopper", details: { productId: "Whopper123" } },
    ]);
  });
  // https://jest-bot.github.io/jest/docs/expect.html#tomatchregexporstring
  it("Verifica se os dois productIds terminam com 123", () => {
    expect(
      productDetails()[0].details.productId &&
        productDetails()[1].details.productId
    ).toMatch("123");
  });
});

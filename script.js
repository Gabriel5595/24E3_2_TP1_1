//TP 1.1
//Crie uma função chamada calcularPrecoTotal que receba dois números como parâmetros: o preço de um produto e a quantidade comprada. A função deve retornar o preço total do produto com base na quantidade.

function calcularPrecoTotal(preco, quantidade) {
    return preco * quantidade;
}

var precoProduto = parseFloat(prompt("Digite o preço do produto:"));
var quantidadeComprada = parseInt(prompt("Digite a quantidade comprada:"));

var precoTotal = calcularPrecoTotal(precoProduto, quantidadeComprada);

alert("O preço total é: R$ " + precoTotal.toFixed(2));
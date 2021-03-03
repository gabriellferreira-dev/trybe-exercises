// 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let custoProduto = 10.50;
let valorVenda = 15.90;
let custoProdutoTotal = null;
let lucro = null;

custoProdutoTotal = custoProduto + (custoProduto * 0.2);

lucro = (valorVenda - custoProdutoTotal) * 1000;

console.log(lucro);
// Informando ao usuário o preço de um produto, considerando desconto se a quantidade comprada for maior que 12.

var qtdMaças = prompt("Digite a quantidade de maças que deseja comprar");
if (qtdMaças < 12) {
    var preço = qtdMaças * 3.50;
    alert("Ao comprar essa quantidade de maças, o valor unitário será de R$3,50 e o valor total da compra é de R$ " +
        preço);
} else {
    var preço = qtdMaças * 2.50;
    alert("Ao comprar essa quantidade de maças, o valor unitário será de R$2,50 e o valor total da compra é de R$ " +
        preço);
}
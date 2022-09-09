
// Calculando a média de 10 números inseridos pelo usuário.
var valores = [];
var i = 0;
var maior = 0;
while (i < 10) {
    var n = parseInt(prompt("Digite um número qualquer: "));
    valores.push(n);
    i++;
}
alert("Os valores digitados foram: " + valores);

var soma = 0;
for (var i = 0; i < valores.length; i++) {
    soma += valores[i];
}
alert("A soma dos valores é: " + soma);
var media = soma / valores.length;
alert("A média dos valores é: " + media);


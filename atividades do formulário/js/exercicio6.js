// Somando 10 valores informados pelo usuário.
var valores = [];
var i = 0;
var maior = 0;
for (var i = 0; i < 10; i++) {
    var n = parseInt(prompt("Digite um número qualquer: "));
    valores.push(n);
}

alert("Os valores digitados foram: " + valores);

var soma = 0;
for (var i = 0; i < valores.length; i++) {
    soma += valores[i];
}
alert("A soma dos valores é: " + soma);

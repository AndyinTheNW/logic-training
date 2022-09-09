// Pedindo para que o usuário digite seis números aleatórios e somando apenas os que são inferiores a 72.
var valores = [];
var i = 0;
var maior = 0;
while (i < 6) {
    var n = parseInt(prompt("Digite um número qualquer: "));
    valores.push(n);
    i++;
}

var soma = 0;
for (var i = 0; i < valores.length; i++) {
    if (valores[i] < 72) {
        soma += valores[i];
    }
}
alert("Os valores digitados foram: " + valores);
alert("A soma dos valores abaixo de 72 é: " + soma);
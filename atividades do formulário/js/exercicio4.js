// Verificando qual o maior número dentre dois números digitados, e analisando se os números são iguais.
var n1 = parseInt(prompt("Digite o primeiro número: "));
var n2 = parseInt(prompt("Digite o segundo número: "));

if (n1 > n2) {
    alert("O primeiro número é maior: " + n1);
} else if (n1 < n2) {
    alert("O segundo número é maior: " + n2);
} else {
    alert("Os números são iguais. " + n1 + " = " + n2);
}
// utilizando as informações dadas pelo usuário para verificar a figura geométrica, sua area ou seu perímetro.
    
var n = parseInt(prompt("Digite o número de lados do polígono: "));
var l = parseInt(prompt("Digite o valor de um dos lados do polígono: "));




if (n == 3) {
    alert("TRIANGULO");
    alert("O valor do perímetro do triangulo é: " + (n * l));
}
if (n == 4) {
    alert("QUADRADO");
    alert("O valor da área do quadrado é: " + (n * l));
}
if (n == 5) {
    alert("PENTAGONO");
    alert("O valor da área do pentagono é: " + (n * l) / 2);
}

if (n < 3) {
    alert("NÃO É UM POLÍGONO");
}

if (n > 5) {
    alert("POLÍGONO NÃO IDENTIFICADO.");
}

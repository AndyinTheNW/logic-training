// Criando uma calculadora no Prompt:

var num1 = prompt("Digite o primeiro número");
var operacao = prompt(
    "Informe a operação que deseja realizar utilizando um dos seguintes sinais: ( + , - , * , / )");
var num2 = prompt("Digite o segundo número");



if (operacao == "+") {
    var resultado = parseInt(num1) + parseInt(num2);
    alert("O resultado da soma é: " + resultado);
}

else if (operacao == "-") {
    var resultado = parseInt(num1) - parseInt(num2);
    alert("O resultado da subtração é: " + resultado);
}

else if (operacao == "*") {
    var resultado = parseInt(num1) * parseInt(num2);
    alert("O resultado da multiplicação é: " + resultado);
}

else if (operacao == "/") {
    var resultado = parseInt(num1) / parseInt(num2);
    alert("O resultado da divisão é: " + resultado);
}

else {
    alert("Operação inválida");
}



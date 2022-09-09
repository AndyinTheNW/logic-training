

// Limitando para que o usuário insira números de 0 a 10;
var n1 = parseInt(prompt("Digite o primeiro número de 0 a 10: "));

if (n1 > 10 || n1 < 0) {
    alert(" O número digitado não está entre 0 e 10.");

    location.reload();
} else {
    var n2 = parseInt(prompt("Digite o segundo número de 0 a 10: "));
    if (n2 > 10 || n2 < 0) {
        alert(" O número digitado não está entre 0 e 10.");

        location.reload();

    } else {
        var n3 = parseInt(prompt("Digite o terceiro número de 0 a 10: "));
        if (n3 > 10 || n3 < 0) {
            alert(" O número digitado não está entre 0 e 10.");
            location.reload();

        } else {
            var n4 = parseInt(prompt("Digite o quarto número de 0 a 10: "));
            if (n4 > 10 || n4 < 0) {
                alert(" O número digitado não está entre 0 e 10.");
                location.reload();

            }
        }
    }
}

// Calculando a média dos valores inseridos pelo usuário.

var media = (n1 + n2 + n3 + n4) / 4;
if (media > 5) {
    alert("Você passou no teste, sua nota foi: " + media);
} else if (media < 5) {
    alert("Você não passou no teste, sua nota foi: " + media);
} else {
    alert("Insira um número válido ");
}





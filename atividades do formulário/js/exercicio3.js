// Verificando qual é o maior e o menor número digitado dentre 3, e analisando se existe algum número repetido.
        var n1 = parseInt(prompt("Digite o primeiro número: "));
        var n2 = parseInt(prompt("Digite o segundo número: "));
        var n3 = parseInt(prompt("Digite o terceiro número: "));

        if (n1 > n2 && n1 > n3) {
            alert("O primeiro número é maior: " + n1);
        } else if (n2 > n1 && n2 > n3) {
            alert("O segundo número é maior: " + n2);
        } else {
            alert("O terceiro número é maior: " + n3);
        }
        if (n1 == n2 || n1 == n3 || n2 == n3) {
            alert("Existe uma repetição " + n1 + " = " + n2 + " = " + n3);
        }
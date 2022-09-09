// Calculando através da idade do usuário as condições obrigatoriedade de votação:

var anoNascimento = prompt("Digite o ano de nascimento");
var anoAtual = new Date().getFullYear();
var idade = anoAtual - anoNascimento;


if (idade >= 16 && idade <= 18) {
    alert("Sua idade é " + idade + " anos: " + "Voto opcional, vote se quiser");
} else if (idade >= 18 && idade <= 69) {
    alert("Sua idade é " + idade + " anos: " +
        " Voto obrigatório, compareça este ano em uma zona eleitoral ou terá que pagar uma multa");
} else if (idade >= 65) {
    alert("Sua idade é " + idade + " anos: " + "Voto opcional, vote se quiser");
} else {
    alert("Sua idade é " + idade + " anos: " + "Não vota, não tem a idade minima permitida para votar");
}
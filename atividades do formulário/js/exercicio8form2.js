// Verificando o vencedor de uma partida de futebol, considerando o placar informado pelo usuário.

var golsCorinthians = prompt("Digite o número de gols marcados pelo Corinthians");
var golsPalmeiras = prompt("Digite o número de gols marcados pelo Palmeiras");
if (golsCorinthians > golsPalmeiras) {
    alert("Infelizmente o Corinthians venceu");
} else if (golsCorinthians < golsPalmeiras) {
    alert("Infelizmente o Palmeiras venceu");
} else {
    alert("Empate");
}
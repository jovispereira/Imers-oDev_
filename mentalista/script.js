var numeroSecreto = parseInt(Math.random() * 11);
//var numeroSecreto = Math.round(Math.random() * 10);
console.log(numeroSecreto);

function chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou, parabéns!!!";
    console.log("O segredo foi descoberto!");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10.";
    console.log("O segredo continua secreto.");
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou! Tente outra vez. Dica: O número secreto é menor que o seu chute.";
    console.log("O segredo continua secreto.");
  } else {
    elementoResultado.innerHTML =
      "Você errou! Tente outra vez. Dica: O número secreto é maior que o seu chute.";
    console.log("O segredo continua secreto.");
  }
}

/* Revisão
- == comparação do valor da variável
- === comparação do valor e tipo da variável (resultado precisa ser EXATAMENTE igual)
- .value = utilizado depois para pegar o valor
- parseInt() = utilizado antes para transformar uma string em número inteiro
- else if () = condição secundária 
- Math.round() = arredondar um número
- Math.random() = sortear número aleatório de 0 a 1 (por isso multiplica-se por 10...) */
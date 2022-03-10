var nome = "João";
var notaPrimeiroBimestre = 9;
var notaSegundoBimestre = 7;
var notaTerceiroBimestre = 7;
var notaQuartoBimestre = 3;
var mediaDasNotas =
	(notaPrimeiroBimestre +
		notaSegundoBimestre +
		notaTerceiroBimestre +
		notaQuartoBimestre) /
	4;
var notaFinal = mediaDasNotas;
var notaFixada = notaFinal.toFixed(1);

console.log("Bem vindo " + nome + ".");
console.log(notaFixada);

if (notaFixada >= 6) {
	console.log("Parabéns, você está aprovado(a)!!!");
} else {
	console.log("Você está reprovado(a).");
}

/* Revisão

- variáveis (camelcase)
- strings (variável do tipo texto)
- console.log (comando para imprimir)
- operações matemáticas (-, +, /, *)
- concatenação (soma de textos)
- toFixed (comando para fixar o número de casas decimais e arredondar) 
- HTML: estrutura
- CSS: estética
- JAVASCRIPT: dinamismo */

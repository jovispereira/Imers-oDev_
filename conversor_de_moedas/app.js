function converterEmReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5.01;
  console.log(valorEmReal);
  var valorEmBitCoin = valorEmDolarNumerico / (42.08 * 1000);
  console.log(valorEmBitCoin);

  //h2
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  //h3
  var elementoValorConvertidoBitCoin = document.getElementById(
    "valorEmBitCoin"
  );
  var valorEmBitCoin = "... e em BitCoin é " + valorEmBitCoin + "BTC.";
  elementoValorConvertidoBitCoin.innerHTML = valorEmBitCoin;
}

function converterEmEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var valorEmEuro = valorEmDolarNumerico * 0.9;
  console.log(valorEmEuro);
  var valorEmBitCoin = valorEmDolarNumerico / (42.08 * 1000);
  console.log(valorEmBitCoin);

  //h2
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Euro é €" + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;

  //h3
  var elementoValorConvertidoBitCoin = document.getElementById(
    "valorEmBitCoin"
  );
  var valorEmBitCoin = "... e em BitCoin é " + valorEmBitCoin + "BTC.";
  elementoValorConvertidoBitCoin.innerHTML = valorEmBitCoin;
}

/* Revisão
- Variáveis do tipo número inteiro (int) e decimal (float)
- .getElementById() = comando para puxar um dado do input do HTML para o JS
- parseFloat() = comando para converter string em float
- .innerHTML = comando para inserir um dado JS dentro do HTML
- Como processar dados do usuário e mostra-lo na página */

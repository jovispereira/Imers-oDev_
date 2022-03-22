function ConverterUSD() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmDolar = valorEmRealNumerico * 0.2;
  console.log(valorEmDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Dolár é $" + valorEmDolar.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;

  var valorEmBitcoin = valorEmRealNumerico * 0.0000047;
  var elementoValorBitcoin = document.getElementById("valorBitcoin");
  var valorBitcoin = "O seu valor em Bitcoin é ₿ " + valorEmBitcoin;
  elementoValorBitcoin.innerHTML = valorBitcoin;
}
function ConverterEUR() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmEuro = valorEmRealNumerico * 0.18;
  console.log(valorEmEuro);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Euro é €" + valorEmEuro.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;

  var valorEmBitcoin = valorEmRealNumerico * 0.0000047;
  var elementoValorBitcoin = document.getElementById("valorBitcoin");
  var valorBitcoin = "O seu valor em Bitcoin é ₿ " + valorEmBitcoin;
  elementoValorBitcoin.innerHTML = valorBitcoin;
}
function ConverterJPY() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmIene = valorEmRealNumerico * 23.19;
  console.log(valorEmIene);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Iene é ¥" + valorEmIene.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;

  var valorEmBitcoin = valorEmRealNumerico * 0.0000047;
  var elementoValorBitcoin = document.getElementById("valorBitcoin");
  var valorBitcoin = "O seu valor em Bitcoin é ₿ " + valorEmBitcoin;
  elementoValorBitcoin.innerHTML = valorBitcoin;
}
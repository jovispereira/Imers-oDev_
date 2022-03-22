function ConvertercK() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmCelsiusNumerico = parseFloat(valor);

  var valorEmKelvin = valorEmCelsiusNumerico + 273.15;
  console.log(valorEmKelvin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado em Kelvin é " + valorEmKelvin.toFixed(2) + " K";
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterkC() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmKelvinNumerico = parseFloat(valor);

  var valorEmCelsius = valorEmKelvinNumerico - 273.15;
  console.log(valorEmCelsius);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado em Celsius é " + valorEmCelsius.toFixed(2) + " °C";
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterfC() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmFahrenheintNumerico = parseFloat(valor);

  var valorEmCelsius = (valorEmFahrenheintNumerico - 32) / 1.8;
  console.log(valorEmCelsius);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado em Celsius é " + valorEmCelsius.toFixed(2) + " °C";
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConvertercF() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmCelsiusNumerico = parseFloat(valor);

  var valorEmFahrenheint = valorEmCelsiusNumerico * 1.8 + 32;
  console.log(valorEmFahrenheint);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado em Fahrenheit é " + valorEmFahrenheint.toFixed(2) + " F";
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterkF() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmKelvinNumerico = parseFloat(valor);

  var valorEmFahrenheint = ((valorEmKelvinNumerico - 273.15) * 9) / 5 + 32;
  console.log(valorEmFahrenheint);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado em Fahrenheit é " + valorEmFahrenheint.toFixed(2) + " F";
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterfK() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmFahrenheintNumerico = parseFloat(valor);

  var valorEmKelvin = ((valorEmFahrenheintNumerico - 32) * 5) / 9 + 273.15;
  console.log(valorEmKelvin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado em Kelvin é " + valorEmKelvin.toFixed(2) + " K";
  elementoValorConvertido.innerHTML = valorConvertido;
}

// função/function: complilado de codigos, varios codigos juntos que realizam uma tarefa
// qualquer numero/valor entre "" está como string (codigo em texto), para altera-lo usar parseFloat para decimal ou parseInt para numeros inteiros
//getElementBy... pega um elemento dentro da linha de codigo no HTML
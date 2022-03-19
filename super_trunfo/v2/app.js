var carta1 = {
  nome: "Bulbasaur",
  imagem:
    "https://mestrepokemon.com/wp-content/uploads/2019/11/Bulbasaur-Pok%C3%A9dex.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem:
    "https://uploads.jovemnerd.com.br/wp-content/uploads/2017/06/vader-1210x544.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

var carta3 = {
  nome: "Shiryu de Dragão",
  imagem:
    "https://ovicio.com.br/wp-content/uploads/2020/09/20200924-shyriu-zodiac-555x555.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    divResultado =
      "<p class='resultado-final'>Você venceu!!! Seu atributo " +
      obtemAtributoSelecionado() +
      " é " +
      cartaJogador.atributos[atributoSelecionado] +
      " e o da máquina é " +
      cartaMaquina.atributos[atributoSelecionado] +
      ". </p>";
  } else if (valorCartaJogador < valorCartaMaquina) {
    divResultado =
      "<p class='resultado-final'>Você perdeu!!! Seu atributo " +
      obtemAtributoSelecionado() +
      " é " +
      cartaJogador.atributos[atributoSelecionado] +
      " e o da máquina é " +
      cartaMaquina.atributos[atributoSelecionado] +
      ". </p>";
  } else {
    divResultado =
      "<p class='resultado-final'>Empatou!!! Seu atributo " +
      obtemAtributoSelecionado() +
      " é " +
      cartaJogador.atributos[atributoSelecionado] +
      " e o da máquina também é " +
      cartaMaquina.atributos[atributoSelecionado] +
      ". </p>";
  }
  elementoResultado.innerHTML = divResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome} </p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

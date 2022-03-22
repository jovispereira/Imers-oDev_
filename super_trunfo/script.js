let carta1 = {
  nome: "Lula Molusco Bonitão",
  imagem: "https://sm.ign.com/ign_br/screenshot/default/1_ssmb.jpg",
  atributos: {
    poder: 636,
    magia: 610,
    velocidade: 663
  }
};
let carta2 = {
  nome: "Felps Anão",
  imagem:
    "https://assets.change.org/photos/4/ez/du/AOEzduGUodJdQmG-1600x900-noPad.jpg?1569718288",
  atributos: {
    poder: 589,
    magia: 714,
    velocidade: 996
  }
};
let carta3 = {
  nome: "Salsicha Ultra Instinct",
  imagem:
    "https://ovicio.com.br/wp-content/uploads/2021/10/20211027-ovicio-multiversus-game-wb-games-shaggy-batman-555x555.jpg",
  atributos: {
    poder: 879,
    magia: 759,
    velocidade: 58
  }
};
let carta4 = {
  nome: "ET Bilu",
  imagem:
    "http://2.bp.blogspot.com/-JPevTjdopd0/TklvSZ6KxpI/AAAAAAAAK14/9iZwkV1iKa4/s1600/et-bilu-3.jpg.jpg",
  atributos: {
    poder: 262,
    magia: 787,
    velocidade: 64
  }
};
let carta5 = {
  nome: "Rick Roll",
  imagem:
    "https://i1.wp.com/finofilipino.org/wp-content/uploads/2019/09/qaSDFQWERFGWERG.jpg",
  atributos: {
    poder: 216,
    magia: 588,
    velocidade: 549
  }
};
let carta6 = {
  nome: "Pato Dançarino",
  imagem: "https://i.ytimg.com/vi/oK6zwt_LoI8/mqdefault.jpg",
  atributos: {
    poder: 276,
    magia: 255,
    velocidade: 109
  }
};
let carta7 = {
  nome: "Stonks Man",
  imagem:
    "https://pbs.twimg.com/profile_images/1234278928262615042/CjonBEkv_400x400.jpg",
  atributos: { poder: 945, magia: 38, velocidade: 162 }
};
let carta8 = {
  nome: "Doge Bonk",
  imagem:
    "https://i.pinimg.com/originals/50/6e/e2/506ee22b38ada4c5390498809fca404f.jpg",
  atributos: { poder: 462, magia: 651, velocidade: 381 }
};
let carta9 = {
  nome: "Picles Rick",
  imagem:
    "https://poltronanerd.com.br/wp-content/uploads/2021/07/Rick-and-Morty-Pickle-Rick-capa.jpg",
  atributos: { poder: 625, magia: 319, velocidade: 530 }
};
let carta10 = {
  nome: "Gigachad",
  imagem:
    "https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg",
  atributos: { poder: 266, magia: 513, velocidade: 729 }
};

let cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];

let baralhoCompleto = cartas
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
let baralhoJogador = [];
let baralhoComputador = [];

let cartaJogador;
let cartaComputador;

function criarBaralhos() {
  let metade = Math.ceil(baralhoCompleto.length / 2);
  baralhoJogador = baralhoCompleto.slice(0, metade);
  baralhoComputador = baralhoCompleto.slice(metade, baralhoCompleto.length);
  exibirNumeroCartas();
  document.getElementById("btnBaralhar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
}

function exibirNumeroCartas() {
  let numeroCartasJogador = baralhoJogador.length;
  let numeroCartasComputador = baralhoComputador.length;
  let numerosCartas = [numeroCartasJogador, numeroCartasComputador];
  let divNumeroCartas = document.getElementById("numeroCartas");
  if (divNumeroCartas.hasChildNodes()) {
    divNumeroCartas.innerHTML = "";
  }
  for (let i = 0; i < 2; i++) {
    let p = document.createElement("p");
    p.innerHTML = "Número de Cartas: " + numerosCartas[i];
    divNumeroCartas.appendChild(p);
  }
}

function sortearCarta() {
  let numeroCartas = baralhoJogador.length;
  let numeroSorteadoJogador = parseInt(Math.random() * numeroCartas);
  numeroCartas = baralhoComputador.length;
  let numeroSorteadoComputador = parseInt(Math.random() * numeroCartas);
  cartaComputador = baralhoComputador[numeroSorteadoComputador];
  cartaJogador = baralhoJogador[numeroSorteadoJogador];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCarta("carta-jogador");
}

function exibirAtributoEscolhido() {
  let radioOpcoes = document.getElementsByName("atributo");
  for (let i = 0; i < radioOpcoes.length; i++) {
    if (radioOpcoes[i].checked) {
      return radioOpcoes[i].value;
    }
  }
}

function darCarta(cartaPerdedora) {
  let cartaRemovida;
  if (baralhoComputador.includes(cartaPerdedora)) {
    let cartaIndex = baralhoComputador.indexOf(cartaPerdedora);
    cartaRemovida = baralhoComputador.splice(cartaIndex, 1);
    baralhoJogador.push(...cartaRemovida);
  } else {
    let cartaIndex = baralhoJogador.indexOf(cartaPerdedora);
    cartaRemovida = baralhoJogador.splice(cartaIndex, 1);
    baralhoComputador.push(...cartaRemovida);
  }
}

function zerouBaralho() {
  let resultado = document.getElementById("resultado");
  let textoResultado = document.createElement("p");
  textoResultado.className = "resultado-final";
  if (baralhoComputador.length === 0) {
    textoResultado.innerHTML = "Você ganhou a Partida!";
  } else {
    textoResultado.innerHTML = "Você perdeu a Partida!";
  }
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnRoundear").disabled = true;
  document.getElementById("btnFinalizar").disabled = false;
  resultado.appendChild(textoResultado);
}

function terminouRodada() {
  console.log(baralhoComputador.length, baralhoJogador.length);
  let resultado = document.getElementById("resultado");
  let atributoEscolhido = exibirAtributoEscolhido();
  let atributoJogador = cartaJogador.atributos[atributoEscolhido];
  let atributoComputador = cartaComputador.atributos[atributoEscolhido];
  let textoResultado = document.createElement("p");
  textoResultado.className = "resultado-final";
  let checou = document.querySelector("input[name='atributo']:checked");
  if (checou == null) {
    textoResultado.innerHTML = "Selecione um dos atributos";
  } else {
    if (atributoJogador > atributoComputador) {
      exibirCarta("carta-computador");
      textoResultado.innerHTML = "Você venceu!";
      darCarta(cartaComputador);
    } else if (atributoJogador < atributoComputador) {
      exibirCarta("carta-computador");
      textoResultado.innerHTML = "Você perdeu!";
      darCarta(cartaJogador);
    } else {
      exibirCarta("carta-computador");
      textoResultado.innerHTML = "Empataram";
    }
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnRoundear").disabled = false;
  }
  resultado.appendChild(textoResultado);
}

function jogar() {
  let resultado = document.getElementById("resultado");
  if (resultado.hasChildNodes()) {
    resultado.innerHTML = "";
  }
  if (baralhoComputador.length === 0 || baralhoJogador.length === 0) {
    zerouBaralho();
  } else {
    terminouRodada();
  }
  exibirNumeroCartas();
}

function exibirCarta(id) {
  let divCarta = document.getElementById(id);
  let moldura = document.createElement("img");
  moldura.src =
    "https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png";
  moldura.style.cssText =
    "width: inherit; height: inherit; position: absolute;";
  moldura.id = "moldura";
  let nome = document.createElement("p");
  nome.className = "carta-subtitle";
  let divStatus = document.createElement("div");
  divStatus.id = "opcoes";
  divStatus.className = "carta-status";
  if (id === "carta-computador") {
    divCarta.style.backgroundImage = `url(${cartaComputador.imagem})`;
    nome.innerHTML = cartaComputador.nome;
    for (let atributo in cartaComputador.atributos) {
      let p = document.createElement("p");
      p.innerHTML =
        atributo + ":  " + cartaComputador.atributos[atributo] + "<br>";
      divStatus.append(p);
    }
  } else {
    divCarta.style.backgroundImage = `url(${cartaJogador.imagem})`;
    nome.innerHTML = cartaJogador.nome;
    for (let atributo in cartaJogador.atributos) {
      let opcao = document.createElement("input");
      opcao.setAttribute("name", "atributo");
      opcao.setAttribute("type", "radio");
      opcao.id = atributo;
      opcao.value = atributo;
      let label = document.createElement("label");
      label.setAttribute("for", atributo);
      label.innerHTML =
        atributo + ":  " + cartaJogador.atributos[atributo] + "<br>";
      divStatus.appendChild(opcao);
      divStatus.appendChild(label);
    }
  }
  divCarta.appendChild(moldura);
  divCarta.appendChild(nome);
  divCarta.appendChild(divStatus);
}

function nextRound() {
  let divJogador = document.getElementById("carta-jogador");
  let divComputador = document.getElementById("carta-computador");
  divJogador.style.backgroundImage = "";
  divComputador.style.backgroundImage = "";
  divJogador.innerHTML =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;" id="moldura">';
  divComputador.innerHTML =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;" id="moldura">';
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("btnRoundear").disabled = true;
  document.getElementById("btnSortear").disabled = false;
}

function fimPartida() {
  nextRound();
  baralhoCompleto = cartas
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnBaralhar").disabled = false;
  document.getElementById("btnFinalizar").disabled = true;
}
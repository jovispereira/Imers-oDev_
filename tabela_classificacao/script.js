var nader = {
  nome: "Lívia",
  avatar:
    "https://1.bp.blogspot.com/-1pl5dc58fCk/YOzr_ZqQAII/AAAAAAADCek/9-A_evxyka8DeV-7pNR8db-5rJ6x0fm3ACLcBGAsYHQ/s1200/oesquadraosuicida2-trailere.jpg",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var amigoImaginario = {
  nome: "João Vitor",
  avatar: "https://art.pixilart.com/74ac09bd28e16b9.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var claudinho = {
  nome: "Cacau",
  avatar:
    "https://http2.mlstatic.com/D_NQ_NP_407115-MLB25195748963_112016-O.jpg",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

nader.pontos = calculaPontos(nader);
amigoImaginario.pontos = calculaPontos(amigoImaginario);
claudinho.pontos = calculaPontos(claudinho);

var jogadores = [nader, amigoImaginario, claudinho];

function botao() {
  var idJogador = document.getElementById("nomeJogador").value;
  var imgJogador = document.getElementById("imgJogador").value;
  if (!idJogador || !imgJogador) {
    alert(
      "Preencha os campos requeridos para seu Avatar. Lembre-se da imagem ser em .jpg ou .png!"
    );
    return;
  }
  if (jogadores.includes(idJogador)) {
    alert("Id de jogador ja criado, crie um novo.");
    document.getElementById("nomeJogador").value = "";
    return;
  } else {
    let jogador = {
      nome: idJogador,
      avatar: imgJogador,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
    jogadores.push(jogador);
    exibeNaTela(jogadores);
    document.getElementById("nomeJogador").value = "";
    document.getElementById("imgJogador").value = "";
  }
}

function exibeNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento +=
      "<tr><td><img class='imgEstilizar' src='" +
      jogadores[i].avatar +
      "'><p>" +
      jogadores[i].nome +
      "</p></td>";
    elemento += "<td class='estil'>" + jogadores[i].vitorias + "</td>";
    elemento += "<td class='estil'>" + jogadores[i].empates + "</td>";
    elemento += "<td class='estil'>" + jogadores[i].derrotas + "</td>";
    elemento += "<td class='estil'>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td class='estil'><button onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td class='estil'><button onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  for (var i = 0; i < jogadores.length; i++) {
    if (!(jogadores[i] === jogador)) {
      jogadores[i].derrotas++;
    }
  }
  jogador.pontos = calculaPontos(jogador);
  exibeNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].empates++;
    jogadores[i].pontos++;
  }
  jogador.pontos = calculaPontos(jogador);
  exibeNaTela(jogadores);
}

function zeraPlayer(i) {
  jogadores.pop();
  exibeNaTela(jogadores);
}

function zerarPontos(jogador) {
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
}

function zeraTudo() {
  for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    zerarPontos(jogador);
  }
  exibeNaTela(jogadores);
}
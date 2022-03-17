var joao = { nome: "João", vitorias: 2, empates: 3, derrotas: 1, pontos: 0 };
var livia = { nome: "Lívia", vitorias: 1, empates: 2, derrotas: 3, pontos: 0 };

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

joao.pontos = calcularPontos(joao);
console.log(joao);

var jogadores = [joao, livia];

function exibeJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadores(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  for (var i = 0; i < jogadores.length; i++) {
    if (!(jogadores[i] === jogador)) {
      jogadores[i].derrotas++;
    }
  }
  jogador.pontos = calcularPontos(jogador);
  exibeJogadores(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].empates++;
    jogadores[i].pontos++;
  }
  jogador.pontos = calcularPontos(jogador);
  exibeJogadores(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadores(jogadores);
}

// não pode haver aspas duplas dentro de asplas duplas no javascript
// += significa soma nele mesmo, ou seja, x = x + y == x += y
// return = devolve uma informação para o código
// definindo objetos {nome: "x", vitorias:y} ou {: valor} = pode ter propriedades de tipos diferentes
// no javascript a ordem de declarar e invocar funções não importa
// utilizar .atributo para chamar um valor específico

var listaFilmeLink = [];
var listaFilmeNome = [];
var ver = false;

function adicionarFilme() {
  var inputFilmeLink = document.querySelector("#filme").value;
  var inputFilmeNome = document.querySelector("#nomeFilme").value;

  if (
    inputFilmeLink.endsWith(".jpg") ||
    inputFilmeLink.endsWith(".JPG") ||
    inputFilmeLink.endsWith(".png")
  ) {
    for (var i = 0; i < listaFilmeLink.length; i++) {
      if (
        inputFilmeLink === listaFilmeLink[i] ||
        inputFilmeNome == listaFilmeNome[i]
      ) {
        //verifica se esta tentando adicionar um filme ja existente (pelo link ou nome)
        ver = true;
      }
    }
    if (ver == true) {
      alert("Adicione uma URL/nome que não tenha adicionado anteriormente"); //se sim aparece essa mensagem
      document.getElementById("filme").value = "";
      document.getElementById("nomeFilme").value = "";
      ver = false;
    } else {
      //caso nao, adiciona o filme e o nome do filme aos proprios arrays
      listaFilmeLink.push(inputFilmeLink);
      listaFilmeNome.push(inputFilmeNome);
    }
    listarFilmesNaTela(listaFilmeLink); //dps roda funcao listarFilmesNaTela()
  } else {
    //se nao for jpg, JPG ou png cai nesse else
    console.error("Endereço de filme inválido!");
    document.querySelector("#filme").value = "";
  }
}

function listarFilmesNaTela() {
  document.querySelector("#containerListaFilmes").innerHTML = "";
  for (i = 0; i < listaFilmeLink.length; i++) {
    //atualiza todos os filmes c o for pelo array[i]
    document.querySelector(
      "#containerListaFilmes"
    ).innerHTML += `<div class="listaFilmes">
    <img src=${listaFilmeLink[i]}>
    <p>${listaFilmeNome[i]}</p>
    </div>`;
  }
  document.querySelector("#filme").value = "";
  document.querySelector("#nomeFilme").value = "";
}

function removerFilme() {
  var inputFilmeLink = document.querySelector("#filme").value;
  var inputFilmeNome = document.querySelector("#nomeFilme").value;

  for (i = 0; i < listaFilmeLink.length; i++) {
    if (
      inputFilmeLink == listaFilmeLink[i] ||
      inputFilmeNome == listaFilmeNome[i]
    ) {
      //checa se tem algum link ou nome igual aos atuais nos inputs
      listaFilmeLink.splice(i, 1); //se tiver, corta o link (imagem) no index i e apenas 1 posicao (a propria)
      listaFilmeNome.splice(i, 1); //se tiver, corta o nome do filme no index i e apenas 1 posicao (a propria)
      listarFilmesNaTela();
      ver = true;
    }
  }
  if (ver == false) {
    //caso nao tenha nenhum nome ou link igual aos atuais no input
    alert("Nao foi possivel excluir este filme, pois ele nao existe");
  }
  document.querySelector("#filme").value = "";
}
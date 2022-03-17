var listaFilme = [];

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("nome-filme").value;

  //validar o valor
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito, nomeFilme);
  } else {
    console.error("Endereço de imagem inválido.");
  }
  document.getElementById("filme").value = "";
  document.getElementById("nome-filme").value = "";

  var listaCompleta = [filmeFavorito, nomeFilme];
  console.log(listaCompleta);
}

function removerFilme() {
  var veri = false;
  var remCampoFilme = document.getElementById("filmeRemovido").value;
  for (i = 0; i < listaFilme.length; i++) {
    if (remCampoFilme == listaFilme[i]) {
      listaFilme.splice(i, 1);
      listaFilmeNome.splice(i, 1);
      listarFilmesNaTela();
      veri = true;
    }
  }
  if (veri == false) {
    alert("Não foi possível excluir este filme, ele não existe!");
  }
  document.getElementById("filmeRemovido").value = "";
}

function listarFilmesNaTela(filmeRecebido, nomeRecebido) {
  var elementoFilme = "<img src=" + filmeRecebido + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilme;

  var elementoNome = nomeRecebido;
  var elementoListaNomes = document.getElementById("listaNomes");
  elementoListaNomes.innerHTML = elementoListaNomes.innerHTML + elementoNome;
}

//Revisão
//- Autocomplete ou preenchimento automático = CTRL + Space
//- Utilizar estrutura de input para obter e imprimir dados no HTML
//- Comando console.error() = Mostra a mensagem em vermelho (error)
//- "" = Valor vazio para limpar placeholder
//- Utilizar .endsWith para eliminar o que não termina com X caracteres
//- Escopo local = bloco da função
//- Parâmetros da função = exemplo(x) onde x é o parâmetro /

var listaFilmes = [
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg",
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/9494-cartaz.jpg",
  "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/176020140528-uau-posters-filmes-ilha-do-medo--shutter-island-.jpg",
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/9494-cartaz.jpg"
];

//não mostrar filmes duplicados usando filter() e indexOf()
const listaFiltrada = listaFilmes.filter(function (ele, pos) {
  return listaFilmes.indexOf(ele) == pos;
});

console.log(listaFiltrada);

for (var i = 0; i < listaFiltrada.length; i++) {
  document.write("<img src=" + listaFiltrada[i] + ">");
}

// Revisão
// - Utilizar arrays
// - Utilizar estrutura de repetição for
// - Escrever direto pelo JavaScript utilizando document.write
// - Utilizar tags no document.write
// - Diferenças entre var, let e const
// - Utilizar const com filter() e index() para remover arrays duplicados
// - Entender forEach (para cada) utilizando funções

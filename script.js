var projetos = [];
projetos.push("https://codepen.io/arthur-santiago/pen/JjMjgbE");
projetos.push("https://codepen.io/arthur-santiago/pen/oNpNVob");
projetos.push("https://codepen.io/arthur-santiago/pen/VwrooEg");
projetos.push("https://codepen.io/arthur-santiago/pen/jOYNOoN");

var projetosImagem = [];
projetosImagem.push("img/aluraflix.png")
projetosImagem.push("img/artflix.png");
projetosImagem.push("img/conversor.png");
projetosImagem.push("img/mentalista.png");

for (var indice = 0; indice < projetos.length; indice++) {
  document.write(
    "<a href=" +
      projetos[indice] +
      "><img src=" +
      projetosImagem[indice] +
      "></a>"
  );
}

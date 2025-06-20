const reel = document.getElementById("eletrotrafo-reel");

fetch("http://localhost:3000/produtos")
  .then((res) => res.json())
  .then((produtos) => {
    produtos.forEach((produto) => {
      const article = document.createElement("article");

      let nome = produto.nome;
      let fabricante = "";

      // Detectar último traço longo ou curto
      const dashLong = "–"; // traço longo (U+2013)
      const dashShort = "-"; // traço curto (U+002D)
      let index = produto.nome.lastIndexOf(dashLong);
      if (index === -1) index = produto.nome.lastIndexOf(dashShort);

      if (index !== -1) {
        nome = produto.nome.slice(0, index).trim();
        fabricante = produto.nome.slice(index + 1).trim();
      }
      article.innerHTML = `
        <a href="${produto.link}" target="_blank" class="image featured">
          <img src="${produto.imagem}" alt="${nome}" />
        </a>
        <header>
          <h3 class="produto-nome">${nome}</h3>
          <p class="fabricante">${fabricante}</p>
        </header>
      `;

      reel.appendChild(article);
    });
  });

document.querySelector(".prev-btn").onclick = () => {
  reel.scrollBy({ left: -320, behavior: "smooth" });
};
document.querySelector(".next-btn").onclick = () => {
  reel.scrollBy({ left: 320, behavior: "smooth" });
};

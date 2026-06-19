const imagens = document.querySelectorAll(".imagem");
const direita = document.getElementById("direita");
const esquerda = document.getElementById("esquerda");
let selecionada = 0;

direita.addEventListener("click", () => {
    imagens[selecionada].classList.remove("selecionada");
    selecionada++;
    if (selecionada >= imagens.length) {
        selecionada = 0;
    }
    imagens[selecionada].classList.add("selecionada");
});

esquerda.addEventListener("click", () => {
    imagens[selecionada].classList.remove("selecionada");
    selecionada--;
    if (selecionada < 0) {
    selecionada = imagens.length - 1;
    }
    imagens[selecionada].classList.add("selecionada");
});

const esse = document.getElementById("esse");
esse.addEventListener("click", () => {
    const resultado = document.getElementById("escolha");
    const escolhido = document.getElementById("escolhido");
    const musica = document.getElementById("musica");
    resultado.style.display = "flex";
    escolhido.src = imagens[selecionada].src;
    musica.play();
    resultado.scrollIntoView({
        behavior: "smooth"
    });
});

const musica = document.getElementById("musica");
musica.volume = 0.2;
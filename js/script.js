// Espera o site carregar antes de fazer qualquer coisa.
document.addEventListener('DOMContentLoaded', () => {

    // Pega o menu que fica escondido na lateral.
    const menuLateral = document.getElementById('menu-lateral');

    // Pega o botão que abre o menu.
    const menuToggle = document.getElementById('menu-toggle');

    // Pega o botão que fecha o menu.
    const closeBtn = document.getElementById('close-btn');

    // Quando apertar no botão de abrir, o menu aparece.
    menuToggle.addEventListener('click', () => {
        menuLateral.classList.add('open');
    });

    // Quando apertar no botão de fechar, o menu some.
    closeBtn.addEventListener('click', () => {
        menuLateral.classList.remove('open');
    });

    // Se o menu estiver aberto e a pessoa clicar fora dele, o menu fecha.
    document.addEventListener('click', (event) => {
        if (
            menuLateral.classList.contains('open') &&
            !menuLateral.contains(event.target) &&
            event.target !== menuToggle
        ) {
            menuLateral.classList.remove('open');
        }
    });
});


// ==================== CARROSSEL ====================

// Parte que move as imagens.
const slides = document.querySelector('#ftrans .slides');

// Todas as imagens do carrossel.
const imagens = document.querySelectorAll('#ftrans .slides img');

// Botão de voltar imagem.
const prevBtn = document.querySelector('#ftrans .prev');

// Botão de avançar imagem.
const nextBtn = document.querySelector('#ftrans .next');

// Número da imagem atual.
let index = 0;

// Quantidade total de imagens.
const total = imagens.length;


// Função que troca a imagem mostrando a certa.
function mostrarSlide(n) {

  // Aqui garante que, se passar da última, volta para a primeira.
  index = (n + total) % total;

  // Move o grupo de imagens para mostrar a imagem certa.
  slides.style.transform = `translateX(-${index * 100}%)`;
}


// Quando clicar no botão de avançar, mostra a próxima imagem.
nextBtn.addEventListener('click', () => {
    mostrarSlide(index + 1);
});

// Quando clicar no botão de voltar, mostra a imagem anterior.
prevBtn.addEventListener('click', () => {
    mostrarSlide(index - 1);
});


// Troca de imagem automática a cada 4 segundos.
setInterval(() => {
    mostrarSlide(index + 1);
}, 4000);

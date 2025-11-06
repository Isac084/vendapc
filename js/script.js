document.addEventListener('DOMContentLoaded', () => {
    const menuLateral = document.getElementById('menu-lateral');
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');

    // Abre menu
    menuToggle.addEventListener('click', () => {
        menuLateral.classList.add('open');
    });

    // Fecha menu
    closeBtn.addEventListener('click', () => {
        menuLateral.classList.remove('open');
    });

    // Fecha menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (menuLateral.classList.contains('open') &&
            !menuLateral.contains(event.target) &&
            event.target !== menuToggle) {
            menuLateral.classList.remove('open');
        }
    });
});

// ===== CARROSSEL =====
const slides = document.querySelector('#ftrans .slides');
const imagens = document.querySelectorAll('#ftrans .slides img');
const prevBtn = document.querySelector('#ftrans .prev');
const nextBtn = document.querySelector('#ftrans .next');

let index = 0;
const total = imagens.length;

// Função que atualiza a posição
function mostrarSlide(n) {
  index = (n + total) % total; // volta ao início no último
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Botões
nextBtn.addEventListener('click', () => mostrarSlide(index + 1));
prevBtn.addEventListener('click', () => mostrarSlide(index - 1));

// Troca automática
setInterval(() => mostrarSlide(index + 1), 4000);

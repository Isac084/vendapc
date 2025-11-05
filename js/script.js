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

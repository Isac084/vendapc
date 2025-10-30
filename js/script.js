<script>
    // Obtendo os elementos
    const menuToggle = document.getElementById("menu-toggle");
    const menuLateral = document.getElementById("menu-lateral");
    const closeBtn = document.getElementById("close-btn");

    // Abrir o menu
    menuToggle.addEventListener("click", () => {
        menuLateral.classList.add("open"); // Adiciona a classe 'open' para abrir
    });

    // Fechar o menu
    closeBtn.addEventListener("click", () => {
        menuLateral.classList.remove("open"); // Remove a classe 'open' para fechar
    });
</script>

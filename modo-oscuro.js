const switchModoOscuro = document.getElementById("flexSwitchCheckDefault");

switchModoOscuro.addEventListener("change", function () {
    document.documentElement.classList.toggle("modo-oscuro", this.checked);
});
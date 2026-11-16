const switchModoOscuro = document.getElementById("flexSwitchCheckDefault");

if (localStorage.getItem("modo") === "oscuro") {
    document.documentElement.classList.add("modo-oscuro");
    switchModoOscuro.checked = true;
}

switchModoOscuro.addEventListener("change", function () {
    document.documentElement.classList.toggle("modo-oscuro", this.checked);
    localStorage.setItem("modo", this.checked ? "oscuro" : "claro");
});
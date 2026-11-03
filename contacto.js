const formulario = document.getElementById("form-contacto");
const estado = document.getElementById("estado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtén los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;
    const telefono = document.getElementById("telefono").value;

    if (nombre === "" || correo === "" || mensaje === "" || telefono === "") {
        estado.textContent = "Por favor, completa todos los campos del formulario.";
        estado.style.color = "red";
        return;
    }

    estado.textContent = "¡Formulario enviado con éxito!";
    estado.style.color = "green";

});
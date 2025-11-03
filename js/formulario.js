$(document).ready(function () {
    $("#formContacto").submit(function (e) {
        e.preventDefault();

        // Limpiar errores anteriores
        $("#errorNombre, #errorEmail, #errorMensaje").text("");

        const nombre = $("#nombre").val().trim();
        const email = $("#email").val().trim();
        const mensaje = $("#mensaje").val().trim();

        let hayError = false;

        // Validar nombre: mínimo 2 letras, sin números
        const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
        if (!nombreRegex.test(nombre)) {
            $("#errorNombre").text("Ingresá un nombre válido (mínimo 2 letras y sin números).");
            hayError = true;
        }

        // Validar email con regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $("#errorEmail").text("Ingresá un email válido.");
            hayError = true;
        }

        // Validar mensaje
        if (mensaje.length === 0) {
            $("#errorMensaje").text("Por favor completá el mensaje.");
            hayError = true;
        }

        if (hayError) return;

        // Mostrar mensaje de éxito
        $("#submitMensaje")
            .removeClass("d-none")
            .hide()
            .fadeIn();

        // Limpiar campos
        $("#nombre, #email, #mensaje").val("");
    });
});

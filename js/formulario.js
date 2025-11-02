$(document).ready(function () {
  $("#formContacto").submit(function (e) {
    e.preventDefault();

    const nombre = $("#nombre").val().trim();
    const email = $("#email").val().trim();
    const mensaje = $("#mensaje").val().trim();

    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor completá todos los campos");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Ingresá un email válido");
      return;
    }

    $("#submitMensaje").removeClass("d-none").hide().fadeIn();
    $("#nombre").val("");
    $("#email").val("");
    $("#mensaje").val("");
  });
});

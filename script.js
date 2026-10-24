
function mostrar(numero) {

    let botones = document.querySelectorAll("button");
    let contenidos = document.querySelectorAll(".contenido");

    // Ocultar todos los contenidos
    for (let i = 0; i < contenidos.length; i++) {
        contenidos[i].style.display = "none";
        botones[i].classList.remove("activo");
    }

    // Mostrar el contenido seleccionado
    contenidos[numero].style.display = "block";

    // Marcar el botón seleccionado
    botones[numero].classList.add("activo");

}

// Obtener elementos del HTML

const comentarioInput = document.getElementById("comentarioInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaComentarios = document.getElementById("listaComentarios");

// agregar comentarios

agregarBtn.addEventListener("click", function () {

    // Guardar texto del comentario
    const textoComentario = comentarioInput.value;

    // Validar que no esté vacío
    if (textoComentario.trim() === "") {
        alert("Por favor escribe un comentario.");
        return;
    }

    // Crear contenedor del comentario
    const comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");

    // Crear texto del comentario
    const comentarioTexto = document.createElement("p");
    comentarioTexto.textContent = textoComentario;

    // Crear botón eliminar
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.classList.add("eliminarBtn");

    // eliminar comentario
    eliminarBtn.addEventListener("click", function () {
        comentarioDiv.remove();
    });

    // Agregar elementos al comentario
    comentarioDiv.appendChild(comentarioTexto);
    comentarioDiv.appendChild(eliminarBtn);

    // Mostrar comentario en pantalla
    listaComentarios.appendChild(comentarioDiv);

    // Limpiar textarea
    comentarioInput.value = "";
});
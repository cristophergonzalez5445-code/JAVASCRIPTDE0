// Obtener elementos del DOM

const passwordInput = document.getElementById("password");
const copiarBtn = document.getElementById("copiarBtn");

const longitudInput = document.getElementById("longitud");
const longitudValor = document.getElementById("longitudValor");

const mayusculas = document.getElementById("mayusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const generarBtn = document.getElementById("generarBtn");

const nivelSeguridad = document.getElementById("nivelSeguridad");

// Caracteres disponibles

const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numerosString = "0123456789";
const simbolosString = "!@#$%^&*()_+[]{}<>?/";

// Mostrar longitud en pantalla

longitudInput.addEventListener("input", () => {
    longitudValor.textContent = longitudInput.value;
});

// Función para generar contraseña

function generarPassword() {

    let caracteres = "";

    if (mayusculas.checked) {
        caracteres += letrasMayusculas;
    }

    if (minusculas.checked) {
        caracteres += letrasMinusculas;
    }

    if (numeros.checked) {
        caracteres += numerosString;
    }

    if (simbolos.checked) {
        caracteres += simbolosString;
    }

    // Validación
    if (caracteres === "") {
        alert("Selecciona al menos una opción.");
        return;
    }

    let password = "";

    for (let i = 0; i < longitudInput.value; i++) {

        const randomIndex = Math.floor(Math.random() * caracteres.length);

        password += caracteres[randomIndex];
    }

    passwordInput.value = password;

    verificarSeguridad(password);
}

// Verificar seguridad

function verificarSeguridad(password) {

    if (password.length >= 20) {
        nivelSeguridad.textContent = "FUERTE";
    } else if (password.length >= 12) {
        nivelSeguridad.textContent = "MEDIA";
    } else {
        nivelSeguridad.textContent = "DÉBIL";
    }
}

// Generar contraseña
generarBtn.addEventListener("click", generarPassword);

// Copiar contraseña

copiarBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(passwordInput.value);

    alert("Contraseña copiada.");
});
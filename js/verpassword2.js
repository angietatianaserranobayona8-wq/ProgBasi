const password = document.getElementById("password");
const toggle_password = document.getElementById("toggle_password");

const confirmPassword = document.getElementById("confirm_password");
const toggle_confirm = document.getElementById("toggle_confirm");

const btn_validar = document.getElementById("btn_validar");

// Función para alternar visibilidad
function toggleVisibility(input, icon) {
    const type = input.type === "password" ? "text" : "password";
    input.type = type;
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
}

toggle_password.addEventListener("click", () => toggleVisibility(password, toggle_password));
toggle_confirm.addEventListener("click", () => toggleVisibility(confirmPassword, toggle_confirm));

// Función de validación de igualdad
function checkPasswords() {
    if (password.value && confirmPassword.value) {
        if (password.value === confirmPassword.value) {
            password.style.border = "2px solid green";
            confirmPassword.style.border = "2px solid green";
            btn_validar.disabled = false;
        } else {
            password.style.border = "2px solid red";
            confirmPassword.style.border = "2px solid red";
            btn_validar.disabled = true;
        }
    } else {
        // Si falta alguno, desactivar botón y quitar colores
        password.style.border = "1px solid #ccc";
        confirmPassword.style.border = "1px solid #ccc";
        btn_validar.disabled = true;
    }
}

// Escuchar cambios en ambos inputs (tiempo real)
password.addEventListener("input", checkPasswords);
confirmPassword.addEventListener("input", checkPasswords);

// Validación completa
function validar() {
    // Reconfirmar que sean iguales
    if (password.value !== confirmPassword.value) {
        Swal.fire("Error", "Las contraseñas no coinciden.", "error");
        return;
    }

    let pwd = password.value;
    let lowercase = /[a-z]/.test(pwd);
    let uppercase = /[A-Z]/.test(pwd);
    let number = /\d/.test(pwd);
    let specialchar = /[\W_]/.test(pwd);

    if (pwd.length < 8) {
        Swal.fire("Error", "La contraseña debe tener al menos 8 caracteres.", "error");
        return;
    }

    if (specialchar && lowercase && uppercase && number) {
        Swal.fire("Correcto", "La contraseña cumple con las condiciones.", "success");
    } else {
        Swal.fire({
            icon: "error",
            title: "Contraseña Inválida",
            html: `
                <ul style="text-align:left; margin-left:20px;">
                    <li>${number ? "✅" : "❌"} Al menos un número</li>
                    <li>${lowercase ? "✅" : "❌"} Al menos una minúscula</li>
                    <li>${uppercase ? "✅" : "❌"} Al menos una mayúscula</li>
                    <li>${specialchar ? "✅" : "❌"} Al menos un caracter especial</li>
                </ul>
            `
        });
    }
}
alert ("bienvenid@s")

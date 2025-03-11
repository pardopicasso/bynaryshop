function showRegisterForm() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("register-section").style.display = "block";
}

// Función para registrar un nuevo usuario
function register() {
    const name = document.getElementById("register-name").value;
    const lastname = document.getElementById("register-lastname").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    if (users[email]) {
        alert("El correo electrónico ya está registrado");
        return;
    }

    // Simulamos la creación de un nuevo usuario con rol de "comprador"
    users[email] = { password: password, role: "comprador" };
    alert("Registro exitoso! Ahora puedes iniciar sesión.");
    showLoginForm();
}


const users = {
    "seller456": { password: "Intro123", role: "comprador" },
    "dancabello": { password: "J5*asdRD.s", role: "vendedor" },
    "root": { password: "dochouse", role: "admin" }

};
function showLoginForm() {
    document.getElementById("register-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
}


// Función para mostrar la sección correcta según el rol
function showSection(role) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("register-section").style.display = "none";

    if (role === "comprador") {
        document.getElementById("product-section").style.display = "block";
        document.getElementById("cart-section").style.display = "block";
        loadProducts();
    } else if (role === "vendedor") {
        document.getElementById("seller-section").style.display = "block";
    } else if (role === "admin") {
        document.getElementById("admin-section").style.display = "block";
    }
}

// Function to load products (dummy implementation)
function loadProducts() {
    console.log("Loading products...");
}

function redirectToPaginaPrincipal() {
    window.location.href = "pagina_principal.html";
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        alert("Inicio de sesión exitoso!");
        // Almacenar el rol del usuario en localStorage
        localStorage.setItem("userRole", users[username].role);
        redirectToPaginaPrincipal();
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
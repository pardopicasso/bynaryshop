let products = [
    { name: "Laptop", price: 1200, image: "https://m.media-amazon.com/images/I/61x4B2uu6pL._AC_UF894,1000_QL80_.jpg" },
    { name: "Teléfono", price: 800, image: " https://images4.kabum.com.br/produtos/fotos/530574/kit-smartphone-samsung-galaxy-a15-5g-256gb-8gb-azul-claro-sm-a156mlbszto-smartwatch-samsung-galaxy-fit3-53mm-resistencia-a-agua-grafite_1708698029_g.jpg" },
    { name: "Calculadora", price: 500, image: "https://m.media-amazon.com/images/I/71mCfR49bYL.jpg"},
    { name: "New Balance 574", price: 600, image: "https://i.ebayimg.com/images/g/tWsAAOSwd-9jPzsc/s-l640.png"},
    { name: "Blue jeans", price: 100, image:"https://www.shutterstock.com/image-photo/fashion-trendy-womens-jeans-isolated-600nw-2466839305.jpg"},
    { name: "Termo Contigo", price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6T-Gy7XZg4vxgwtJ89j-AKdtF05Zd5eDdjg&s"},
    { name: "Cuaderno Norma", price: 50, image: "https://www.adosa.com.mx/media/catalog/product/cache/4db89bde2062a3745aaded91f69a9032/1/3/139543-1717570022_1.jpg"},
    { name: "Licuadora", price: 1000, image: "https://212global.com/wp-content/uploads/2025/02/6604c1076b13605a2115aa63_thumbnail.jpg"},
    { name: "Taladro", price: 900, image: "https://www.totaltools.com.ve/wp-content/uploads/2020/10/UTD2051026-2.jpg"},
    { name: "Pulseras Pandora", price: 600, image: "https://www.joyeriasanchez.com/178422-large_default/pulsera-pandora-cadena-cubana-pave-593008c01.jpg"},
    { name: "Harina de Almendras", price: 150, image: "https://labatata.com.ve/2877-large_default/harina-de-almendra-blue-diamond-136k.jpg"},
    { name: "Bicicleta", price: 2500, image: "https://m.media-amazon.com/images/I/71tdAQayFFS.jpg"},
    { name: "Métodos de Graficación Pedro Alson", price: 80, image: "https://m.media-amazon.com/images/I/41RpymzBlTL._AC_UF1000,1000_QL80_.jpg"},

];

// Carrito de compras
let cart = [];

// Función para cargar los productos
function loadProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}')">Añadir al carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "comprador") {
        document.getElementById("product-section").style.display = "block";
        document.getElementById("cart-section").style.display = "block";
        loadProducts();
    } else if (userRole === "vendedor") {
        document.getElementById("seller-section").style.display = "block";
    } else if (userRole === "admin") {
        document.getElementById("admin-section").style.display = "block";
    }
});

// Función para añadir productos al carrito
function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    cart.push(product);
    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
}

function buyProducts() {
    if (cart.length === 0) {
        alert("El carrito está vacío. Añade productos antes de comprar.");
        return;
    }

    let total = cart.reduce((sum, product) => sum + product.price, 0);
    alert(`Compra realizada con éxito! Total: $${total}`);
    cart = []; // Vaciamos el carrito después de la compra
    updateCart(); // Actualizamos la vista del carrito
}


// Función para añadir un producto (vendedor)
function addProduct() {
    const name = document.getElementById("product-name").value;
    const price = parseFloat(document.getElementById("product-price").value);
    const image = document.getElementById("product-image").value;

    products.push({ name, price, image });
    alert("Producto añadido!");
}

// Función para eliminar un usuario (admin)
function deleteUser() {
    alert("Usuario eliminado");
}

// Función para eliminar un producto (admin)
function deleteProduct() {
    alert("Producto eliminado");

}
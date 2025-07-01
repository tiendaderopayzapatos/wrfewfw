// Script para mostrar y manejar el carrito

const contenedor = document.getElementById('contenedor-carrito');
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
  contenedor.innerHTML = '';

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p>Tu carrito está vacío</p>';
    return;
  }

  carrito.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'producto';
    card.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" />
      <h3>${item.nombre}</h3>
      <p>Precio: $${item.precio}</p>
      <button onclick="eliminarProducto(${index})">Eliminar</button>
    `;
    contenedor.appendChild(card);
  });
}

// Elimina un producto del carrito por índice
window.eliminarProducto = function (index) {
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
};

mostrarCarrito();

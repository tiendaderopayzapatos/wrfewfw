// Importamos los productos desde productos.js
import productos from './productos.js';

// Seleccionamos elementos del DOM
const contenedor = document.getElementById('contenedor-productos');
const filtroCategoria = document.getElementById('filtro-categoria');
const filtroTalla = document.getElementById('filtro-talla');
const busqueda = document.getElementById('busqueda');

// Mostramos solo 20 productos aleatorios al inicio
function mostrarProductosIniciales() {
  // Mezclamos aleatoriamente los productos
  const aleatorios = productos.sort(() => 0.5 - Math.random()).slice(0, 20);
  renderizarProductos(aleatorios);
}

// Función que crea la vista HTML de los productos
function renderizarProductos(lista) {
  contenedor.innerHTML = ''; // Limpiamos el contenedor
  lista.forEach(p => {
    const card = document.createElement('div');
    card.className = 'producto';
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" />
      <h3>${p.nombre}</h3>
      <p>Precio: $${p.precio}</p>
      <p>Tallas: ${p.tallas.join(', ')}</p>
      <button onclick="agregarAlCarrito('${p.nombre}', '${p.imagen}', ${p.precio})">Agregar al carrito</button>
    `;
    contenedor.appendChild(card);
  });
}

// Esta función filtra los productos por categoría, talla o texto buscado
function filtrarProductos() {
  const categoria = filtroCategoria.value;
  const talla = filtroTalla.value;
  const texto = busqueda.value.toLowerCase();

  // Filtramos según los criterios seleccionados
  const filtrados = productos.filter(p => {
    const coincideCategoria = !categoria || p.categoria === categoria;
    const coincideTalla = !talla || p.tallas.includes(talla);
    const coincideTexto = p.nombre.toLowerCase().includes(texto);
    return coincideCategoria && coincideTalla && coincideTexto;
  });

  renderizarProductos(filtrados);
}

// Agrega un producto al carrito guardándolo en localStorage
window.agregarAlCarrito = function(nombre, imagen, precio) {
  const item = { nombre, imagen, precio };
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(item);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert('Producto agregado al carrito');
};

// Eventos para actualizar productos cuando cambian filtros
filtroCategoria.addEventListener('change', filtrarProductos);
filtroTalla.addEventListener('change', filtrarProductos);
busqueda.addEventListener('input', filtrarProductos);

// Mostrar productos al cargar la página
mostrarProductosIniciales();

const productos = [
  {
      id: 1,
      nombre: 'Cuaderno',
      precio: 100,
      imagen:
          'img/book.png',
      descripcion: "Esta es la descripción del producto 1"
  },
  {
      id: 2,
      nombre: 'Producto 2',
      precio: 200,
      imagen:
          'img/light.png',
      descripcion: "Esta es la descripción del producto 2"
  },
  {
      id: 3,
      nombre: 'Producto 3',
      precio: 300,
      imagen:
          'img/pc.png',
      descripcion: "Esta es la descripción del producto 3"
  },
];

const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".carrito");

cartBtn.addEventListener("click", function() {
  cart.classList.toggle("active");
});


const carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  mostrarCarrito()
}

function mostrarCarrito() {
const carritoEl = document.querySelector('.carrito');
const totalCarritoEl = document.querySelector('.total-carrito');
const tbodyEl = document.querySelector('.carrito tbody');
const cantidadCarritoEl = document.querySelector('.cantidad-carrito');
tbodyEl.innerHTML = '';
totalCarritoEl.innerText = '';
cantidadCarritoEl.innerText = carrito.length;

if (carrito.length === 0) {
    carritoEl.classList.remove('active');
    return;
}

carritoEl.classList.add('active');

carrito.forEach((producto) => {
    const trEl = document.createElement('tr');

    const nombreEl = document.createElement('td');
    nombreEl.innerText = producto.nombre;
    trEl.appendChild(nombreEl);

    const precioEl = document.createElement('td');
    precioEl.innerText = producto.precio;
    trEl.appendChild(precioEl);

    const eliminarEl = document.createElement('td');
    const eliminarBtnEl = document.createElement('button');
    eliminarBtnEl.innerText = 'Eliminar';
    eliminarBtnEl.addEventListener('click', () => {
        eliminarDelCarrito(producto.id);
    });
    eliminarEl.appendChild(eliminarBtnEl);
    trEl.appendChild(eliminarEl);

    tbodyEl.appendChild(trEl);
});

const total = carrito.reduce((total, producto) => total + producto.precio, 0);
totalCarritoEl.innerText = `Total a pagar: ${total}€`;
}

function eliminarDelCarrito(id) {
const index = carrito.findIndex((producto) => producto.id === id);
carrito.splice(index, 1);
mostrarCarrito();
}

function inicializarProductos() {
const gridProductosEl = document.querySelector('.grid-productos');
productos.forEach((producto) => {
  const productoEl = document.createElement('div');
  productoEl.classList.add('producto');
  productoEl.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <p class="descripcion">${producto.descripcion}</p>
      <br/>
      <p class="precio">$${producto.precio}</p>
      <button class="btn-agregar" data-id="${producto.id}">
          Agregar al carrito
      </button>
  `;
  gridProductosEl.appendChild(productoEl);

  const btnAgregarEl = productoEl.querySelector('.btn-agregar');
  btnAgregarEl.addEventListener('click', () => {
      const id = parseInt(btnAgregarEl.getAttribute('data-id'));
      const producto = productos.find((producto) => producto.id === id);
      agregarAlCarrito(producto);
  });
});
}

inicializarProductos();

const url = "data.json";
const container = document.getElementById("productos");

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(producto => {
      const divProducto = document.createElement("div");
      divProducto.classList.add("producto");
      divProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span class="precio">${producto.precio} €</span>
      `;
      container.appendChild(divProducto);
    });
  })
  .catch(error => console.log(error));

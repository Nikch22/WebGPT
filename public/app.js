const productos = [
  {
      id: 1,
      nombre: 'Libro',
      precio: 10,
      imagen:
          'img/book.png',
      descripcion: "'Fuerzas invisibles' es un thriller apasionante que le mantendrá en vilo de principio a fin. Cuando una serie de sucesos inexplicables ocurren en una pequeña ciudad, un grupo de héroes improbables debe unirse para descubrir la verdad que se esconde tras las misteriosas fuerzas en juego. Con giros inesperados y acción trepidante, este libro es una lectura obligada para cualquiera que ame un buen misterio con un toque sobrenatural. No te pierdas este emocionante viaje."
  },
  {
      id: 2,
      nombre: 'Focos',
      precio: 200,
      imagen:
          'img/light.png',
      descripcion: "Presentamos nuestros nuevos focos LED: ¡el complemento perfecto para cualquier hogar o negocio! Con un diseño energético, estos focos le ayudarán a ahorrar dinero en la factura de la luz al tiempo que proporcionan una luz brillante y duradera. Además, su diseño elegante y moderno añadirá un toque de elegancia a cualquier espacio. Tanto si busca resaltar obras de arte como crear un ambiente acogedor, nuestros focos LED son la solución perfecta. No pierda esta oportunidad de actualizar su iluminación y ahorrar dinero en el proceso."
  },
  {
      id: 3,
      nombre: 'Ordenador',
      precio: 500,
      imagen:
          'img/pc.png',
      descripcion: "Presentamos nuestro nuevo PC de última generación: la máquina definitiva para todas sus necesidades informáticas. Con velocidades de procesamiento ultrarrápidas, gráficos de alta calidad y un disco duro espacioso, este PC podrá con todo, desde los juegos hasta la edición de vídeo profesional. Además, su diseño elegante y moderno lo convertirá en un elegante complemento para cualquier escritorio. Ya sea un jugador, un estudiante o un profesional, nuestro nuevo PC es la elección perfecta para cualquiera que busque rendimiento y fiabilidad de primera línea. Actualice hoy mismo su experiencia informática con nuestro nuevo PC."
  },
  {
    id: 4,
    nombre: 'Consola',
    precio: 350,
    imagen:
        'img/console.png',
    descripcion: "Presentamos la videoconsola más avanzada del mercado: ¡nuestra flamante consola cambia las reglas del juego! Con impresionantes gráficos 8K, velocidades de procesamiento ultrarrápidas y una biblioteca de juegos sin igual, esta consola te transportará a nuevos mundos y te proporcionará interminables horas de entretenimiento. Su diseño elegante y moderno la convertirá en la pieza central de tu centro de entretenimiento, y su interfaz fácil de usar hará que navegar por los juegos y las aplicaciones sea coser y cantar. or-hard enthusiast, nuestra nueva consola es la elección definitiva para cualquiera que busque llevar su experiencia de juego al siguiente nivel. ¿Por qué conformarse con menos? Pásate al futuro de los juegos con nuestra videoconsola de última generación hoy mismo."
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
totalCarritoEl.innerText = `Total a pagar: ${total}`;
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
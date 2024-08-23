// catalogo.js

const agroquimicos = [
    {
        nombre: "RAMEX ELITE",
        descripcion: "2 4 D - Herbicida .",
        precio: "$100",
        imagen: "ruta/imagen-fertilizante-a.jpg"
    },
    {
        nombre: "Semilla B",
        descripcion: "Semillas de alta calidad para soja.",
        precio: "$200",
        imagen: "ruta/imagen-semilla-b.jpg"
    },
    {
        nombre: "Herbicida C",
        descripcion: "Controla eficazmente las malas hierbas.",
        precio: "$150",
        imagen: "ruta/imagen-herbicida-c.jpg"
    }
];

// Función para mostrar los productos en el catálogo
function mostrarCatalogo() {
    const catalogoDiv = document.getElementById('catalogo');
    productos.forEach(producto => {
        // Crear el contenedor del producto
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto';

        // Agregar la imagen del producto
        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        productoDiv.appendChild(img);

        // Agregar el nombre del producto
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;
        productoDiv.appendChild(nombre);

        // Agregar la descripción del producto
        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;
        productoDiv.appendChild(descripcion);

        // Agregar el precio del producto
        const precio = document.createElement('p');
        precio.className = 'precio';
        precio.textContent = producto.precio;
        productoDiv.appendChild(precio);

        // Añadir el contenedor del producto al catálogo
        catalogoDiv.appendChild(productoDiv);
    });
}

// Llamar a la función para mostrar los productos
mostrarCatalogo();

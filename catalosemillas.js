const producto = [

    {
        nombre: "Semillas maiz",
        descripcion: "granos 1.",
        marca:"NIDERA",
        imagen: "/imagen/summit.jpg"
    
    },
    {
        nombre: "Semilla B",
        descripcion: "Semillas de alta calidad para soja.",
        marca:"marca b",
        imagen: "ruta/imagen-semilla-b.jpg"
        
    },
    {
        nombre: "Herbicida C",
        descripcion: "Controla eficazmente las malas hierbas.",
        marca:"marca a",
        imagen: "ruta/imagen-herbicida-c.jpg"
    }
]


// Función para mostrar los productos en el catálogo
function mostrarCatalogo(productosFiltrados = productos) {
    const catalogoDiv = document.getElementById('catalogo');
    catalogoDiv.innerHTML = ''; // Limpiar el catálogo antes de añadir productos

    productosFiltrados.forEach(producto => {
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

        // Agregar la marca del producto (anteriormente era "precio")
        const marca = document.createElement('p');
        marca.className = 'marca';
        marca.textContent = producto.marca;
        productoDiv.appendChild(marca);

        // Añadir el contenedor del producto al catálogo
        catalogoDiv.appendChild(productoDiv);
    });
}

// Función para filtrar los productos según el texto de búsqueda
function filtrarCatalogo() {
    const textoBusqueda = document.getElementById('buscador').value.toLowerCase();

    // Si el campo de búsqueda está vacío, mostrar todos los productos
    if (textoBusqueda === '') {
        mostrarCatalogo();
        return;
    }

    // Filtrar los productos que coinciden con el texto de búsqueda
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(textoBusqueda) || 
        producto.marca.toLowerCase().includes(textoBusqueda) || 
        producto.descripcion.toLowerCase().includes(textoBusqueda) 
    );

    // Mostrar los productos filtrados
    mostrarCatalogo(productosFiltrados);
}

// Llamar a la función para mostrar todos los productos al cargar la página
mostrarCatalogo();


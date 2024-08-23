// catalogo.js

const productos = [
    {
        nombre: "Ramex Elite",
        descripcion: "2 4 D - Herbicida",
        marca:"Summit Agro",
        imagen: "imagenes/ramex-elite.png"
    
    },
    {
        nombre: "VOLERIS",
        descripcion: "2 4 D.- Herbicida",
        marca:"Syngenta",
        imagen: "imagenes/voleris.png"
        
    },
    {
        nombre: "Shennco Max",
        descripcion: "2 4 D - Herbicida",
        marca:"Ruralco",
        imagen: "Imagenes/ruralco.png"
    
    },
    {
        nombre: "Actellic 50 EC",
        descripcion: "Insecticida",
        marca:"Rizobacter",
        imagen: "Imagenes/actellic-50.png"
    
    },
    {
        nombre: "Adirel In pack",
        descripcion: "Fertilizante",
        marca:"Ruralco",
        imagen: "Imagenes/adirel.png"
    
    },
    {
        nombre: "Amicor",
        descripcion: "Insecticida",
        marca:"Summit Agro",
        imagen: "Imagenes/amicor.png"
    
    },
    {
        nombre: "AmistarXtra",
        descripcion: "Fungicida",
        marca:"Syngenta",
        imagen: "Imagenes/amistar_xtra.png"
    
    },
    {
        nombre: "Apofis Elite",
        descripcion: "2 4 D - Herbicida",
        marca:"Syngenta",
        imagen: "Imagenes/apofis.png"
    
    },
    {
        nombre: "Apron Maxx RFC",
        descripcion: "Protección de Cultivos",
        marca:"Syngenta",
        imagen: "Imagenes/apron.png"
    
    },
    {
        nombre: "Artea",
        descripcion: "Fungicida",
        marca:"Syngenta",
        imagen: "Imagenes/artea.png"
    
    },
    {
        nombre: "Athena (Bifentrin)",
        descripcion: "Insecticida",
        marca:"*",
        imagen: "Imagenes/athena.png"
    },
    {
        nombre: "Axial plus",
        descripcion: "herbicida para trigo y cebada",
        marca:"Syngenta",
        imagen: "Imagenes/Axial.png"
    },
    {
        nombre: "Banvel",
        descripcion: "Herbicida. Puede ser usado solo o mezcla con otros herbicidas sobre diferentes cultivos",
        marca:"Syngenta",
        imagen: "Imagenes/Banvel.png"
    },
   
    {    nombre: "Bifentrin 25 Sigma",
        descripcion: "Insecticida",
        marca:"*",
        imagen: "Imagenes/bifentrin.png"


    },
    {    nombre: "Biotrac",
        descripcion: "Fertilizante",
        marca:"Yara",
        imagen: "Imagenes/biotrack.jpg"


    },
    {
        nombre: "Boral Sulfentrazone",
        descripcion: "Herbicida",
        marca:"Fmc",
        imagen: "Imagenes/boral-sulfentrazone.jpg"

    },
    {
        
            nombre: "Borja PACK",
            descripcion: "Herbicida selectivo preemergente para el cultivo de Maíz",
            marca:"Syngenta",
            imagen: "Imagenes/borjapack.jpg"
    
        
    }

    
    
];

const consultar = ""

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

        //añadir consulta
        const boton = document.createElement('button')
        boton.className = 'boton'
        boton.textContent = 'consular precio'
        productoDiv.appendChild(boton)
        boton.addEventListener('click', function() {
            window.location.href = '/contactanos.html'; // Reemplaza con la URL a la que quieras dirigir
        });

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








// --------------------------------------------------------
// Author: Ricardo Márquez
// GitHub: https://github.com/Ricardo21Josee
// LinkedIn: https://www.linkedin.com/in/ric21marquez
// Instagram: @mar_quez_g
// Threads: @mar_quez_g
// Email: josemarquez21garcia@gmail.com
// --------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Función para manejar los menús desplegables
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('show.bs.dropdown', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.transform = 'translateY(-20px)'; // Mayor desplazamiento inicial
            setTimeout(() => {
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.transform = 'translateY(0)';
            }, 10); // Retraso mínimo para suavizar la animación
        });

        dropdown.addEventListener('hide.bs.dropdown', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.transform = 'translateY(-20px)'; // Mayor desplazamiento al cerrar
        });
    });

    // Función para mover las tarjetas en la sección de productos
    function moverTarjetas(direccion) {
        const tarjetasContainer = document.getElementById('tarjetasContainer');
        if (!tarjetasContainer) return; // Verifica si el contenedor existe

        const tarjeta = tarjetasContainer.querySelector('.card');
        if (!tarjeta) return;

        // Ancho de una tarjeta + el espacio entre tarjetas (gap)
        const tarjetaWidth = tarjeta.offsetWidth + 15; // 15px es el gap entre tarjetas

        // Determinar cuántas tarjetas mover según el tamaño de la pantalla
        let numTarjetasAMover = 4; // Por defecto, mover 4 tarjetas en escritorio
        if (window.innerWidth < 992) {
            numTarjetasAMover = 1; // Mover 1 tarjeta en móviles y tablets
        }

        // Desplazamiento total
        const desplazamiento = direccion * tarjetaWidth * numTarjetasAMover;

        // Desplazar el contenedor
        tarjetasContainer.scrollBy({
            left: desplazamiento,
            behavior: 'smooth'
        });
    }

    // Asignar eventos a los botones de control del carrusel de tarjetas
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => moverTarjetas(-1));
        nextButton.addEventListener('click', () => moverTarjetas(1));
    }

    // Función para manejar el carrusel de ofertas (Bootstrap Carousel)
    const carouselOfertas = document.getElementById('carouselOfertas');
    if (carouselOfertas) {
        // Inicializar el carrusel de ofertas (si es necesario)
        const carousel = new bootstrap.Carousel(carouselOfertas, {
            interval: 5000, // Cambia cada 5 segundos
            wrap: true // Permite que el carrusel se repita
        });
    }

    // Función para manejar la animación del corazón y mostrar mensaje
    function toggleFavorito(button) {
        const isActive = button.classList.toggle('active'); // Alternar la clase 'active' en el botón
        if (isActive) {
            mostrarMensaje('Agregado a Favoritos');
        } else {
            mostrarMensaje('Eliminado de Favoritos', true);
        }
    }

    // Función para manejar la animación del carrito y mostrar mensaje
    function toggleCarrito(button) {
        const isActive = button.classList.toggle('active'); // Alternar la clase 'active' en el botón
        if (isActive) {
            mostrarMensaje('Agregado al Carrito');
        } else {
            mostrarMensaje('Eliminado del Carrito', true);
        }
    }

    // Función para mostrar un mensaje en la pantalla
    function mostrarMensaje(mensaje, esEliminado = false) {
        const mensajeDiv = document.createElement('div');
        mensajeDiv.className = 'mensaje-flotante';
        if (esEliminado) {
            mensajeDiv.classList.add('eliminado');
        }
        mensajeDiv.textContent = mensaje;
        document.body.appendChild(mensajeDiv);

        // Eliminar el mensaje después de 2 segundos
        setTimeout(() => {
            mensajeDiv.remove();
        }, 2000);
    }

    // Asignar eventos a los botones del corazón y del carrito
    const favoritoButtons = document.querySelectorAll('.favorito-btn');
    const carritoButtons = document.querySelectorAll('.carrito-btn');

    favoritoButtons.forEach(button => {
        button.addEventListener('click', function () {
            toggleFavorito(this); // Llama a la función toggleFavorito al hacer clic
        });
    });

    carritoButtons.forEach(button => {
        button.addEventListener('click', function () {
            toggleCarrito(this); // Llama a la función toggleCarrito al hacer clic
        });
    });
});
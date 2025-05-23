// --------------------------------------------------------
// Autor: Ricardo Márquez
// GitHub: https://github.com/Ricardo21Josee
// LinkedIn: https://www.linkedin.com/in/ric21marquez
// Instagram: @mar_quez_g
// Threads: @mar_quez_g
// Email: josemarquez21garcia@gmail.com
// --------------------------------------------------------


document.addEventListener('DOMContentLoaded', function () {
    // ============================
    // Menús desplegables / Dropdown menus
    // ============================
    // Función para manejar los menús desplegables / Handle dropdown menus
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('show.bs.dropdown', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.transform = 'translateY(-20px)'; // Mayor desplazamiento inicial / More initial offset
            setTimeout(() => {
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.transform = 'translateY(0)';
            }, 10); // Retraso mínimo para suavizar la animación / Minimal delay for smooth animation
        });

        dropdown.addEventListener('hide.bs.dropdown', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.transform = 'translateY(-20px)'; // Mayor desplazamiento al cerrar / More offset on close
        });
    });

    // ============================
    // Carrusel de tarjetas / Product cards carousel
    // ============================
    // Función para mover las tarjetas en la sección de productos / Move cards in product section
    function moverTarjetas(direccion) {
        const tarjetasContainer = document.getElementById('tarjetasContainer');
        if (!tarjetasContainer) return; // Verifica si el contenedor existe / Check if container exists

        const tarjeta = tarjetasContainer.querySelector('.card');
        if (!tarjeta) return;

        // Ancho de una tarjeta + el espacio entre tarjetas (gap) / Card width + gap
        const tarjetaWidth = tarjeta.offsetWidth + 15; // 15px es el gap entre tarjetas / 15px is the gap

        // Determinar cuántas tarjetas mover según el tamaño de la pantalla / How many cards to move depending on screen size
        let numTarjetasAMover = 4; // Por defecto, mover 4 tarjetas en escritorio / Default: move 4 cards on desktop
        if (window.innerWidth < 992) {
            numTarjetasAMover = 1; // Mover 1 tarjeta en móviles y tablets / Move 1 card on mobile/tablet
        }

        // Desplazamiento total / Total scroll
        const desplazamiento = direccion * tarjetaWidth * numTarjetasAMover;

        // Desplazar el contenedor / Scroll the container
        tarjetasContainer.scrollBy({
            left: desplazamiento,
            behavior: 'smooth'
        });
    }

    // Asignar eventos a los botones de control del carrusel de tarjetas / Assign events to carousel control buttons
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => moverTarjetas(-1));
        nextButton.addEventListener('click', () => moverTarjetas(1));
    }

    // ============================
    // Carrusel de ofertas / Offers carousel
    // ============================
    // Función para manejar el carrusel de ofertas (Bootstrap Carousel) / Handle offers carousel
    const carouselOfertas = document.getElementById('carouselOfertas');
    if (carouselOfertas) {
        // Inicializar el carrusel de ofertas (si es necesario) / Initialize carousel if needed
        const carousel = new bootstrap.Carousel(carouselOfertas, {
            interval: 5000, // Cambia cada 5 segundos / Change every 5 seconds
            wrap: true // Permite que el carrusel se repita / Allow carousel to loop
        });
    }

    // ============================
    // Favoritos y carrito / Favorites and cart
    // ============================
    // Función para manejar la animación del corazón y mostrar mensaje / Handle heart animation and show message
    function toggleFavorito(button) {
        const isActive = button.classList.toggle('active'); // Alternar la clase 'active' en el botón / Toggle 'active' class
        if (isActive) {
            mostrarMensaje('Agregado a Favoritos'); // Added to favorites
        } else {
            mostrarMensaje('Eliminado de Favoritos', true); // Removed from favorites
        }
    }

    // Función para manejar la animación del carrito y mostrar mensaje / Handle cart animation and show message
    function toggleCarrito(button) {
        const isActive = button.classList.toggle('active'); // Alternar la clase 'active' en el botón / Toggle 'active' class
        if (isActive) {
            mostrarMensaje('Agregado al Carrito'); // Added to cart
        } else {
            mostrarMensaje('Eliminado del Carrito', true); // Removed from cart
        }
    }

    // ============================
    // Mensaje flotante / Floating message
    // ============================
    // Función para mostrar un mensaje en la pantalla / Show a message on screen
    function mostrarMensaje(mensaje, esEliminado = false) {
        const mensajeDiv = document.createElement('div');
        mensajeDiv.className = 'mensaje-flotante';
        if (esEliminado) {
            mensajeDiv.classList.add('eliminado');
        }
        mensajeDiv.textContent = mensaje;
        document.body.appendChild(mensajeDiv);

        // Eliminar el mensaje después de 2 segundos / Remove message after 2 seconds
        setTimeout(() => {
            mensajeDiv.remove();
        }, 2000);
    }

    // ============================
    // Asignar eventos a botones / Assign events to buttons
    // ============================
    // Asignar eventos a los botones del corazón y del carrito / Assign events to heart and cart buttons
    const favoritoButtons = document.querySelectorAll('.favorito-btn');
    const carritoButtons = document.querySelectorAll('.carrito-btn');

    favoritoButtons.forEach(button => {
        button.addEventListener('click', function () {
            toggleFavorito(this); // Llama a la función toggleFavorito al hacer clic / Call toggleFavorito on click
        });
    });

    carritoButtons.forEach(button => {
        button.addEventListener('click', function () {
            toggleCarrito(this); // Llama a la función toggleCarrito al hacer clic / Call toggleCarrito on click
        });
    });
});
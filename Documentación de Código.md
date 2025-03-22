<h1 align="center">Documentación del Código: Página de Tecnología (TechStore)</h1>

<p align="center">
  Este proyecto es una página web estática que simula una tienda en línea de productos tecnológicos. La página está construida con <strong>HTML</strong>, <strong>CSS</strong> y <strong>JavaScript</strong>, y utiliza <strong>Bootstrap</strong> para el diseño responsivo y componentes interactivos.
</p>

---

## **1. Estructura del Proyecto**

### **1.1. Archivos y Carpetas**
- **HTML**: `index.html` (página principal).
- **CSS**: 
  - `styles.css` (estilos personalizados).
  - Bootstrap (enlazado desde CDN).
  - Font Awesome (enlazado desde CDN).
- **JavaScript**: 
  - `scripts.js` (funcionalidades personalizadas).
  - Bootstrap JS (enlazado desde CDN).
- **Imágenes**: 
  - Carpeta `img` con subcarpetas para imágenes del carrusel y productos.

---

## **2. HTML**

### **2.1. Estructura General**
- **DOCTYPE y Metadatos**: 
  - Define el documento como HTML5.
  - Especifica el idioma (`es` para español).
  - Incluye metadatos como el `charset` (UTF-8) y la configuración de la vista para dispositivos móviles (`viewport`).

- **Enlaces a Recursos Externos**:
  - Bootstrap CSS y JS.
  - Font Awesome para íconos.
  - Archivo CSS personalizado (`styles.css`).

- **Estructura del Cuerpo**:
  - **Header**: Contiene el logotipo y un menú de navegación con desplegables.
  - **Carrusel de Ofertas**: Muestra imágenes promocionales con texto descriptivo.
  - **Sección de Nuevos Ingresos**: Muestra productos en un carrusel horizontal.
  - **Main Content**: Muestra productos en una cuadrícula.
  - **Footer**: Contiene información de contacto, enlaces a redes sociales y enlaces rápidos.

### **2.2. Componentes Clave**
- **Header**:
  - Logotipo (`TechStore`).
  - Menú de navegación con desplegables para **Productos**, **Marcas**, **Servicios** y **Contacto**.

- **Carrusel de Ofertas**:
  - Tres diapositivas con imágenes y texto descriptivo.
  - Controles para navegar entre diapositivas.

- **Nuevos Ingresos**:
  - Carrusel horizontal con tarjetas de productos.
  - Cada tarjeta incluye una imagen, título, descripción, precio y botones de acción (comprar, favorito, carrito).

- **Main Content**:
  - Cuadrícula de productos con tarjetas similares a las de la sección de nuevos ingresos.

- **Footer**:
  - Información de contacto (email y teléfono).
  - Íconos de redes sociales (Facebook, X/Twitter, Instagram, TikTok).
  - Enlaces rápidos (Política de Privacidad, Términos y Condiciones, Soporte).

---

## **3. CSS**

### **3.1. Estilos Personalizados**
- **Body**:
  - Fuente predeterminada: `Arial, sans-serif`.
  - Color de fondo: `#F1F3F5`.

- **Header**:
  - Fondo oscuro (`#343a40`) con sombra.
  - Menú desplegable con animación suave al abrirse.

- **Carrusel de Ofertas**:
  - Imágenes con altura máxima de `400px` y ajuste de objeto (`object-fit: cover`).
  - Texto descriptivo centrado con fondo semitransparente.

- **Tarjetas de Productos**:
  - Diseño uniforme con bordes redondeados, sombra y transición al hacer hover.
  - Botones de acción (favorito y carrito) con íconos de Font Awesome.
  - Precio destacado en un recuadro rojo.

- **Carrusel de Nuevos Ingresos**:
  - Desplazamiento horizontal suave con botones de control.
  - Diseño responsivo: muestra 4 tarjetas en escritorio y 1 en móviles.

- **Footer**:
  - Fondo oscuro (`#343a40`) con texto blanco.
  - Íconos de redes sociales con efecto hover (cambian de color).

---

## **4. JavaScript**

### **4.1. Funcionalidades Clave**
- **Menús Desplegables**:
  - Animación suave al abrir y cerrar los menús desplegables.
  - Uso de eventos de Bootstrap (`show.bs.dropdown` y `hide.bs.dropdown`).

- **Carrusel de Tarjetas**:
  - Desplazamiento horizontal suave al hacer clic en los botones de control.
  - Ajuste dinámico del número de tarjetas visibles según el tamaño de la pantalla.

- **Interacción con Productos**:
  - Botones de **favorito** y **carrito** con animación y mensajes flotantes.
  - Mensajes flotantes que indican si un producto fue agregado o eliminado.

- **Mensajes Flotantes**:
  - Aparecen en la esquina inferior derecha al agregar o eliminar productos.
  - Desaparecen automáticamente después de 2 segundos.

---

## **5. Funcionalidades Detalladas**

### **5.1. Menús Desplegables**
- **Animación**: Los menús desplegables se abren y cierran con una animación suave (opacidad y desplazamiento vertical).
- **Eventos**: Se utilizan eventos de Bootstrap para controlar la visibilidad y la animación.

### **5.2. Carrusel de Ofertas**
- **Autoplay**: Las diapositivas cambian automáticamente cada 5 segundos.
- **Controles**: Botones para navegar manualmente entre diapositivas.

### **5.3. Carrusel de Nuevos Ingresos**
- **Desplazamiento**: Los productos se desplazan horizontalmente al hacer clic en los botones de control.
- **Responsividad**: Muestra 4 tarjetas en escritorio y 1 en móviles.

### **5.4. Interacción con Productos**
- **Favoritos**: Al hacer clic en el ícono de corazón, el producto se marca como favorito y se muestra un mensaje flotante.
- **Carrito**: Al hacer clic en el ícono de carrito, el producto se agrega al carrito y se muestra un mensaje flotante.

### **5.5. Mensajes Flotantes**
- **Animación**: Los mensajes aparecen con una animación de deslizamiento desde la derecha.
- **Duración**: Desaparecen automáticamente después de 2 segundos.

---

## **6. Consideraciones de Diseño**
- **Responsividad**: La página está diseñada para adaptarse a diferentes tamaños de pantalla (escritorio, tablet, móvil).
- **Accesibilidad**: Uso de etiquetas semánticas y atributos ARIA para mejorar la accesibilidad.
- **Performance**: Uso de CDN para Bootstrap y Font Awesome, lo que reduce el tiempo de carga.

---

## **7. Mejoras Futuras**
1. **Integración con Backend**: Conectar la página con un backend para manejar productos, favoritos y carrito de compras.
2. **Búsqueda de Productos**: Agregar una barra de búsqueda para filtrar productos.
3. **Paginación**: Implementar paginación para la sección de productos.
4. **Animaciones Adicionales**: Agregar más animaciones para mejorar la experiencia del usuario.

---

<p align="center">
  Este código es una base sólida para una tienda en línea de productos tecnológicos. Puede extenderse y mejorarse según las necesidades del proyecto.
</p>

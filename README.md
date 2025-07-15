# 👕 Teslo | Shop 🚀

¡Bienvenido al repositorio de **Teslo Shop**, una moderna tienda online de ropa diseñada para ofrecer una experiencia de usuario fluida y visualmente atractiva en diversas plataformas!

Este proyecto Fullstack ha sido desarrollado con **Angular** en el frontend y **NestJS** en el backend, mostrando habilidades completas en el desarrollo web, desde la gestión de datos hasta la creación de una interfaz de usuario interactiva y responsiva.

## ✨ Características Principales

### 🛒 Experiencia de Usuario y Navegación (Frontend - Angular)

* **Navegación Intuitiva:**
    * **Navbar Dinámico:** Incluye un logo "Teslo | Shop" que te lleva al inicio.
    * **Categorías de Productos:** Navega fácilmente entre "Hombres", "Mujeres" y "Niños".
    * **Modo Claro/Oscuro:** Un `toggle` integrado permite cambiar entre temas de día y de noche, adaptando completamente la estética de la página para una visualización cómoda.
    * **Carrito de Compras Visible:** Un icono de carrito muestra un **badge verde** con un número blanco, indicando la cantidad total de productos en el carrito sin necesidad de entrar.
    * **Autenticación Fluida:** Botón de "Login" para iniciar sesión o registrarse. Una vez autenticado, el navbar muestra tu nombre de usuario y la opción "Cerrar sesión".

* **Visualización de Productos:**
    * **Tarjetas de Producto Atractivas:** Los productos se presentan en tarjetas con foto, título, descripción truncada y un botón "Ver detalles".
    * **Efectos Hover Interactivos:** Al pasar el ratón sobre las tarjetas y botones, se activan transiciones de color elegantes y adaptadas tanto al modo claro como al oscuro, mejorando la interacción.
    * **Paginación Inteligente:** En la parte inferior de cada página de productos, una paginación dinámica se ajusta al número de productos y al género seleccionado, optimizando la navegación por el catálogo.

* **Página de Detalle de Producto:**
    * **Carrusel de Imágenes:** Visualiza múltiples fotos del producto.
    * **Información Completa:** Título, descripción, precio y tallas disponibles.
    * **Selección de Talla y Cantidad:** Selector intuitivo para elegir la talla deseada antes de añadir al carrito.
    * **Notificación de Añadido al Carrito:** Un `badge alert success` (pop-up) confirma cuando un producto ha sido añadido.

* **Gestión del Carrito de Compras:**
    * **Tabla Detallada:** Muestra los productos en el carrito con foto, título, talla, precio unitario, cantidad, subtotal por producto y opciones para eliminar.
    * **Resumen del Carrito:** Muestra el total de productos y el precio total a pagar.
    * **Acciones del Carrito:** Botones para "Vaciar carrito" y "Proceder al pago".
    * **Nota Importante:** El botón "Proceder al pago" está deshabilitado en esta demo, ya que los productos son de la marca Tesla y no se poseen los derechos de imagen para la venta comercial.

### ⚙️ Panel de Administración (Frontend - Angular & Backend - NestJS)

**Acceso al Panel de Administración:**
Para acceder al panel de administración de la tienda en un entorno local de desarrollo:

* **Usuario de Administración:** Las credenciales de un usuario administrador preconfigurado se cargan automáticamente al ejecutar la **`seed` de la base de datos del backend**.
* **Instrucciones de Acceso:** Por favor, consulta los scripts de `seed` del proyecto de backend para conocer el usuario y contraseña por defecto, o crea uno nuevo siguiendo la documentación del backend.

* **Acceso Restringido:** El botón del "Panel de administración" solo es visible si el usuario tiene rol de administrador.
* **Gestión de Productos Completa:**
    * **Tabla de Productos:** Muestra todos los productos de la tienda con paginación configurable.
    * **Información Detallada:** Cada fila de la tabla incluye foto, título, tallas, precio e inventario.
    * **Indicador de Inventario:** Un **badge con colores dinámicos** (`verde` para muchas existencias, `amarillo` para escasez, `rojo` para muy pocas unidades) proporciona una visión rápida del stock.
    * **Detalles del Producto (Edición):** Un botón "Detalles" en cada fila permite acceder a una ficha completa para editar:
        * Título, slug, descripción, precio, unidades.
        * Categoría y tallas disponibles (con botones de colores que cambian a `outline` cuando se desactivan).
        * Carga de fotos de productos desde el ordenador.
        * Botón "Guardar" para aplicar los cambios.

### 📱 Diseño Responsivo

* La tienda cuenta con un diseño totalmente responsivo que se adapta perfectamente a diferentes tamaños de pantalla:
    * **Escritorio:** Navbar completo, 4 productos por fila.
    * **Tablets (1279px a 648px):** Navbar con menú hamburguesa para las categorías y opciones de usuario (si está logueado). Los productos se muestran en cuadrículas de 3 o 2 columnas, optimizando el espacio. La tabla del carrito se transforma en tarjetas individuales para una mejor visualización.
    * **Móviles:** Navbar simplificado con menú hamburguesa. Los productos se muestran en una sola columna. El carrito mantiene su formato de tarjeta por producto.

### 🛡️ Seguridad y Validaciones (Frontend/Backend)

* **Autenticación de Usuarios:** Sistema robusto de login y registro.
* **Validación de Formularios:** Todos los formularios (login, registro, productos) implementan validación del lado del cliente con expresiones regulares y la clase `Validators` de Angular, asegurando la integridad de los datos.

## 🛠️ Tecnologías Utilizadas

### Frontend:

* [**Angular**](https://angular.io/) (**v19.2.14**) - Framework para la interfaz de usuario.
* **[TypeScript](https://www.typescriptlang.org/) (~5.7.2):** El lenguaje de programación base que añade tipado estático.
* [**Tailwind CSS**](https://tailwindcss.com/) - Framework CSS para un diseño rápido y responsivo.
* [**DaisyUI**](https://daisyui.com/) - Plugin de componentes de Tailwind CSS.
* [**Ngx-Translate**](https://github.com/ngx-translate/core) - Herramienta de **internacionalización (i18n)** utilizada para ofrecer la aplicación en español (con capacidad de añadir más idiomas).
* [**Angular Signals**](https://angular.dev/guide/signals) - Para la gestión de estado reactiva del carrito y otras partes de la UI.
* [**@tailwindcss/line-clamp**](https://github.com/tailwindlabs/tailwindcss-line-clamp) - Plugin para truncar texto.
* **Swiper** - Librería para la funcionalidad de carruseles.
* **RxJS** - Para la programación reactiva y el manejo de datos asíncronos.

### Backend:

* [**NestJS**](https://nestjs.com/) - Framework progresivo de Node.js para construir APIs eficientes y escalables.
* **Base de Datos:** [**PostgreSQL**](https://www.postgresql.org/) - Sistema de gestión de bases de datos relacionales robusto y de código abierto.

---

## 🙏 Agradecimientos

Este proyecto ha sido desarrollado tomando como base el curso de Angular impartido por [Fernando Herrera](https://www.udemy.com/user/fernando-herrera-udemy/) (Udemy). A partir de esta excelente base, he ampliado significativamente la tienda con un diseño estético y funcionalidades más avanzadas. El backend original, también desarrollado por Fernando Herrera, ha sido modificado y adaptado por mí para asegurar una comunicación fluida y robusta entre la base de datos, el backend y el frontend.

Mi agradecimiento a Fernando Herrera por proporcionar los conocimientos fundamentales para este desarrollo.

---

## 🚀 Cómo Ejecutar el Proyecto

Para poner en marcha la **Teslo Shop**, necesitarás ejecutar tanto el frontend (Angular) como el backend (NestJS).

### Requisitos Previos

* Node.js (v18 o superior)
* npm o Yarn
* [**PostgreSQL**](https://www.postgresql.org/download/) (o Docker si usas un contenedor de PostgreSQL)

### Pasos

1.  **Clonar el repositorio del Frontend:**
    ```bash
    git clone [https://github.com/Jose-designer-23/phoenix-angular-shop.git](https://github.com/Jose-designer-23/phoenix-angular-shop.git)
    cd phoenix-angular-shop
    ```

2.  **Configurar y Ejecutar el Backend:**
    * Clona el repositorio del backend:
        ```bash
        git clone [https://github.com/Jose-designer-23/nest-teslo-shop.git](https://github.com/Jose-designer-23/nest-teslo-shop.git)
        cd nest-teslo-shop
        ```
    * Instala las dependencias:
        ```bash
        npm install
        ```
    * **Configura tus variables de entorno:** Crea un archivo `.env` en la raíz del proyecto backend con la configuración necesaria para la base de datos y JWT (por ejemplo: `DATABASE_URL=postgresql://user:password@host:port/database`, `JWT_SECRET`, etc. Consulta la documentación del repositorio del backend para más detalles específicos de NestJS y PostgreSQL).
    * Inicia el servidor de desarrollo:
        ```bash
        npm run start:dev # o tu comando para iniciar el servidor de desarrollo
        ```
    * Una vez que el backend esté ejecutándose (generalmente en `http://localhost:3000` por defecto), puedes continuar con el frontend.

3.  **Configurar y Ejecutar el Frontend:**
    * Asegúrate de estar en el directorio raíz del frontend (si seguiste el paso 1, ya deberías estar en `phoenix-angular-shop`).
    * Instala las dependencias:
        ```bash
        npm install
        ```
    * Inicia la aplicación Angular:
        ```bash
        npm start # o ng serve
        ```

4.  **Acceder a la Aplicación:**
    Abre tu navegador y ve a `http://localhost:4200`.

---

## 💻 Comandos de Desarrollo (Angular CLI)

Esta sección proporciona una referencia rápida a los comandos más comunes de Angular CLI para el desarrollo del frontend.

* **Arrancar el Servidor de Desarrollo:**
    ```bash
    ng serve
    ```
    Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques los archivos fuente.

* **Generar Componentes, Directivas, Servicios, etc.:**
    Utiliza el potente generador de código de Angular CLI para crear nuevos elementos.
    ```bash
    ng generate component nombre-del-componente
    # Ejemplo: ng generate service services/mi-servicio
    # Para ver una lista completa de esquemas disponibles: ng generate --help
    ```

* **Construir el Proyecto para Producción:**
    ```bash
    ng build
    ```
    Esto compilará tu proyecto y guardará los artefactos de construcción en el directorio `dist/`. Por defecto, la construcción de producción optimiza tu aplicación para rendimiento y velocidad.

* **Ejecutar Pruebas Unitarias:**
    ```bash
    ng test
    ```

* **Ejecutar Pruebas End-to-End (E2E):**
    ```bash
    ng e2e
    ```
    (Ten en cuenta que Angular CLI no viene con un framework de pruebas E2E por defecto. Puedes elegir uno que se adapte a tus necesidades, como Cypress o Protractor si aún lo usas).
---
[Read this README in English](README-en.md)

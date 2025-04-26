# 🛍️ Frontend Tienda Online GBStore
Este es el frontend de la tienda online GBStore, construida con React, y diseñada para interactuar con el backend de la API RESTful. Permite gestionar productos, el carrito de compras y la autenticación de usuarios 🔐.

# 🛠️ Tecnologías usadas
⚛️ React — Librería para construir la interfaz de usuario.

🔀 React Router — Para manejar la navegación entre páginas.

🌐 Context API — Para el manejo global del estado (carrito y auth).

🎨 CSS — Estilos y diseño responsivo.

📡 Axios — Para las peticiones HTTP al backend.

📁 Estructura de carpetas

/src
  /components
    footer.css
    footer.jsx
    layout.css
    layout.jsx
    navbar.jsx
    product.jsx
  /context
    authcontext.jsx
    cartcontext.jsx
  /pages
    cartpage.jsx
    checkoutpage.jsx
    homepage.jsx
    homepage.css
    loginpage.css
    loginpage.jsx
  app.jsx
  app.css
  index.css
  main.jsx

📦 /components: Componentes reutilizables como navbar, footer, layout y product.
🧠 /context: Manejo de estado global (auth y carrito).
📄 /pages: Vistas principales: inicio, login, carrito, checkout.
🧩 app.jsx: Contenedor de rutas y estructura principal.
🪄 main.jsx: Punto de entrada.
🧼 index.css: Estilos globales.

# 🚀 Cómo correr el frontend
Clonar el repositorio:


git clone <URL_DEL_REPO>
cd <NOMBRE_DEL_PROYECTO>
Instalar dependencias:

npm install
Iniciar el servidor de desarrollo:

npm run dev
El frontend corre por defecto en http://localhost:5173

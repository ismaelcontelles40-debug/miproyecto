# Backend API - TaskFlow

## Introducción

El backend de TaskFlow está desarrollado con Node.js y Express.js siguiendo una arquitectura modular por capas. La API REST permite crear, obtener, completar y eliminar tareas desde el frontend.

---

# Tecnologías utilizadas

## Node.js

Node.js permite ejecutar JavaScript en el servidor utilizando un entorno rápido y escalable basado en eventos.

## Express.js

Express es un framework para Node.js que facilita la creación de APIs REST y el manejo de rutas y middlewares.

## Dotenv

Dotenv permite cargar variables de entorno desde un archivo `.env`.

Ejemplo:

```env
PORT=3000

```

## Cors permite la comunicación entre el frontend y backend evitando errores de origen cruzado.

# Nodemon

Nodemon reinicia automáticamente el servidor cuando se detectan cambios en el código.

# Arquitectura del backend

El backend sigue una arquitectura organizada por capas.

Routes

Definen las rutas de la API.

Ejemplo:

router.get("/", getTasks);
Controllers

Gestionan la lógica de las peticiones y respuestas HTTP.

Services

Contienen la lógica de negocio y manejo de datos.

Middlewares

Permiten ejecutar lógica intermedia antes de llegar a las rutas.

En el proyecto se utiliza un middleware logger académico.

Config

Contiene configuraciones generales del proyecto.

Endpoints disponibles
Obtener tareas
GET /api/v1/tasks

Obtiene todas las tareas registradas.

Crear tarea
POST /api/v1/tasks

Body:

{
  "titulo": "Estudiar backend",
  "prioridad": "high"
}
Completar tarea
PATCH /api/v1/tasks/:id

Permite cambiar el estado completado de una tarea.

Eliminar tarea
DELETE /api/v1/tasks/:id

Elimina una tarea según su ID.

Herramientas de testing y documentación
Thunder Client

Thunder Client es una extensión de VS Code utilizada para probar endpoints HTTP de forma rápida.

Se utilizó para:

probar GET
probar POST
probar PATCH
probar DELETE
Postman

Postman es una herramienta profesional para probar APIs REST.

Ventajas:

colecciones de endpoints
testing automatizado
exportación de peticiones
trabajo en equipo
Axios

Axios es una librería para realizar peticiones HTTP desde frontend o backend.

Ejemplo:

axios.get("/api/v1/tasks");

En este proyecto se utilizó fetch, pero Axios es una alternativa muy utilizada profesionalmente.

Swagger

Swagger permite documentar APIs REST de forma visual e interactiva.

Ventajas:

documentación automática
pruebas desde navegador
organización profesional de endpoints
Sentry

Sentry es una plataforma de monitoreo de errores.

Permite:

detectar errores en producción
guardar logs
analizar fallos del sistema
mejorar el mantenimiento de aplicaciones
Manejo de errores

El backend implementa:

errores 400
errores 404
errores 500

También incluye un middleware global de manejo de errores.

Conclusión

La API REST desarrollada para TaskFlow permite gestionar tareas de forma eficiente mediante una arquitectura modular y escalable utilizando Node.js y Express.js.

El proyecto implementa buenas prácticas como separación por capas, middlewares, validaciones, manejo de errores y conexión completa entre frontend y backend.
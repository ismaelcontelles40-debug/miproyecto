# TaskFlow - Documentación Técnica

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

# Descripción técnica

TaskFlow implementa una API REST desarrollada con Node.js y Express.js utilizando una arquitectura modular basada en separación de responsabilidades.

El backend fue diseñado para practicar:

- arquitectura por capas
- middlewares personalizados
- controladores
- lógica de negocio
- documentación Swagger
- manejo global de errores
- comunicación cliente-servidor

---

# Flujo interno de la aplicación

La aplicación sigue el siguiente flujo interno:

1. El frontend realiza peticiones HTTP mediante Fetch API.
2. Express recibe la petición.
3. La petición pasa por middlewares.
4. Las rutas gestionan el endpoint correspondiente.
5. El controller procesa la petición.
6. El service ejecuta la lógica de negocio.
7. Express devuelve una respuesta JSON.

---

# Arquitectura modular backend

El backend está organizado utilizando separación por capas.

## Routes

Responsables de:

- definir endpoints
- gestionar rutas API REST
- conectar controllers

### Archivo principal

```txt
server/src/routes/task.routes.js
```

---

## Controllers

Responsables de:

- recibir peticiones HTTP
- validar datos básicos
- devolver respuestas HTTP
- comunicarse con services

### Archivo principal

```txt
server/src/controllers/task.controller.js
```

---

## Services

Responsables de:

- lógica de negocio
- manipulación de tareas
- actualización de estados
- eliminación de datos

### Archivo principal

```txt
server/src/services/task.service.js
```

---

## Middleware Logger

Se implementó un middleware personalizado para:

- registrar endpoints
- registrar métodos HTTP
- facilitar depuración
- visualizar tráfico de peticiones

### Archivo

```txt
server/src/middlewares/logger.middleware.js
```

---

# Swagger UI

La documentación interactiva de la API se implementó utilizando:

- swagger-ui-express
- swagger-jsdoc

## Ruta local

```txt
http://localhost:3000/api-docs
```

Swagger permite:

- visualizar endpoints
- probar peticiones
- documentar respuestas
- validar estructura de la API

---

# API REST

## Endpoints principales

| Método | Endpoint | Función |
|---|---|---|
| GET | /api/v1/tasks | Obtener tareas |
| POST | /api/v1/tasks | Crear tarea |
| PATCH | /api/v1/tasks/:id | Completar tarea |
| DELETE | /api/v1/tasks/:id | Eliminar tarea |

---

# Manejo global de errores

El backend implementa un middleware global de errores para centralizar respuestas del servidor.

Se gestionan:

- errores 400
- errores 404
- errores 500

Esto mejora:

- mantenimiento
- depuración
- control de errores

---

# Variables de entorno

## Archivo utilizado

```txt
server/.env
```

## Configuración actual

```env
PORT=3000
```

---

# Testing técnico

La API fue probada utilizando:

- Thunder Client
- Swagger UI
- navegador
- Fetch API

---

# Decisiones técnicas

## Express.js

Se eligió Express.js por:

- simplicidad
- modularidad
- facilidad para crear APIs REST

---

## Arquitectura modular

La separación por capas permite:

- mejor mantenimiento
- código más limpio
- escalabilidad
- reutilización

---

## Swagger

Swagger se implementó para:

- documentar endpoints
- facilitar testing
- mejorar mantenibilidad

---

# Autor

**Ismael Contelles - 2026**
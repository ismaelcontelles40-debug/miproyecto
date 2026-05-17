# TaskFlow - Full Stack Task Manager

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

---

# Descripción

TaskFlow es una aplicación full stack para la gestión de tareas desarrollada con HTML, CSS, JavaScript, Node.js y Express.js.

La aplicación permite:

- crear tareas
- completar tareas
- eliminar tareas
- gestionar prioridades
- buscar tareas
- ordenar tareas
- usar modo oscuro
- responsive design
- trabajar con una API REST propia

---

# Frontend

El frontend fue desarrollado utilizando:

- HTML5
- CSS3
- JavaScript Vanilla
- Fetch API

## Funciones principales

- renderizado dinámico de tareas
- búsqueda de tareas
- ordenación
- prioridades
- modo oscuro
- responsive design
- conexión con API REST

## Archivo principal

```txt
app.js
```

---

# Backend

El backend fue desarrollado utilizando:

- Node.js
- Express.js
- Swagger UI
- Middleware personalizado

## Funciones principales

- gestión API REST
- manejo de peticiones HTTP
- lógica de negocio
- middlewares
- manejo global de errores
- documentación Swagger

## Entrada principal

```txt
server/src/index.js
```

---

# Documentación

La documentación técnica completa del backend y arquitectura del proyecto se encuentra aquí:

[README Técnico](docs/readmi-tecnico.md)

## Swagger UI

```txt
http://localhost:3000/api-docs
```

---

# Funcionalidades principales

- Crear tareas
- Completar tareas
- Eliminar tareas

## Prioridades

- Baja
- Media
- Alta

## Extras

- Ordenar tareas
- Buscar tareas
- Responsive Design
- Dark Mode
- API REST
- Middleware logger
- Manejo global de errores

---

# Arquitectura del proyecto

```txt
miproyecto
│
├── docs                            # Documentación del proyecto
│   ├── images                      # Capturas README
│   ├── backend-api.md              # Documentación inicial API
│   └── readme-tecnico.md           # Documentación técnica
│
├── server                          # Backend Express
│   │
│   ├── src
│   │   │
│   │   ├── config                  # Configuración y variables
│   │   ├── controllers             # Controladores HTTP
│   │   ├── middlewares             # Middlewares personalizados
│   │   ├── routes                  # Endpoints API REST
│   │   ├── services                # Lógica de negocio
│   │   ├── swagger.js              # Configuración Swagger
│   │   └── index.js                # Entrada principal backend
│   │
│   ├── .env                        # Variables de entorno
│   ├── package.json                # Dependencias backend
│   └── package-lock.json
│
├── src
│   └── api
│       └── client.js               # Comunicación Fetch API
│
├── app.js                          # Lógica principal frontend
├── index.html                      # Estructura HTML
├── style.css                       # Estilos y responsive
└── README.md                       # Documentación principal
```

---

# Capturas

## Modo claro

![Vista principal](docs/images/modo-claro.png)

## Modo oscuro

![Modo oscuro](docs/images/Modo-oscuro.png)

## Modo móvil

![Vista móvil](docs/images/Modo-movil.png)

---

# Tecnologías utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript
- Fetch API

## Backend

- Node.js
- Express.js
- Swagger UI
- Dotenv
- Cors
- Nodemon

---

# Autor

**Ismael Contelles - 2026**
# TaskFlow - Full Stack Task Manager

## Descripción

TaskFlow es una aplicación full stack para la gestión de tareas desarrollada con HTML, CSS, JavaScript, Node.js y Express.js.

La aplicación permite:
- crear tareas
- completar tareas
- eliminar tareas
- gestionar prioridades
- buscar tareas
- ordenar tareas
- usar modo oscuro
- trabajar con una API REST propia

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
- Dotenv
- Cors
- Nodemon

---

# Funcionalidades principales

- Crear tareas
- Completar tareas
- Eliminar tareas
- Prioridades:
  - Baja
  - Media
  - Alta
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
├── docs
│   └── backend-api.md
│
├── server
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── routes
│   │   ├── services
│   │   └── index.js
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── src
│   └── api
│       └── client.js
│
├── app.js
├── index.html
├── style.css
└── README.md
---
```

# Instalación

## 1. Clonar repositorio

```bash
git clone https://github.com/ismaelcontelles40-debug/miproyecto.git
```
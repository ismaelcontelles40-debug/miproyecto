# TaskFlow - Full Stack Task Manager

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

Documentación técnica:
[readme-tecnico.md](docs/readme-tecnico.md)

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

```

# Instalación

## 1. Clonar repositorio

```bash
git clone https://github.com/ismaelcontelles40-debug/miproyecto.git
```
## 2. Instalar dependencias backend

```bash
cd server
npm install
```

## 3. Crear archivo `.env`

```env
PORT=3000
```

## 4. Ejecutar backend

```bash
npm run dev
```

Servidor:

```txt
http://localhost:3000
```

## 5. Ejecutar frontend

Abrir `index.html` con Live Server.

---

# Endpoints principales

## Obtener tareas

```http
GET /api/v1/tasks
```

## Crear tarea

```http
POST /api/v1/tasks
```

## Completar tarea

```http
PATCH /api/v1/tasks/:id
```

## Eliminar tarea

```http
DELETE /api/v1/tasks/:id
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

# Testing

La API fue probada utilizando:
- Thunder Client
- navegador
- Fetch API

---

# Mejoras futuras

- Base de datos MongoDB
- Autenticación de usuarios
- Deploy en Vercel o Render
- Swagger real
- Persistencia completa

---

# Autor

Ismael Contelles - 2026
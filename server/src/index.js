const loggerAcademico = require("./middlewares/logger.middleware");
const express = require("express");
const cors = require("cors");
const { port } = require("./config/env");
const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggerAcademico);

app.get("/", (req, res) => {
  res.json({
    message: "API de TaskFlow funcionando correctamente",
  });
});

app.use("/api/v1/tasks", taskRoutes);

// Middleware global de errores
app.use((err, req, res, next) => {
  if (err.message === "NOT_FOUND") {
    return res.status(404).json({
      error: "Recurso no encontrado",
    });
  }

  console.error(err);

  res.status(500).json({
    error: "Error interno del servidor",
  });
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
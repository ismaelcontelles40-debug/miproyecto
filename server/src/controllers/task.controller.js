const taskService = require("../services/task.service");

const prioridadesValidas = ["low", "medium", "high"];

const getTasks = (req, res) => {
  const tasks = taskService.obtenerTodas();
  res.json(tasks);
};

const createTask = (req, res) => {
  const { titulo, prioridad } = req.body;

  if (!titulo || typeof titulo !== "string" || titulo.trim().length < 3) {
    return res.status(400).json({
      error: "El título debe tener al menos 3 caracteres",
    });
  }

  if (!prioridadesValidas.includes(prioridad)) {
    return res.status(400).json({
      error: "La prioridad debe ser low, medium o high",
    });
  }

  const nuevaTarea = taskService.crearTarea({
    titulo: titulo.trim(),
    prioridad,
  });

  res.status(201).json(nuevaTarea);
};

const toggleTask = (req, res) => {
  const id = Number(req.params.id);
  const tarea = taskService.completarTarea(id);
  res.json(tarea);
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);
  taskService.eliminarTarea(id);
  res.status(204).send();
};

module.exports = {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
};
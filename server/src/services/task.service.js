let tasks = [];

const obtenerTodas = () => {
  return tasks;
};

const crearTarea = (data) => {
  const nuevaTarea = {
    id: Date.now(),
    titulo: data.titulo,
    prioridad: data.prioridad,
    completada: false,
    creadaEn: new Date().toISOString(),
  };

  tasks.push(nuevaTarea);
  return nuevaTarea;
};

const completarTarea = (id) => {
  const tarea = tasks.find((t) => t.id === id);

  if (!tarea) {
    throw new Error("NOT_FOUND");
  }

  tarea.completada = !tarea.completada;
  return tarea;
};

const eliminarTarea = (id) => {
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    throw new Error("NOT_FOUND");
  }

  tasks.splice(index, 1);
};

module.exports = {
  obtenerTodas,
  crearTarea,
  completarTarea,
  eliminarTarea,
};
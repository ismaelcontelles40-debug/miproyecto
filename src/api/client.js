const API_URL = "http://localhost:3000/api/v1/tasks";

export const getTasks = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener las tareas");
  }

  return response.json();
};

export const createTask = async (title, priority) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo: title,
      prioridad: priority,
    }),
  });

  if (!response.ok) {
    throw new Error("Error al crear la tarea");
  }

  return response.json();
};

export const toggleTask = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error("Error al completar la tarea");
  }

  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar la tarea");
  }
};
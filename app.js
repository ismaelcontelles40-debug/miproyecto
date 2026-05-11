import {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
} from "./src/api/client.js";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const priorityInput = document.getElementById("priority-input");
const list = document.getElementById("task-list");

const totalEl = document.getElementById("total");
const completedEl = document.getElementById("completed");
const pendingEl = document.getElementById("pending");

const searchInput = document.getElementById("search-input");
const sortInput = document.getElementById("sort-input");
const completeAllBtn = document.getElementById("complete-all");
const clearCompletedBtn = document.getElementById("clear-completed");
const themeToggleBtn = document.getElementById("theme-toggle");

let tasks = [];
let currentFilter = "all";
let searchText = "";
let currentSort = "created";

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggleBtn.textContent = "Modo claro";
}

async function loadTasks() {
  try {
    showLoading();
    tasks = await getTasks();
    renderTasks();
  } catch (error) {
    showError("No se pudieron cargar las tareas. Revisa que el servidor esté encendido.");
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = input.value.trim();

  if (title === "") {
    showError("La tarea no puede estar vacía.");
    return;
  }

  try {
    await createTask(title, priorityInput.value);
    input.value = "";
    priorityInput.value = "low";
    await loadTasks();
  } catch (error) {
    showError("No se pudo crear la tarea.");
  }
});

function renderTasks() {
  list.innerHTML = "";

  let filteredTasks = [...tasks];

  if (currentFilter === "completed") {
    filteredTasks = filteredTasks.filter((task) => task.completada);
  } else if (currentFilter === "pending") {
    filteredTasks = filteredTasks.filter((task) => !task.completada);
  }

  if (searchText !== "") {
    filteredTasks = filteredTasks.filter((task) =>
      task.titulo.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  filteredTasks = sortTasks(filteredTasks);

  if (filteredTasks.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.textContent = "No hay tareas para mostrar";
    list.appendChild(emptyMessage);
  }

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.className = "task-info";

    const title = document.createElement("span");
    title.textContent = task.titulo;
    title.className = "task-title";

    if (task.completada) {
      title.classList.add("completed");
    }

    const priority = document.createElement("span");
    priority.className = `priority ${task.prioridad}`;
    priority.textContent = `Prioridad: ${getPriorityText(task.prioridad)}`;

    taskInfo.appendChild(title);
    taskInfo.appendChild(priority);

    taskInfo.addEventListener("click", async () => {
      try {
        await toggleTask(task.id);
        await loadTasks();
      } catch (error) {
        showError("No se pudo actualizar la tarea.");
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.setAttribute("aria-label", `Eliminar tarea ${task.titulo}`);

    deleteBtn.addEventListener("click", async (e) => {
      e.stopPropagation();

      try {
        await deleteTask(task.id);
        await loadTasks();
      } catch (error) {
        showError("No se pudo eliminar la tarea.");
      }
    });

    li.appendChild(taskInfo);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  updateStats();
}

function sortTasks(taskList) {
  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3,
  };

  if (currentSort === "alphabetical") {
    return taskList.sort((a, b) => a.titulo.localeCompare(b.titulo));
  }

  if (currentSort === "priority") {
    return taskList.sort(
      (a, b) => priorityOrder[a.prioridad] - priorityOrder[b.prioridad]
    );
  }

  return taskList.sort((a, b) => a.id - b.id);
}

function getPriorityText(priority) {
  if (priority === "high") return "Alta";
  if (priority === "medium") return "Media";
  return "Baja";
}

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completada).length;
  const pending = total - completed;

  totalEl.textContent = total;
  completedEl.textContent = completed;
  pendingEl.textContent = pending;
}

function showLoading() {
  list.innerHTML = "";

  const loading = document.createElement("li");
  loading.textContent = "Cargando tareas...";
  list.appendChild(loading);
}

function showError(message) {
  list.innerHTML = "";

  const error = document.createElement("li");
  error.textContent = message;
  list.appendChild(error);
}

const filterButtons = document.querySelectorAll("#filters button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

searchInput.addEventListener("input", () => {
  searchText = searchInput.value.trim();
  renderTasks();
});

sortInput.addEventListener("change", () => {
  currentSort = sortInput.value;
  renderTasks();
});

completeAllBtn.addEventListener("click", async () => {
  try {
    for (const task of tasks) {
      if (!task.completada) {
        await toggleTask(task.id);
      }
    }

    await loadTasks();
  } catch (error) {
    showError("No se pudieron completar todas las tareas.");
  }
});

clearCompletedBtn.addEventListener("click", async () => {
  try {
    const completedTasks = tasks.filter((task) => task.completada);

    for (const task of completedTasks) {
      await deleteTask(task.id);
    }

    await loadTasks();
  } catch (error) {
    showError("No se pudieron eliminar las tareas completadas.");
  }
});

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggleBtn.textContent = isDark ? "Modo claro" : "Modo oscuro";
});

loadTasks();
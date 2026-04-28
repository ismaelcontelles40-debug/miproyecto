const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

const totalEl = document.getElementById("total");
const completedEl = document.getElementById("completed");
const pendingEl = document.getElementById("pending");

const searchInput = document.getElementById("search-input");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";
let searchText = "";

/**
 * Crea una nueva tarea y la añade al array de tareas.
 */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = input.value.trim();

  if (title === "") return;

  const task = {
    id: Date.now(),
    title: title,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);
  input.value = "";

  renderTasks();
});

/**
 * Renderiza la lista de tareas en el DOM aplicando filtros y búsqueda.
 * También actualiza LocalStorage y las estadísticas.
 */
function renderTasks() {
  list.innerHTML = "";

  let filteredTasks = tasks;

  if (currentFilter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  } else if (currentFilter === "pending") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  if (searchText !== "") {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");

    li.textContent = task.title;

    li.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.setAttribute("aria-label", `Eliminar tarea ${task.title}`);

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      renderTasks();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  saveTasks();
  updateStats();
}

/**
 * Actualiza las estadísticas de tareas totales, completadas y pendientes.
 */
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  totalEl.textContent = total;
  completedEl.textContent = completed;
  pendingEl.textContent = pending;
}

/**
 * Guarda el array de tareas en LocalStorage.
 */
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

renderTasks();

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
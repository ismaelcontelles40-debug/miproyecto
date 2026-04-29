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

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";
let searchText = "";
let currentSort = "created";

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggleBtn.textContent = "Modo claro";
}

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
    priority: priorityInput.value,
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);
  input.value = "";
  priorityInput.value = "low";

  renderTasks();
});

/**
 * Renderiza la lista de tareas aplicando filtros, búsqueda y orden.
 */
function renderTasks() {
  list.innerHTML = "";

  let filteredTasks = [...tasks];

  if (currentFilter === "completed") {
    filteredTasks = filteredTasks.filter((task) => task.completed);
  } else if (currentFilter === "pending") {
    filteredTasks = filteredTasks.filter((task) => !task.completed);
  }

  if (searchText !== "") {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  filteredTasks = sortTasks(filteredTasks);

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.className = "task-info";

    const title = document.createElement("span");
    title.textContent = task.title;
    title.className = "task-title";

    if (task.completed) {
      title.classList.add("completed");
    }

    const priority = document.createElement("span");
    priority.className = `priority ${task.priority}`;
    priority.textContent = `Prioridad: ${getPriorityText(task.priority)}`;

    taskInfo.appendChild(title);
    taskInfo.appendChild(priority);

    taskInfo.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.setAttribute("aria-label", `Eliminar tarea ${task.title}`);

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      renderTasks();
    });

    li.appendChild(taskInfo);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  saveTasks();
  updateStats();
}

/**
 * Ordena las tareas según creación, alfabético o prioridad.
 */
function sortTasks(taskList) {
  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3,
  };

  if (currentSort === "alphabetical") {
    return taskList.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (currentSort === "priority") {
    return taskList.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  }

  return taskList.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}

/**
 * Devuelve el texto visible de la prioridad.
 */
function getPriorityText(priority) {
  if (priority === "high") return "Alta";
  if (priority === "medium") return "Media";
  return "Baja";
}

/**
 * Actualiza las estadísticas de tareas.
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
 * Guarda las tareas en LocalStorage.
 */
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
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

completeAllBtn.addEventListener("click", () => {
  tasks = tasks.map((task) => ({
    ...task,
    completed: true,
  }));

  renderTasks();
});

clearCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  renderTasks();
});

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggleBtn.textContent = isDark ? "Modo claro" : "Modo oscuro";
});

renderTasks();
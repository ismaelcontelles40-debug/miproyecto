const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

const totalEl = document.getElementById("total");
const completedEl = document.getElementById("completed");
const pendingEl = document.getElementById("pending");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") return;

  const task = {
    id: Date.now(),
    title: input.value,
    completed: false,
  };

  tasks.push(task);
  input.value = "";

  renderTasks();
});

function renderTasks() {
  list.innerHTML = "";

  let filteredTasks = tasks;

  if (currentFilter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  } else if (currentFilter === "pending") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");

    li.textContent = task.title;

    // Marcar completada
    li.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    // Estilo completada
    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    // Botón eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

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

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  totalEl.textContent = total;
  completedEl.textContent = completed;
  pendingEl.textContent = pending;
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 👉 Render inicial
renderTasks();

// 👉 Filtros
const filterButtons = document.querySelectorAll("#filters button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});
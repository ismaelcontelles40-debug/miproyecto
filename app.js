const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

const totalEl = document.getElementById("total");
const completedEl = document.getElementById("completed");
const pendingEl = document.getElementById("pending");

let tasks = [];

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

  tasks.forEach((task) => {
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
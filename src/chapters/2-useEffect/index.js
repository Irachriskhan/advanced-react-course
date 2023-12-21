const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

let tasks = []; // Array to store tasks

// Load tasks from localStorage (if available)
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  renderTasks();
}

// Add task functionality
addButton.addEventListener("click", () => {
  const newTask = taskInput.value;
  if (newTask) {
    tasks.push(newTask);
    renderTasks();
    taskInput.value = "";
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to localStorage
  }
});

// Render tasks to the list
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    // Add a "remove" button to each task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
      const index = tasks.indexOf(task);
      tasks.splice(index, 1);
      renderTasks();
      localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
    });
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
  });
}

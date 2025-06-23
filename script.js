let input = document.getElementById("inputField");
let btn = document.getElementById("addBtn");
let ul = document.getElementById("notes");

let tasks = JSON.parse(localStorage.getItem("savedTasks")) || [];

// ✅ Render saved tasks on load
tasks.forEach((task, index) => {
  createTaskElement(task, index);
});

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push(input.value);
  localStorage.setItem("savedTasks", JSON.stringify(tasks));
  createTaskElement(input.value, tasks.length - 1);
  input.value = "";
});

// ✅ Function to create task element with delete button
function createTaskElement(task, index) {
  let li = document.createElement("li");
  li.textContent = task;

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "10px";
  delBtn.style.backgroundColor = "#dc3545";
  delBtn.style.color = "white";
  delBtn.style.border = "none";
  delBtn.style.borderRadius = "5px";
  delBtn.style.padding = "5px 10px";
  delBtn.style.cursor = "pointer";

  delBtn.addEventListener("click", () => {
    ul.removeChild(li);
    tasks.splice(index, 1);
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
  });

  li.appendChild(delBtn);
  ul.appendChild(li);
}

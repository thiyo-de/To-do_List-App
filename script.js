let input = document.getElementById("inputField");
let btn = document.getElementById("addBtn");
let ul = document.getElementById("notes");

btn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please Add Your Notes");
  } else {

    let getNotes = JSON.parse(localStorage.getItem("notes")) || [];

    localStorage.setItem("notes", JSON.stringify(input.value));

    let li = document.createElement("li");
    li.textContent = input.value;
    ul.append(li);
    input.value = "";

    let lineBtn = document.createElement("button");
    lineBtn.textContent = "Finished";
    lineBtn.addEventListener("click", () => {
      li.classList.toggle("crossed");
    });
    li.append(lineBtn);

    let DelBtn = document.createElement("button");
    DelBtn.textContent = "Delete";
    DelBtn.addEventListener("click", () => {
      li.remove();
    });
    li.append(DelBtn);
  }
});

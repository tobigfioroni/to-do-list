const list = document.querySelector("#list");
const input = document.querySelector("#input");
const addTaskBtn = document.querySelector("#add-task");

const currentDate = new Date();

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
};

const formattedDate = currentDate.toLocaleDateString('en-US', options);

const dateElement = document.getElementById('date');
dateElement.textContent = formattedDate;

function addTask(task) {
  const elements = `
        <li id="elements">
            <i class="fas fa-circle co" data="seleccionado" id="0"></i>
            <p class="text-tasks">${task}</p>
            <i class="fas fa-trash de" data="borrado" id="0"></i>
        </li>
    `;
  list.insertAdjacentHTML("afterbegin", elements);

  const trashBtn = list.querySelector(".fa-trash");
  trashBtn.addEventListener("click", () => {
    trashBtn.parentNode.remove();
  });

  const checked = document.querySelector(".fa-circle");
  const textTasks = document.querySelector(".text-tasks");

  checked.addEventListener("click", () => {
    if (checked.classList.contains("fa-circle")) {
      checked.classList.add("fa-check-circle");
      checked.classList.remove("fa-circle");
      textTasks.style.textDecoration = "line-through";
    } else {
      checked.classList.add("fa-circle");
      checked.classList.remove("fa-check-circle");
      textTasks.style.textDecoration = "none";
    }
  });
}

addTaskBtn.addEventListener("click", () => {
  const textTasks = input.value;
  if (textTasks) {
    addTask(textTasks);
  }
  input.value = "";
});

function enterKey(event) {
  const textTasks = input.value;
  if (event.key === "Enter") {
    if (textTasks) {
      addTask(textTasks);
    }
    input.value = "";
  }
}

document.addEventListener("keyup", enterKey);
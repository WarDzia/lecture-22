const addTask = document.querySelector("#addTask");

const taskList = document.querySelector("#taskList");

addTask.addEventListener("click", function () {
  let taskInput = document.querySelector("#taskInput");

  if (taskInput.value.trim() === "") return;

  const newTask = document.createElement("li");
  newTask.textContent = taskInput.value;

  taskList.uppendChild(newTask);

  taskInput.value = "";
  console.log(newTask);
});

// const addTask = document.querySelector("#addTask");

// const taskList = document.querySelector("#taskList");

// addTask.addEventListener("click", function () {
//   let taskInput = document.querySelector("#taskInput");

//   //
//   if (taskInput.value.trim() === "") return;

//   //     <li></li>
//   const newTask = document.createElement("li");
//   newTask.textContent = taskInput.value;

//   newTask.addEventListener("click", function () {
//     newTask.remove();
//   });

//   taskList.appendChild(newTask);

//   console.log();

//   taskInput.value = "";
// });

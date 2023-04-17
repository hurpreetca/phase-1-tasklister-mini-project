document.addEventListener("DOMContentLoaded", () => {
  addingEventListener();
});

// Create an array of object to store value (which are going to be sorted using their priorties later on)
let taskObjArr= []
//Get the form and add an event Listener to it

function addingEventListener() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);

    document.getElementById("sort-tasks").addEventListener("change", sortTasks)
}

//SUBMIT form event handler (create New Task)

function handleFormSubmit(e) {
  e.preventDefault();
  console.log(e);
  const task = e.target[0].value;
  const priorityLevel = parseInt(e.target[1].value)
  const dueDate= e.target[2].value

  const taskObj= {task,priorityLevel,dueDate}
  taskObjArr.push(taskObj)

  console.log(taskObjArr)
  sortTasks()
  displayTasks();
}

//Display Task List Function (MY Todos:)

function displayTasks() {
  const taskUl = document.getElementById("tasks");
  taskUl.innerHTML = ""
  
  taskObjArr.forEach((task)=> {
    
    const taskLi = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const editBtn = document.editBtn("button");

    deleteBtn.textContent = "x"
    editBtn.textContent = "EDIT"
    deleteBtn.addEventListener("click", (e) => deleteTask(e, task))
    deleteBtn.addEventListener("click", (e) => editTask(e, task))
    taskLi.textContent = task.task + " " + task.dueDate + " ";
    taskLi.style.color = getPriorityColor(task.priorityLevel);
    taskLi.appendChild(deleteBtn);
    taskLi.appendChild(editBtn)
    taskUl.appendChild(taskLi);
  })
}

//Delete Task Button Function

function deleteTask(e, task) {
  taskObjArr = taskObjArr.filter((element) => element.task !== task.task)
  
  e.target.parentNode.remove()
}


//Edit Task Button Function

function editTask(e){
  taskObjArr = taskObjArr.
}

// Change colors according to the priorities.

function getPriorityColor(priorityLevel) {
  if (priorityLevel === 1) {
    return "red";
  } else if (priorityLevel === 2) {
    return "green";
  } else {
    return "blue";
  }
}

//Sorting function to sort ArrayObject
function sortTasks() {
  console.log("in sortTasks")
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "h-l") {
     taskObjArr.sort((a, b) => a.priorityLevel - b.priorityLevel)
  } else {
     taskObjArr.sort((a, b) => b.priorityLevel - a.priorityLevel)
  }
  console.log(taskObjArr)
  displayTasks()
}
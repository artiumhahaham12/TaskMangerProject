
import TaskManager from "./TaskManager.js";
let manager = new TaskManager();
console.log(manager);
/* manager.addTask("HW");
manager.addTask("Claen the mmd"); */ 
console.log(manager);

window.addNewTask = function addNewTask() {
  let description = document.getElementById("descrption-input").value;
    manager.addTask(description);
    document.getElementById("descrption-input").value = "";
  showTask();
};
function showTask() {
    console.log(manager);
  document.getElementById("activeTasks").innerHTML = "";
  document.getElementById("completedTasks").innerHTML = "";
    for (let task of manager.tasks) {
        console.log(task.completed,task.id);
        
        if (task.completed) {
        document.getElementById(
          "completedTasks"
        ).innerHTML += `<div id="task-${task.id}">  <li class='list-group-item d-inline-block w-50'> ${task.description}</li> <button onclick="completeTask(${task.id})" class='btn btn-success me-1'> <i class="fa-solid fa-check"></i> </button><button class='btn btn-primary me-1'> <i class="text-light fa-sharp fa-solid fa-pencil"></i> </button><button onclick="deleteTask(${task.id})" class='btn btn-danger me-1'> <i class="fa-solid fa-trash"></i> </button </div>
  `;
        }
        else {
            document.getElementById(
              "activeTasks"
            ).innerHTML += `<div id="task-${task.id}">  <li class='list-group-item d-inline-block w-50'> ${task.description}</li> <button onclick="completeTask(${task.id})" class='btn btn-success me-1'> <i class="fa-solid fa-check"></i> </button><button onclick="updateDescription(${task.id})" class='btn btn-primary me-1'> <i class="text-light fa-sharp fa-solid fa-pencil"></i> </button><button onclick="deleteTask(${task.id})" class='btn btn-danger me-1'> <i class="fa-solid fa-trash"></i> </button </div>
  `;
        }
    
    }
    
}

showTask();
window.completeTask = function completeTask(id) {
    manager.completeTask(id)
    showTask();
    /* edit prompt */
}
window.deleteTask = function deleteTask(id) {
    manager.deleteTask(id);
    console.log(manager.tasks)
    showTask();
  /* edit prompt */
};
/* ${manager.tasks[id].id}/* */
window.updateDescription = function updateDescription(id){
    console.log(1);
    
    document.querySelector("#add-button").innerHTML = `
    <i class="text-light fa-sharp fa-solid fa-pencil"></i> 
    `;
    let btn = document.getElementById("add-button");
    
    /*btn - warning; */
    btn.classList.remove("btn-warning")
    btn.classList.add("btn-primary")
    document.getElementById("add-button").onclick = function() {
        console.log(document.getElementById("descrption-input").value);
        console.log(id);
        
        manager.updateTaskDescription(
          id,
          document.getElementById("descrption-input").value
        );
    
    
        showTask();
        document.querySelector("#add-button").innerText = `+
    `;
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-warning");
        document.getElementById("add-button").onclick = addNewTask;
        document.getElementById("descrption-input").value = "";
      };
    console.log(btn);
    document.getElementById(
      "descrption-input"
    ).value = `${manager.tasks[id].description}`;
    
    console.log(document.getElementById("descrption-input").value);
}


console.log(document.getElementById("add-button").onclick);

import Task from "./Task.js";

localStorage.setItem("id",JSON.stringify(-1))  


class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem("tasks"))||[]
    
      localStorage.setItem("tasks", this.tasks);
  }
    addTask(description) {

        let id = localStorage.getItem("id");
        id++
        localStorage.setItem("id",id)
    localStorage.setItem("id", JSON.stringify(id));
        this.tasks.push(new Task(description));
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
    deleteTask(task_id) {
        let id = JSON.parse(localStorage.getItem("id"))
        console.log(id);
        
      id--;
      
    localStorage.setItem("id", JSON.stringify(id));
    this.tasks  = this.tasks.filter((task) => {
      console.log(task.id, task_id);
      return task.id != task_id;
    });
    
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
  updateTaskDescription(task_id, description) {
    let task_index = this.tasks.findIndex((task) => {
      return task.id == task_id;
    });
      console.log(task_index);
      console.log(`task_index = ${task_index},task_id = ${task_id},descrpion = ${description},this.tasks = ${this.tasks}`);
      console.log(this.tasks);
      
      
      this.tasks[task_index].description = description;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
  completeTask(task_id) {
    let task_index = this.tasks.findIndex((task) => {
      return task.id == task_id;
    });
      this.tasks[task_index].completed = true;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}

export default TaskManager;
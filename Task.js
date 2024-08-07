

class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    
    this.id = JSON.parse(localStorage.getItem("id"));
    localStorage.setItem("id", JSON.stringify(this.id));
    
  }
}
export default Task;

/** @format */

export class Task {
  constructor(title, description, priority, dueDate, done) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.done = done;
  }

  isDone() {
    this.done === false ? (this.done = true) : (this.done = false);
  }
}

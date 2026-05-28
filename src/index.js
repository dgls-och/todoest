/** @format */

const todoList = (function () {
  const list = [];

  const getList = () => list;

  const addCategory = (ctgyName) => {
    newName = ctgyName.toLowerCase().trim();
    const category = [];
    category.push(newName);
    list.push(category);
  };

  const removeCategory = (ctgyName) => {
    list.forEach((category) => {
      if (category[0] === ctgyName) {
        list.splice(list.indexOf(category), 1);
      }
    });
  };

  const addTask = (ctgyName, task) => {
    list.forEach((category) => {
      if (category[0] === ctgyName) {
        category.push(task);
      }
    });
  };

  const removeTask = (taskTitle) => {
    list.forEach((category) => {
      category.forEach((item) => {
        if (item.title === taskTitle) {
          category.splice(category.indexOf(item), 1);
        }
      });
    });
  };

  return { getList, addCategory, addTask, removeCategory, removeTask };
})();

class Task {
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

const todoDisplay = (function () {
  const categoryList = document.querySelector("#categories #category-list");
  const taskList = document.querySelector("#items #task-list");

  const printCategory = (categoryId) => {
    const list = todoList.getList();
    list.forEach((category) => {
      if (category[0] === categoryId) {
        const categoryBttn = document.createElement("button");
        categoryBttn.textContent = category[0];
        categoryBttn.dataset.id = category[0];

        categoryList.appendChild(categoryBttn);
      }
    });
  };

  return { printCategory };
})();

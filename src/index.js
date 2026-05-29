/** @format */

const todoList = (function () {
  const list = [];

  const getList = () => list;

  const addCategory = (ctgyName) => {
    newName = ctgyName.toLowerCase().trim();
    switch (true) {
      case list.length > 0:
        list.forEach((item) => {
          if (item[0] === ctgyName) {
            return;
          }
        });
        break;
      default:
        const category = [];
        category.push(newName);
        list.push(category);
    }
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
  //const catsBttn = document.querySelector("#categories button");
  //const itemsBttn = document.querySelector("#items button");

  const printCategory = (categoryId) => {
    const list = todoList.getList();
    list.forEach((category) => {
      if (category[0] === categoryId) {
        const categoryBttn = document.createElement("button");
        categoryBttn.textContent = category[0];
        categoryBttn.dataset.id = category[0];
        categoryList.textContent = "";
        categoryList.appendChild(categoryBttn);
      }
    });
  };

  const printTask = (categoryId) => {
    const list = todoList.getList();
    list.forEach((category) => {
      if (category[0] === categoryId) {
        const tasks = category.slice(1);
        tasks.forEach((task) => {
          const taskCard = document.createElement("div");
          taskCard.classList.add("card");

          const cardText = document.createElement("div");

          const title = document.createElement("h3");
          title.textContent = task.title;

          const description = document.createElement("p");
          description.textContent = task.description;

          const priority = document.createElement("p");
          priority.textContent = task.priority;

          const dueDate = document.createElement("p");
          dueDate.textContent = task.dueDate;

          const doneForm = document.createElement("form");
          const done = document.createElement("input");
          done.setAttribute("type", "checkbox");
          done.checked = task.done;
          doneForm.appendChild(done);

          cardText.appendChild(title);
          cardText.appendChild(description);
          cardText.appendChild(priority);
          cardText.appendChild(dueDate);

          taskCard.appendChild(doneForm);
          taskCard.appendChild(cardText);

          taskList.appendChild(taskCard);
        });
      }
    });
  };

  return { printCategory, printTask };
})();

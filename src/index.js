/** @format */

const todoList = (function () {
  const list = [];

  const getList = () => list;

  const addCategory = (ctgyName) => {
    const category = [];
    category.push(ctgyName);
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
  const addProjectBttn = document.querySelector("#add-proj-bttn");
  const addTaskBttn = document.querySelector("#add-task-bttn");

  addProjectBttn.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("#proj input");
    if (input.value !== "") {
      const project = input.value;
      input.value = "";
      todoList.addCategory(project);
      categoryList.textContent = "";
      printCategory();
      document.querySelector("#proj").close();
    }
  });

  addTaskBttn.addEventListener("click", (e) => {
    e.preventDefault();
    const [title, description, dueDate] =
      document.querySelectorAll("#task input");
    const priority = document.querySelectorAll("#task selector");

    todoList.addTask(
      addTaskBttn.dataset.id,
      new Task(title.value, description.value, priority, dueDate.value, false),
    );
    title.value = "";
    description.value = "";
    priority.value = "";
    dueDate.value = "";
    taskList.textContent = "";
    printTask(addTaskBttn.dataset.id);
    document.querySelector("#task").close();
  });

  const printCategory = () => {
    const list = todoList.getList();
    list.forEach((category) => {
      const categoryBttn = document.createElement("button");
      categoryBttn.textContent = category[0];
      categoryBttn.dataset.id = category[0];
      categoryBttn.addEventListener("click", (e) => {
        e.preventDefault();
        addTaskBttn.dataset.id = categoryBttn.dataset.id;
        document.querySelector("#items header button").disabled = false;
        taskList.textContent = "";
        printTask(categoryBttn.dataset.id);
      });
      categoryList.appendChild(categoryBttn);
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

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
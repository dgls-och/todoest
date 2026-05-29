/** @format */

export const todoList = (function () {
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

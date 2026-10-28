export class TodoList {
    #list = {};

    getList() {
        return { ...this.#list };
    }

    addCategory(category) {
        if (Object.hasOwn(this.#list, category)) {
            return false;
        }
        this.#list[category] = [];
        return true;
    }

    removeCategory(category) {
        for (let item in this.#list) {
            if (item === category) delete this.#list[category];
        }
    }

    addTask(category, task) {
        for (let item in this.#list) {
            if (item === category) {
                this.#list[category].push(task);
            }
        }
    }

    removeTask(category, taskTitle) {
        const array = this.#list[category];
        array.forEach((task) => {
            if (task.title === taskTitle) {
                array.splice(array.indexOf(task), 1);
            }
        });
    }
}

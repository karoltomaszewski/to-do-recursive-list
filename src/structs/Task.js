class Task {
    constructor (name) {
        this.name = name;
        this.id = Date.now();
        this.children = [];        
        this.done = false;
        this.parent = null;
    }

    hasChildren() {
        return this.children.length > 0;
    }

    hasParent() {
        return this.parent !== null;
    }

    setParent(task) {
        this.parent = task;
    } 

    addChild(subtask) {
        subtask.setParent(this);

        this.children.push(subtask);

        if (this.done) {
            this.done = false;
            
            if (this.hasParent()) {
                this.parent.setDoneByChildrenStates();
            }
        }
    }

    toggleDone() {
        this.done = !this.done;

        if (this.hasParent()) {
            this.parent.setDoneByChildrenStates();
        }

        this.setChildrenDone(this);
    }

    setDoneByChildrenStates() {
        this.done = this.hasChildren() && this.children.every(el => el.done === true);

        if (this.hasParent()) {
            this.parent.setDoneByChildrenStates();
        }
    }

    setChildrenDone(task) {
        if (task.hasChildren()) {
            for (const t of task.children) {
                t.done = task.done;
                t.setChildrenDone(t);
            }
        }
    }
}

export default Task;
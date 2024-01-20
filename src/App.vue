<script>
import IconGithub from './components/IconGithub.vue';
import TheList from './components/TheList.vue';
import Task from './structs/Task.js';
import TheDimmer from './components/TheDimmer.vue';
import NewTaskModal from './components/NewTaskModal.vue';

export default {
  components: {
    IconGithub,
    TheList,
    TheDimmer,
    NewTaskModal
  },
  data() {
    return {
      showModal: false,
      addSubtaskTo: null,
      tasks: [],
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    createNewTask(data) {
      if (this.addSubtaskTo === null) {
        this.tasks.push(new Task(data.name));
      } else {
        const task = this.findTask(this.tasks, this.addSubtaskTo);

        task.addChild(new Task(data.name));
      }

      this.toggleModal();
      this.addSubtaskTo = null;
    },
    changeTaskState(data) {
      const task = this.findTask(this.tasks, data.id);
      task.toggleDone();
    },
    addSubtask(data) {
      this.addSubtaskTo = data.id;

      this.toggleModal();
    },
    removeTask(data) {
      const task = this.findTask(this.tasks, data.id);

      if (task.hasParent()) {
        task.parent.children = task.parent.children.filter(el => el.id !== data.id);

        task.parent.setDoneByChildrenStates();
      } else {
        this.tasks = this.tasks.filter(el => el.id !== data.id);
      }
    },
    findTask(tasks, id) {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
          return tasks[i];
        }

        const lookInSubtasks = this.findTask(tasks[i].children, id);

        if (typeof lookInSubtasks !== 'undefined') {
          return lookInSubtasks;
        }
      }
    }
  }
}

</script>

<template>

  <TheDimmer v-if="showModal" @click="toggleModal" />
  <NewTaskModal v-if="showModal" @create="createNewTask" />

  <div class="list-wrapper">
    <div class="header">
      <h1 class="green">Things to do:</h1>
      <button @click="toggleModal()">New task</button>
    </div>
    <TheList 
        :tasks="tasks" 
        @changeTaskState="changeTaskState"
        @addSubtask="addSubtask"
        @removeTask="removeTask"
    />
  </div>
  <div class="github">
    <a href="https://github.com/karoltomaszewski/bmi" target="_blank">
      <IconGithub /> <span>karoltomaszewski</span>
    </a>
  </div>
</template>

<style scoped>
  .github {
    margin-top: 15px;
  }

  .github a {
    display: flex;
    align-items: center;
  }

  .github svg {
    fill: #555;
    margin-right: 5px;
    transition: 0.5s;
  }

  .github:hover svg {
    fill: #888;
  }

  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #888;
    padding-bottom: 16px;
  }

  .header button {
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background: #333;
    font-weight: bold;
    color: white;
    padding: 0 32px;
    transition: 0.5s;
  }

  .header button:hover {
    background: #2c2c2c;
  }

  .list-wrapper {
    width: 100%;
    margin: auto;
    padding: 24px;
    border-radius: 12px;
    background: #181818;
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

    @media only screen and (max-width: 1024px) {
    h1 {
      font-size: 20px;
    }

    .header {
      flex-direction: column;
    }

    .header button {
      padding: 8px 32px;
      margin-top: 4px;
    }
  }
</style>

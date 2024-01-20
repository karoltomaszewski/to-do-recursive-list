<script>
export default {
    data() {
        return {
            newTaskName: '',
            error: false,
        }
    },
    methods: {
        createNewTask() {
            this.error = false;

            if (this.newTaskName.trim().length === 0) {
                this.error = true;
            }

            if (!this.error) {
                this.$emit('create', {
                    name: this.newTaskName
                })
            }
        }
    }
}
</script>

<template>
    <div class="new-task-modal">
        <h2 class="green">Add new task</h2>
        <input v-model="newTaskName" placeholder="Name of task">
        <div class="error" v-if="error">
            Name can not be empty
        </div>
        <button @click="createNewTask()">Add</button>
    </div>
</template>

<style scoped>
  .new-task-modal {
    position: fixed;
    top: 20%;
    left: 36%;
    width: 28%;
    height: 50%;
    z-index: 1000;
    background: #333;
    padding: 24px;
    border: solid white 2px;
    border-radius: 12px;
  }

  input, button {
    width: 100%;
    padding: 6px 12px;
    border-radius: 4px;
    margin-top: 4px;
  }

    .error {
        color: rgb(245, 81, 81);
    }

    button {
        cursor: pointer;
        background: hsla(160, 100%, 37%, 1);
        font-weight: bold;
        color: #181818;
        transition: 0.5s ;
    }

    button:hover {
        background: rgb(0, 152, 101);
    }
</style>
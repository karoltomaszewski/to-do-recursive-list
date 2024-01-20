<script>
import ListItem from './ListItem.vue';

export default {
    components: {
        ListItem
    },
    props: {
        tasks: {
            type: Array
        }
    },
    methods: {
        changeTaskState(data) {
            this.$emit('changeTaskState', data);
        },
        addSubtask(data) {
            this.$emit('addSubtask', data);
        },
        removeTask(data) {
            this.$emit('removeTask', data);
        }
    }
}
</script>

<template>
    <div class="list">
        <div v-if="tasks.length === 0">
            You don't have any tasks
        </div>
        <ListItem v-for="task in tasks" :key="task.id" :task="task" @changeTaskState="changeTaskState" @addSubtask="addSubtask" @removeTask="removeTask" />
    </div>
</template>

<style scoped>
.list {
    padding-top: 8px;
    padding-right: 8px;
    flex: 1;
    overflow: auto;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
<script>
import Task from '@/structs/Task'
import TheCheckbox from './TheCheckbox.vue';
import IconBin from './IconBin.vue';
import ListItemButton from './ListItemButton.vue';
export default {
    components: {
        TheCheckbox,
        ListItemButton,
        IconBin
    },
    props: {
        task: {
            type: Object,
            required: true,
        }
    },
    methods: {
        changeTaskState() {
            this.$emit('changeTaskState', {
                id: this.task.id
            });
        },
        changeSubtaskState(data) {
            this.$emit('changeTaskState', data);
        },
        addSubtask() {
            this.$emit('addSubtask', {
                id: this.task.id
            })
        },
        handleAddSubtask(data) {
            this.$emit('addSubtask', data);
        },
        removeTask() {
            this.$emit('removeTask', {
                id: this.task.id
            })
        },
        handleRemoveTask(data) {
            this.$emit('removeTask', data);
        }
    }
}
</script>

<template>
    <div class="list-node">
        <div class="task">
            <TheCheckbox :active="task.done" @click="changeTaskState()" />
            
            <span class="name">
                {{ task.name }}
            </span>

            <ListItemButton @click="removeTask()">
                <IconBin class="bin" />
            </ListItemButton>

            <ListItemButton @click="addSubtask()">
                +
            </ListItemButton>
        </div>
        <div class="subtasks" v-if="task.hasChildren()">
            <ListItem v-for="subtask in task.children" :key="subtask.id" :task="subtask" @changeTaskState="changeSubtaskState" @removeTask="handleRemoveTask"  @addSubtask="handleAddSubtask" />
        </div>
    </div>
</template>

<style scoped>
.bin {
    fill: #ccc;
}

.list-node {
    width: 100%;
}

.subtasks {
    padding-left: 32px;
}

.task {
    display: flex;
    background: #2c2c2c;
    padding: 8px 16px;
    margin-bottom: 8px;
    border-radius: 8px;
}

.name {
    flex: 1;
}
</style>
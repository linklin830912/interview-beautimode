<script setup lang="ts">
import { reactive, defineComponent } from "vue";
import Todo from "src/models/Todo";
import { putTodoData, deleteTodoData } from "../../apis/fetchTodoData";
import EditableInput from "./EditableInput.vue"

type todoRowProps = {
    todo: Todo
}

const props = defineProps<todoRowProps>()

const emits = defineEmits<{(e: "handleDeleteClick", id: number):void}>();

const todo = reactive(props.todo)


const handleUserIdChange = (val: string) => {
    todo.userId = val;
}
const handleTitleChange = (val: string) => {
    todo.title = val;
}

const handleUpdateClick = (todo: Todo) => {
    putTodoData({
                  id: todo.id,
                  userId: todo.userId,
                  title: todo.title,
                  isCompleted: todo.isCompleted,
                })
}

const handleDeleteClick = (todo: Todo) => {
    deleteTodoData(todo.id);
    emits("handleDeleteClick", todo.id);
}
</script>
<template>

    <td>{{ todo.id }}</td>
    <td>
        <EditableInput :value="todo.userId" @handleOnChange="handleUserIdChange"/>
    </td>
    <td>
        <EditableInput :value="todo.title"  @handleOnChange="handleTitleChange"/>
    </td>
    <td>
        <input type="checkbox" v-model="todo.isCompleted" />
    </td>
    <td>
        <button @click="handleUpdateClick(todo)"> UPDATE</button>
    </td>
    <td>
        <button @click="handleDeleteClick(todo)">DELETE</button>
    </td>
        
</template>

<script lang="ts">
export default defineComponent({
    name: "TodoRow",
})
</script>
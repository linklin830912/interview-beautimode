<script setup lang="ts">
import { ref, defineComponent } from 'vue';
import { postTodoData } from "../../apis/fetchTodoData"
import EditableInput from "./EditableInput.vue"
import Todo from "../../models/Todo"

const emits = defineEmits<{(e:'handleAddClick', todo: Todo):void}>()

const userId = ref<string>()
const title = ref<string>()
const isCompleted = ref<boolean>(false)

const onAddButtonClick = async () => {
    if (userId.value && title.value){
        const response = await postTodoData(userId.value, title.value, isCompleted.value);
        emits("handleAddClick", response);
    }
}

const handleUserIdChange = (value:string) => {
    userId.value = value
}

const handleTitleChange = (value:string) => {
    title.value = value
}

</script>

<script lang="ts">
export default defineComponent({
    name:"AddTodoRow"
})
</script>

<template>
    <td></td>
    <td>
        <EditableInput :value="userId" :placeholder="'add user Id'" @handleOnChange="handleUserIdChange"/>
    </td>
    <td>
        <EditableInput :value="title" :placeholder="'add details'" @handleOnChange="handleTitleChange"/>
    </td>
    <td>
        <input type="checkbox" v-model="isCompleted" />
    </td>
    <td>
       
    </td>
    <td>
        <button class="add_button" @click="onAddButtonClick">+</button>
    </td>
</template>
<style>
.add_button{
    font-size: 36px;
    margin: 0;
    padding: 10px 20px;
}
</style>
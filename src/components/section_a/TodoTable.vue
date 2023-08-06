<script setup lang="ts">
import { onMounted, ref } from "vue";
import TodoRow from "./TodoRow.vue";
import  AddTodoRow  from "./AddTodoRow.vue";
import { getTodoData } from "../../apis/fetchTodoData";
import Todo from "../../models/Todo";

type todoTableProps = {
  start: number;
  end: number;
};

const props = defineProps<todoTableProps>();

const todoData = ref<Todo[]>([]);

onMounted(async () => {
  const response = await getTodoData(props.start, props.end);
  todoData.value = response as Todo[];
});

const handleDeleteClick = (id: number) => {
  const result = todoData.value.filter(todo =>todo.id !== id);
  todoData.value = result;
}

const handleAddClick = (todo: Todo) => { 
  todoData.value = [...todoData.value, todo]
}
</script>

<template>
  <div class="continer_div">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>USER_ID</th>
          <th>DETAILS</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todoData" :key="todo.id">
          <TodoRow :todo="todo" @handleDeleteClick="handleDeleteClick" />
        </tr>
        <tr>
          <td colspan="6"><div class="line_div"></div></td>
        </tr>
        <tr>
            <AddTodoRow @handleAddClick="handleAddClick"/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.line_div{
  background-color: #888;
  margin: 10px 0 ;
  width: 100%;
  height: 3px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TodoTable",
  components: { TodoRow, AddTodoRow },
});
</script>

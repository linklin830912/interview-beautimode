<script setup lang="ts">
    import TodoTable from "../section_a/TodoTable.vue";
</script>

<template>
    <div>
        <TodoTable :start="5" :end="10" />
    </div>
</template>

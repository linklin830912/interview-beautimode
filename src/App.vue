<script setup lang="ts">
// import TodoTable from "./components/TodoTable.vue";
</script>

<template>
  <div class="view_div">
    <h3>
      <router-link to="/section-a">SectionA</router-link>
    <span> / </span>
      <router-link to="/section-b">SectionB</router-link>
      <span> / </span>
      <router-link to="/section-c">SectionC</router-link>    
      <span> / </span>
      <router-link to="/section-d">SectionD</router-link>    
    </h3>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.view_div  {
  width: 100%;
  text-align: start;
  margin: 50px;
}
.view_div span {
font-size: 12px;
margin: 10px;
}
</style>


<script setup lang="ts">
import { defineComponent } from "vue";
import TimeService from "../../models/TimeService";

type dataTableProps = {
    timeService: TimeService
}
const props = defineProps<dataTableProps>();

</script>

<script lang="ts">
export default defineComponent({
        name:"DataTable"
    })
</script>

<template>
    <div class="data_div">
    <div  v-for="key in Object.keys(props.timeService)" :key="key">
        <h6>{{ key }} : {{ props.timeService[key as keyof TimeService] }}</h6>
    </div>
</div>
</template>

<style>
.data_div {
    margin-top:50px;
    text-align:end;
}
.data_div h6{
    margin:0;
}
</style>
<script setup lang="ts">
import { defineComponent } from 'vue';
import TimeRow from "./TimeRow.vue"

const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

const emits = defineEmits<{
    (e: "handleSelectedIndexesChanges", selectedIndexes: number[], weekdayIndex: number): void,
    (e: "handleOnSwitchClick", weekdayIndex: number): void
}>();

const handleOnSwitchClick = (weekday: string) => {
    emits("handleOnSwitchClick", weekdays.indexOf(weekday));
}
const handleSelectedIndexesChanges = (selectedIndexes: number[], weekday: string) => {
    emits("handleSelectedIndexesChanges", selectedIndexes, weekdays.indexOf(weekday));
}
</script>
<script lang="ts">
export default defineComponent({
    name:"TimeTable"
})
</script>
<template>
<div>
    <table class="time_table">
        <thead>
            <tr>
                <th>
                    <h4>WEEKDAY</h4>
                </th>
                <th>
                    <h4>IN_SERVICE</h4>
                </th>
                <th>
                    <h4>TIME_RANGE</h4>
                </th>
            </tr>
            <tr>
                <th colspan="2">
                </th>
                <th>
                    <h6>drag to add / double-click to delete</h6>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="weekday in weekdays" :key="weekdays.indexOf(weekday)">
                <TimeRow :weekday="weekday"  
                @handleOnClick="handleOnSwitchClick"
                @handleSelectedIndexesChanges="handleSelectedIndexesChanges"/>
            </tr>
        </tbody>
    </table>
</div>
</template>
<style>
.time_table th{
    text-align:center;
}
.time_table > thead h4,
.time_table > thead h6 {    
    margin: 0;
    font-weight: lighter;
}
.time_table > thead h6 {
    text-align:end;
}
</style>
<script setup lang="ts">
import { ref, defineComponent } from 'vue';
import SwitchSvg from "./SwitchSvg.vue"
import TimeOption from './TimeOption.vue';

type timeRowProps = {
    weekday: string;
}

const props = defineProps<timeRowProps>();
const isInService = ref<boolean>(true);

const isChecked = ref<boolean>(false);

const emits = defineEmits<{
    (e: "handleSelectedIndexesChanges", selectedIndexes: number[], weekday: string): void,
    (e: "handleOnClick", weekday: string): void,
}>();

const handleOnClick = (value: boolean) => {
    isInService.value = value;
    if(isChecked){
    emits("handleOnClick", props.weekday);}
}
const handleSelectedIndexesChanges = (selectedIndexes: number[]) => {
    isChecked.value = selectedIndexes.length > 0 ? true : false;
    emits("handleSelectedIndexesChanges", selectedIndexes, props.weekday);
}
</script>
<script lang="ts">
    export default defineComponent({
        name:"TimeRow"
    })
</script>
<template>
    <td>
        <h3>{{ props.weekday }}</h3>
    </td>
    <td>
        <div class="switch_div">
            <SwitchSvg @onClick="handleOnClick" 
                :isChecked="isChecked"
                :defaultIfChecked="'本日供餐'" 
                :defaultIfUnchecked="'本日不供餐'"/>      
        </div>
           
    </td>
    <td> <TimeOption @onSelectedIndexesChanges="handleSelectedIndexesChanges"/> </td>
</template>

<style>
  .switch_div {
    white-space: nowrap;
  }
</style>
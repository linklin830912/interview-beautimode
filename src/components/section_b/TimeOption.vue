<script setup lang="ts">
import { ref, onMounted, watch }  from "vue"
const timeOptions = [
    "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30",
    "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30",
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30",
    "24:00",
]

const emits = defineEmits<{ (e: "onSelectedIndexesChanges", selectedIndexes: number[]):void }>();

const isDragging = ref<boolean>(false);
const selectedIndexes = ref<number[]>([]);

const onMousedown = (index:number) => {
    isDragging.value = true;
    const arr = selectedIndexes.value;
    arr.push(index);
    selectedIndexes.value =  [...new Set(arr)] as number[];
}
const onMouseEnter = (index:number) => {
    if (isDragging.value) {
        const arr = selectedIndexes.value;
        arr.push(index);
        selectedIndexes.value =  [...new Set(arr)] as number[];
    }
}
const onDblclick = (index: number) => {
    if (!isDragging.value && selectedIndexes.value.includes(index)) {
        const arr = selectedIndexes.value.filter(x => x !== index);
        selectedIndexes.value =  [...new Set(arr)];
    }
}
const clearIdDragging = () => {
    isDragging.value = false;
}


onMounted(() => {
    window.addEventListener("mouseup", clearIdDragging)
})
watch(selectedIndexes, () => {
    emits("onSelectedIndexesChanges", selectedIndexes.value)
})
</script>

<template>
    <div class="container_div">
        <div class="unit_div" :class="{isSelected: selectedIndexes.includes(timeOptions.indexOf(timeOption))}"
            v-for="timeOption in timeOptions" :key="timeOptions.indexOf(timeOption)"
            @mousedown="onMousedown(timeOptions.indexOf(timeOption))"
            @mouseenter="onMouseEnter(timeOptions.indexOf(timeOption))"
            @dblclick="onDblclick(timeOptions.indexOf(timeOption))"
            >
            <h6>{{ timeOption }}</h6>
        </div>
    </div>
</template>

<style>
.container_div {
    display: flex;
    flex-direction: row;
    border-radius: 3px;
    margin-left: 50px;
}
.unit_div {
    width: 20px;
    height: 20px; 
    border-radius: 3px;
    border: 0.1px solid var(--color2);
    margin-right: -1px;
    background-color: var(--color1);
    position: relative;
    cursor: pointer;
    opacity: .5;
}
.unit_div h6{
    font-size: 3px;
    font-weight: lighter;
    position: absolute;
    left: -15px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: var(--color2);
}
.unit_div:nth-child(odd) h6{    
    top: 15px;
}
.unit_div:nth-child(even) h6{
    top: -25.5px;
}
.isSelected {
    background-color: var(--color2);
    border-color: var(--color1);
    opacity: 1;
}
</style>
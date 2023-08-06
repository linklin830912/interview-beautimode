<script setup lang="ts">
import { defineComponent } from 'vue';

type switchSvgProps = {
    defaultIfChecked?: string,
    defaultIfUnchecked?: string,
    isChecked:boolean,
}

    const props = defineProps<switchSvgProps>();
    const emits = defineEmits<{(e:"onClick", value:boolean):void}>();
    const handleOnChange = (e:boolean) => {
        emits("onClick", e);
    }
</script>

<script lang="ts">
    export default defineComponent({
        name:"SwitchSvg"
    })
</script>
<template>
    <div class="switch_div">
        <a-switch v-model:checked="props.isChecked" @click="handleOnChange">
            <template #checkedChildren>
                <svg viewBox="0 0 5 5" stroke="white" fill="transparent">
                    <polyline points="0.98,2.33 1.93,3.67 4.05,1.05 " />
                </svg>
            </template>
            <template #unCheckedChildren>
                <svg viewBox="0 0 5 5" stroke="white" fill="transparent">
                    <line x1="0.85" y1="4.19" x2="4.24" y2="0.81"/>
                    <line x1="4.24" y1="4.19" x2="0.85" y2="0.81"/>
                </svg>
            </template>
        </a-switch>
        <div>{{ props.isChecked? props.defaultIfChecked:props.defaultIfUnchecked }}</div>
    </div>
</template>

<style>
    .switch_div > * {
        display: inline;
    }
    .switch_div > * {
        display: inline;
    }
    .switch_div > div {
        display: inline;
        margin-left: 30px;
    }
</style>
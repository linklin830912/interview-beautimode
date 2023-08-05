<script setup lang="ts">
import { ref } from "vue";

type editableInputProps = {
  value?: string;
  placeholder?: string;
};

const props = defineProps<editableInputProps>();
const emits = defineEmits<{ (e: "handleOnChange", value: string): void }>();
const value = ref(props.value);
const isEditing = ref(false);

const onEditing = () => {
  isEditing.value = false;
};

const onEditDone = () => {
  isEditing.value = true;
};

const onChange = () => {
  if (value.value) emits("handleOnChange", value.value);
};
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "EditableInput",
});
</script>

<template>
  <div class="editable_container_div">
    <div class="editable_expand_div" @click="onEditing">{{ value }}</div>
    <input
      type="text"
      class="editable_input"
      @blur="onEditDone"
      @change="onChange"
      v-model="value"
      autofocus
      :placeholder="props.placeholder"
    />
  </div>
</template>

<style>
.editable_input {
  width: 100%;
  border: 0;
  font-size: 16px;
  padding: 5px;
  border-radius: var(--border-radius);
  text-align: center;
  box-sizing: content-box;
}
.editable_input::placeholder {
  font-style: italic;
}
.editable_input:hover {
  width: 100%;
  border: var(--border) var(--main-color);
  font-size: 16px;
}
.editable_input:focus {
  border: 3px solid var(--main-color);
  outline: none;
}
.editable_container_div {
  margin: 2px 20px;
  width: fit-content;
}
.editable_expand_div {
  height: 0;
}
</style>

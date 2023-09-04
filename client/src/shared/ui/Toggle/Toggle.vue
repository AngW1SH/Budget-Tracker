<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  options: string[];
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", newValue: string);
}>();

const selected = ref(props.modelValue);

const handleToggle = (e: MouseEvent) => {
  if (e.target instanceof HTMLButtonElement) {
    selected.value = e.target.innerHTML.toLowerCase();
    emit("update:modelValue", selected.value);
  }
};
</script>
<template>
  <div @click="handleToggle" class="flex">
    <button
      class="w-full px-5 py-4 bg-main-200 border text-lg border-main-800 first:rounded-l-md last:rounded-r-md"
      :class="{ ['bg-main-800 text-white font-semibold']: selected == option }"
      v-for="option in options"
    >
      {{ option[0].toUpperCase() + option.slice(1) }}
    </button>
  </div>
</template>

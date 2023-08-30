<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string;
  type?: "text" | "number";
}>();
defineEmits<{
  (e: "update:modelValue", modelValue: string);
}>();
</script>

<template>
  <input
    class="py-2 px-4 border-b border-dashed placeholder:text-title-400 outline-none"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :type="type ? type : 'text'"
  />
</template>

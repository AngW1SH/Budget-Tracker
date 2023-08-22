<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string;
  type?: "text" | "password";
}>();
defineEmits<{
  (e: "update:modelValue", modelValue: string);
}>();
</script>

<template>
  <input
    class="w-full py-4 px-7 border rounded-md placeholder:text-title-400"
    :placeholder="'Enter your ' + label.toLowerCase()"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :type="type ? type : 'text'"
  />
</template>

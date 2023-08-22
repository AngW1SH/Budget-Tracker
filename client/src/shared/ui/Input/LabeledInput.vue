<script setup lang="ts">
import Input from "./Input.vue";
import PasswordInput from "./PasswordInput.vue";

withDefaults(
  defineProps<{
    label: string;
    modelValue: string;
    type?: "text" | "password";
  }>(),
  {
    type: "text",
  }
);
defineEmits<{
  (e: "update:modelValue", modelValue: string);
}>();
</script>

<template>
  <div class="relative">
    <h2 class="font-medium mb-2">{{ label }}</h2>
    <Input
      :model-value="modelValue"
      v-if="type === 'text'"
      :label="label"
      @update:model-value="
        (name: string) => $emit('update:modelValue', name)
      "
    />
    <PasswordInput
      :model-value="modelValue"
      v-if="type === 'password'"
      :label="label"
      @update:model-value="
        (name: string) => $emit('update:modelValue', name)
      "
    />
  </div>
</template>

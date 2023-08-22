<script setup lang="ts">
import { ref } from "vue";
import Input from "./Input.vue";

defineProps<{
  label: string;
  modelValue: string;
}>();
defineEmits<{
  (e: "update:modelValue", modelValue: string);
}>();

const isHidden = ref(true);

const toggleHidden = () => (isHidden.value = !isHidden.value);
</script>

<template>
  <div class="relative">
    <Input
      :modelValue="modelValue"
      :label="label"
      class="pr-12"
      @update:modelValue="
        (name: string) => $emit('update:modelValue', name)
      "
      :type="isHidden ? 'password' : 'text'"
    />
    <div
      @click="toggleHidden"
      class="absolute h-5 w-5 top-[calc(50%-0.675rem)] right-4 cursor-pointer bg-white"
    >
      <img
        class="h-full w-full object-center object-contain transition-[filter]"
        :style="{
          filter: isHidden
            ? 'none'
            : 'invert(78%) sepia(4%) saturate(5%) hue-rotate(347deg) brightness(95%) contrast(86%)',
        }"
        src="/show-password.svg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "click");
}>();
</script>

<template>
  <button
    @click="$emit('click')"
    class="text-center font-semibold bg-main-800 text-white py-[0.675rem] px-5 rounded-md"
  >
    <slot></slot>
  </button>
</template>

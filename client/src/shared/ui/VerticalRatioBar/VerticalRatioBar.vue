<script setup lang="ts">
defineProps<{
  upper: number;
  lower: number;
}>();
</script>

<template>
  <div class="w-[0.625rem] bg-main-500 relative rounded-md overflow-hidden">
    <div
      class="bg-main-800 absolute bottom-0 left-0 right-0"
      :style="{ height: (lower / (upper + lower)) * 100 + '%' }"
    ></div>
  </div>
</template>

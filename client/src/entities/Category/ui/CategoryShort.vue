<script setup lang="ts">
import { ICategory } from "../types/types";

defineProps<{
  category: ICategory;
}>();
</script>

<template>
  <div
    class="flex font-bold border rounded-lg border-title-700 py-[8px] px-[24px] cursor-pointer"
  >
    <div class="mr-auto flex items-center">
      <div
        class="h-12 w-12 flex justify-center cursor-pointer items-center bg-main-300 rounded-full"
      >
        <img src="/chat-icon.svg" alt="" />
      </div>
      <p class="ml-2">{{ category.name }}</p>
    </div>
  </div>
</template>

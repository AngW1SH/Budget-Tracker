<script setup lang="ts">
import { ICategoryInMonth } from "../types/types";

defineProps<{
  category: ICategoryInMonth;
}>();
</script>

<template>
  <div
    class="flex justify-between font-bold border rounded-lg border-title-700 py-[8px] px-[24px] cursor-pointer"
  >
    <div class="mr-auto flex items-center">
      <div
        class="h-12 w-12 flex justify-center cursor-pointer items-center bg-main-300 rounded-full"
      >
        <img src="/chat-icon.svg" alt="" />
      </div>
      <p class="ml-2">{{ category.category?.name }}</p>
    </div>
    <div
      class="w-36 flex items-center justify-center border-r border-title-400 font-bold text-2xl text-main-800"
    >
      ${{ category.goal }}
    </div>
    <div
      class="w-36 flex items-center justify-center font-bold text-2xl text-main-800"
    >
      ${{ category.spent }}
    </div>
  </div>
</template>

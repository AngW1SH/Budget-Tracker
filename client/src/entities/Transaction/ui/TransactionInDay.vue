<script setup lang="ts">
import { ITransaction } from "../types/types";

defineProps<{
  transaction: ITransaction;
}>();
</script>

<template>
  <div
    class="flex justify-between font-bold border border-title-700 py-2 px-6 rounded-lg"
  >
    <div class="w-2/3 flex">
      <div
        class="pr-5 flex flex-1 items-center whitespace-nowrap border-r border-title-400"
      >
        <div
          class="h-12 w-12 flex justify-center cursor-pointer items-center bg-main-300 rounded-full"
        >
          <img src="/chat-icon.svg" alt="" />
        </div>
        <p class="ml-2">{{ transaction.category.name }}</p>
      </div>
      <div
        v-if="transaction.subcategory"
        class="flex flex-1 justify-center items-center px-5 border-r border-title-400"
      >
        {{ transaction.subcategory }}
      </div>
    </div>
    <div class="w-1/3 flex justify-center items-center text-2xl text-main-800">
      ${{ transaction.value }}
    </div>
  </div>
</template>

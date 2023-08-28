<script setup lang="ts">
import { Block } from "@/shared/ui";
</script>

<template>
  <Block class="relative">
    <button
      class="absolute w-60 top-0 left-0 h-full cursor-pointer flex justify-center items-center py-4 px-10 bg-main-200 text-main-900 font-medium"
    >
      <img class="mr-4 rotate-180" src="/learn-more-arrow.svg" />
      <span>Previous Day</span>
    </button>
    <h1 class="text-center text-4xl font-bold">28.08.2023</h1>
    <button
      class="absolute w-60 top-0 right-0 h-full cursor-pointer flex justify-center items-center py-4 px-10 bg-main-200 text-main-900 font-medium"
    >
      <span>Next Day</span>
      <img class="ml-4" src="/learn-more-arrow.svg" />
    </button>
  </Block>
</template>

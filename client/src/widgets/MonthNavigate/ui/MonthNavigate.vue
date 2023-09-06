<script setup lang="ts">
import { Block } from "@/shared/ui";

const getPrevDay = () => {};

const getNextDay = () => {};
</script>

<template>
  <Block class="relative flex justify-center items-center">
    <button
      @click="getPrevDay"
      class="absolute w-60 top-0 left-0 h-full cursor-pointer flex justify-center items-center py-4 px-10 bg-main-200 text-main-900 font-medium"
    >
      <img class="mr-4 rotate-180" src="/learn-more-arrow.svg" />
      <span>Previous Month</span>
    </button>
    <h1 class="text-4xl font-bold">January 2023</h1>
    <button
      @click="getNextDay"
      class="absolute w-60 top-0 right-0 h-full cursor-pointer flex justify-center items-center py-4 px-10 bg-main-200 text-main-900 font-medium"
    >
      <span>Next Month</span>
      <img class="ml-4" src="/learn-more-arrow.svg" />
    </button>
  </Block>
</template>

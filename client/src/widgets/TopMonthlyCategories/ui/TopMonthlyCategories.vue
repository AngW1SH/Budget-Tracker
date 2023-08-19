<script setup lang="ts">
import { Block } from "@/shared/ui";
import { CategoryList } from "@/entities/UserCategory";
</script>

<template>
  <Block class="relative">
    <h2 class="text-xl text-[#101828] font-medium mb-6">
      Top monthly categories
    </h2>
    <CategoryList />
    <div
      class="absolute cursor-pointer flex justify-center bottom-0 left-0 right-0 py-4 bg-[#F9F5FF] text-[#6941C6] text-xl font-medium"
    >
      <span>Learn more</span>
      <img class="mt-1 ml-2" src="/learn-more-arrow.svg" />
    </div>
  </Block>
</template>

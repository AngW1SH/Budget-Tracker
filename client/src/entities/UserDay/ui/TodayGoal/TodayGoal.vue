<script setup lang="ts">
import { Block, LearnMoreButton } from "@/shared/ui";
</script>

<template>
  <Block class="relative py-2">
    <div class="w-[70%] flex items-center ml-5 h-full">
      <p class="text-[2.5rem] font-bold mr-4 text-main-800">$11.25</p>
      <p class="text-title-900">is how much you<br />should spend today</p>
    </div>
    <LearnMoreButton class="absolute top-0 right-0 bottom-0 w-[30%]" />
  </Block>
</template>

<script setup lang="ts">
import { ProgressBar } from "@/shared/ui";
</script>

<template>
  <p class="font-medium mb-3">
    You are <span class="text-[#7F56D9]">$150 below</span>
    average
  </p>
  <ProgressBar class="mb-1" :progress="20" :goal="40" />
  <p class="text-sm font-light tracking-wide">
    <span class="font-medium">$150</span> of $1000 spent
  </p>
</template>

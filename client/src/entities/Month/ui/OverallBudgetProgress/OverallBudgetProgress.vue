<script setup lang="ts">
import { ProgressBar } from "@/shared/ui";
</script>

<template>
  <p class="font-medium mb-3 text-title-900">
    You are <span class="text-main-800">₽150 below</span>
    average
  </p>
  <ProgressBar class="mb-1" :progress="20" :goal="40" />
  <p class="text-sm font-light tracking-wide text-title-200">
    <span class="font-medium text-title-900">₽150</span> of ₽1000 spent
  </p>
</template>

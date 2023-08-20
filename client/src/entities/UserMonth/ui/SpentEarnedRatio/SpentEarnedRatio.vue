<script setup lang="ts">
import { VerticalRatioBar } from "@/shared/ui";
</script>

<template>
  <div class="flex justify-between">
    <div class="flex flex-col">
      <div>
        <p class="font-medium text-title-900">Spent</p>
        <p class="font-medium text-main-800 text-2xl">$1,150</p>
      </div>
      <div class="mt-auto">
        <p class="font-medium text-title-900">Earned</p>
        <p class="font-medium text-main-800 text-2xl">$2,300</p>
      </div>
    </div>
    <VerticalRatioBar :upper="1150" :lower="2300" />
  </div>
</template>

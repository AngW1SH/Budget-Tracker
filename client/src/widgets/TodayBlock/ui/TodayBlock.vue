<script setup lang="ts">
import { TodayButton } from "@/features/TodayButton";
import { TodayGoal } from "@/entities/UserDay";
</script>

<template>
  <div class="flex h-full gap-5 flex-col justify-between">
    <div class="h-full">
      <TodayButton class="h-full w-full text-2xl" />
    </div>
    <div class="h-full">
      <TodayGoal class="h-full" />
    </div>
  </div>
</template>

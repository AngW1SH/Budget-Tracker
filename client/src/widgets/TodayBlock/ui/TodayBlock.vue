<script setup lang="ts">
import { TodayButton } from "@/features/TodayButton";
import { DayAverage } from "@/entities/UserDay";
import { Block, LearnMoreButton } from "@/shared/ui";
</script>

<template>
  <div class="flex h-full gap-5 flex-col justify-between">
    <div class="h-full">
      <TodayButton class="h-full w-full text-2xl" />
    </div>
    <div class="h-full">
      <Block class="h-full relative py-2">
        <DayAverage class="h-full w-[70%]" />
        <LearnMoreButton class="absolute top-0 right-0 bottom-0 w-[30%]" />
      </Block>
    </div>
  </div>
</template>

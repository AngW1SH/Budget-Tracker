<script setup lang="ts">
import { DayActual, DayAverage, DayLimit } from "@/entities/UserDay";
import { Block } from "@/shared/ui";
</script>

<template>
  <div class="flex justify-between items-center gap-3">
    <Block class="w-full py-[1rem] px-2">
      <DayAverage class="h-full" />
    </Block>
    <Block class="w-full py-[1rem]">
      <DayLimit class="h-full" />
    </Block>
    <Block class="w-full py-[1rem]">
      <DayActual class="h-full" />
    </Block>
  </div>
</template>

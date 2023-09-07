<script setup lang="ts">
import { useMonthStore } from "@/entities/Month";
import { Block } from "@/shared/ui";

const monthStore = useMonthStore();
</script>

<template>
  <Block>
    <div class="flex h-full">
      <div class="w-full border-r border-[#CFCFCF] text-right pr-9 box-border">
        <h2 class="font-medium mt-2 text-3xl text-center text-title-900">
          Results
        </h2>
      </div>
      <div
        class="pl-4 w-full flex justify-center items-center text-2xl font-bold text-main-800 text-center"
      >
        <p
          class="text-3xl pl-1 font-bold text-center text-main-800 w-1/2"
          label="Month Goal"
        >
          {{ monthStore.month ? monthStore.month.spent : "" }}
        </p>
      </div>
    </div>
  </Block>
</template>

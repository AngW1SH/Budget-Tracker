<script setup lang="ts">
import { Block, DashedInput } from "@/shared/ui";
import { ref } from "vue";

const goal = ref("25");
</script>

<template>
  <Block>
    <div class="flex h-full">
      <div class="w-full border-r border-[#CFCFCF] text-right pr-9 box-border">
        <h2 class="font-medium mt-2 text-4xl text-center text-title-900">
          Goal
        </h2>
      </div>
      <div
        class="pl-4 w-full flex justify-center items-center text-2xl font-bold text-main-800 text-center"
      >
        <DashedInput
          class="text-3xl pl-1 font-bold text-center text-main-800 w-3/4"
          v-model="goal"
          label="Month Goal"
        />
      </div>
    </div>
  </Block>
</template>

<script setup lang="ts">
import { SpentEarnedRatio } from "@/entities/Month";
import { Block } from "@/shared/ui";
</script>

<template>
  <Block>
    <div class="flex h-full">
      <div class="w-full border-r border-[#CFCFCF] text-right pr-9 box-border">
        <h2 class="font-medium mt-2 text-xl text-title-900">July cash flow</h2>
        <h2 class="mt-4 font-bold text-5xl text-main-800">+₽2,150</h2>
      </div>
      <div class="w-full pl-4">
        <SpentEarnedRatio class="h-full py-1" />
      </div>
    </div>
  </Block>
</template>

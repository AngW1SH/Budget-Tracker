<script setup lang="ts">
import { Block } from "@/shared/ui";
import { OverallBudgetProgress } from "@/entities/UserMonth";
</script>

<template>
  <Block>
    <h2 class="text-xl text-[#101828] font-medium mb-6">
      Overall budget left for the current month
    </h2>
    <OverallBudgetProgress />
  </Block>
</template>

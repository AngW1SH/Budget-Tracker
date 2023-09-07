<script setup lang="ts">
import { useMonthStore } from "@/entities/Month";
import { DashedInput } from "@/shared/ui";
import { debounce } from "@/shared/utils";

const monthStore = useMonthStore();

const debouncedUpdate = debounce(monthStore.updateMonth, 1000);

monthStore.$subscribe(() => debouncedUpdate());
</script>

<template>
  <DashedInput
    v-if="monthStore.month"
    class="text-3xl pl-1 font-bold text-center text-main-800 w-3/4"
    :model-value="'' + monthStore.month.goal"
    @update:model-value="
      (newValue) => {
        if (monthStore.month) monthStore.month.goal = +newValue;
      }
    "
    label="Month Goal"
  />
</template>

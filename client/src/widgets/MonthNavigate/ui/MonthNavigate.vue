<script setup lang="ts">
import { useMonthStore } from "@/entities/Month";
import { Block } from "@/shared/ui";
import { formatDateForURL } from "@/shared/utils";
import { useRouter } from "vue-router";

const router = useRouter();

const monthStore = useMonthStore();

const getPrevDay = () => {
  const prevMonth = new Date(monthStore.date);
  prevMonth.setMonth(prevMonth.getMonth() - 1);
  router.push("/month/" + formatDateForURL(prevMonth));
};

const getNextDay = () => {
  const nextMonth = new Date(monthStore.date);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  router.push("/month/" + formatDateForURL(nextMonth));
};
</script>

<template>
  <Block class="relative flex justify-center items-center">
    <button
      @click="getPrevDay"
      class="absolute w-60 top-0 left-0 h-full cursor-pointer flex justify-center items-center py-4 px-10 bg-main-200 text-main-900 font-medium"
    >
      <img class="mr-4 rotate-180" src="/learn-more-arrow.svg" />
      <span>Previous Month</span>
    </button>
    <h1 class="text-4xl font-bold">{{ monthStore.formattedDate }}</h1>
    <button
      @click="getNextDay"
      class="absolute w-60 top-0 right-0 h-full cursor-pointer flex justify-center items-center py-4 px-10 bg-main-200 text-main-900 font-medium"
    >
      <span>Next Month</span>
      <img class="ml-4" src="/learn-more-arrow.svg" />
    </button>
  </Block>
</template>

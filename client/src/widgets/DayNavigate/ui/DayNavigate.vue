<script setup lang="ts">
import { useDayStore } from "@/entities/Day";
import { Block } from "@/shared/ui";
import { formatDateForURL } from "@/shared/utils";
import { useRouter } from "vue-router";

const router = useRouter();

const dayStore = useDayStore();

const getPrevDay = () => {
  const prevDay = new Date(dayStore.date);
  prevDay.setDate(prevDay.getDate() - 1);
  router.push("/day/" + formatDateForURL(prevDay));
};

const getNextDay = () => {
  const nextDay = new Date(dayStore.date);
  nextDay.setDate(nextDay.getDate() + 1);
  router.push("/day/" + formatDateForURL(nextDay));
};
</script>

<template>
  <Block class="relative flex justify-center items-center">
    <button
      @click="getPrevDay"
      class="absolute w-60 top-0 left-0 h-full cursor-pointer flex justify-center items-center py-4 px-10 bg-main-200 text-main-900 font-medium"
    >
      <img class="mr-4 rotate-180" src="/learn-more-arrow.svg" />
      <span>Previous Day</span>
    </button>
    <h1 class="text-4xl font-bold">{{ dayStore.formattedDate }}</h1>
    <button
      @click="getNextDay"
      class="absolute w-60 top-0 right-0 h-full cursor-pointer flex justify-center items-center py-4 px-10 bg-main-200 text-main-900 font-medium"
    >
      <span>Next Day</span>
      <img class="ml-4" src="/learn-more-arrow.svg" />
    </button>
  </Block>
</template>

<script setup lang="ts">
import { Block } from "@/shared/ui";
import {
  generateMonth,
  shortWeekDayNames,
  monthNames,
  formatDateForURL,
} from "@/shared/utils";
import { onMounted, ref, watch } from "vue";
import { fillMonthWithData } from "../utils/fillMonthWithData";
import { fillMonthWithEmptyData } from "../utils/fillMonthWithEmptyData";
import { getMonthDays } from "../api/getMonthDays";
import { useRouter } from "vue-router";

const router = useRouter();

const date = ref(new Date());
const monthData = ref(
  fillMonthWithEmptyData(
    generateMonth(new Date().getMonth(), new Date().getFullYear())
  )
);

const decrementMonth = () => {
  const newDate = new Date(date.value.toDateString());
  newDate.setMonth(newDate.getMonth() - 1);
  date.value = newDate;
};

const incrementMonth = () => {
  const newDate = new Date(date.value.toDateString());
  newDate.setMonth(newDate.getMonth() + 1);
  date.value = newDate;
};

const updateMonthData = async () => {
  const dayData = await getMonthDays(date.value);

  monthData.value = fillMonthWithData(
    generateMonth(date.value.getMonth(), date.value.getFullYear()),
    dayData
  );
};

const handleDayClick = (e: MouseEvent) => {
  if (!(e.target instanceof HTMLElement)) return;

  const value = e.target.innerHTML;

  if ("" + +value != value) return;

  const selectedDate = new Date(date.value);

  selectedDate.setDate(+value);

  router.push("/day/" + formatDateForURL(selectedDate));
};

watch([date], updateMonthData);

onMounted(updateMonthData);
</script>

<template>
  <Block class="flex flex-col">
    <div class="flex justify-between border-b border-[#E9E9E9] pb-2">
      <div class="ml-6 w-[0.6rem]">
        <img
          class="h-full w-full object-contain cursor-pointer"
          src="/calendar-arrow-left.svg"
          alt=""
          @click="decrementMonth"
        />
      </div>
      <h3 class="font-semibold text-xl text-title-900">
        {{ monthNames[date.getMonth()] }} {{ date.getFullYear() }}
      </h3>
      <div class="mr-6 w-[0.6rem]">
        <img
          src="/calendar-arrow-left.svg"
          class="rotate-180 h-full w-full cursor-pointer"
          alt=""
          @click="incrementMonth"
        />
      </div>
    </div>
    <ul class="flex my-3 mt-5">
      <li
        class="w-full text-center text-xs font-medium text-title-900"
        v-for="day in shortWeekDayNames"
        :key="day"
      >
        {{ day }}
      </li>
    </ul>
    <div class="h-full grid auto-rows-fr mt-1" @click="handleDayClick">
      <div
        v-for="(week, weekindex) in monthData"
        class="flex justify-between"
        :key="date.toString() + 'week' + weekindex"
      >
        <div
          class="relative w-full flex justify-center items-center text-lg text-title-900 font-medium cursor-pointer"
          v-for="(day, dayindex) in week"
          :key="date.toString() + 'day' + dayindex"
        >
          <img
            v-if="day.data != null"
            class="absolute object-contain object-center"
            src="/calendar-active-day.svg"
          />
          <div class="relative h-full w-full flex justify-center items-center">
            {{ day.value }}
          </div>
        </div>
      </div>
    </div>
  </Block>
</template>

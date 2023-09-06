<script setup lang="ts">
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/Footer";
import { Container } from "@/shared/ui";
import { DayNavigate } from "@/widgets/DayNavigate";
import { DaySummary } from "@/widgets/DaySummary";
import { DayDetailed } from "@/widgets/DayDetailed";
import { useTransactionStore } from "@/entities/Transaction";
import { useCategoryStore } from "@/entities/Category";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useDayStore } from "@/entities/Day";

const route = useRoute();

const TransactionStore = useTransactionStore();
const categoryStore = useCategoryStore();
const dayStore = useDayStore();

onMounted(async () => {
  if (!route.params.date) return "";

  if (typeof route.params.date == "string") {
    dayStore.setDate(new Date(route.params.date));
  } else {
    dayStore.setDate(new Date(route.params.date[0]));
  }
  categoryStore.getData();
  await dayStore.prepareDay(dayStore.date);
  TransactionStore.getData(dayStore.date);
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <Container class="mt-10 grid grid-cols-12 grid-rows-2 gap-4">
      <DayNavigate class="col-span-12 row-span-1" />
      <DaySummary class="col-span-12 row-span-1" />
    </Container>
    <Container class="mt-4">
      <DayDetailed />
    </Container>
    <div class="mt-auto pt-9">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Header } from "@/widgets/header";
import { MonthBudgetLeft } from "@/widgets/MonthBudgetLeft";
import { TopMonthlyCategories } from "@/widgets/TopMonthlyCategories";
import { UserMonthCalendar } from "@/widgets/UserMonthCalendar";
import { UserMonthCashFlow } from "@/widgets/UserMonthCashFlow";
import { Container } from "@/shared/ui";
</script>

<template>
  <Header />
  <Container class="mt-4 grid grid-cols-12 grid-rows-3 gap-4">
    <MonthBudgetLeft class="col-span-6" />
    <TopMonthlyCategories class="col-span-6 row-span-2" />
    <UserMonthCalendar class="col-span-6 row-span-2" />
    <UserMonthCashFlow class="col-span-6" />
  </Container>
</template>

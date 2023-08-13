<script setup lang="ts">
import { Header } from "@/widgets/header";
import { MonthBudgetLeft } from "@/widgets/MonthBudgetLeft";
import { Container } from "@/shared/ui";
</script>

<template>
  <Header />
  <Container class="mt-4 grid grid-cols-12 gap-4">
    <MonthBudgetLeft class="col-span-6" />
  </Container>
</template>

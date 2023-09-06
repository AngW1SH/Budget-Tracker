<script setup lang="ts">
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/Footer";
import { Container } from "@/shared/ui";
import { MonthNavigate } from "@/widgets/MonthNavigate";
import { MonthGoal } from "@/widgets/MonthGoal";
import { MonthTotal } from "@/widgets/MonthTotal";
import { MonthCategories } from "@/widgets/MonthCategories";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <Container class="mt-10 grid grid-cols-12 grid-rows-2 gap-4">
      <MonthNavigate class="col-span-12 row-span-1" />
      <MonthGoal class="col-span-6 row-span-1" />
      <MonthTotal class="col-span-6 row-span-1" />
    </Container>
    <Container class="mt-4">
      <MonthCategories />
    </Container>
    <div class="mt-auto pt-9">
      <Footer />
    </div>
  </div>
</template>

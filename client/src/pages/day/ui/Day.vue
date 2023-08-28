<script setup lang="ts">
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/Footer";
import { Container } from "@/shared/ui";
import { DayNavigate } from "@/widgets/DayNavigate";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <Container class="mt-10">
      <DayNavigate />
    </Container>
    <div class="mt-auto pt-9">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from "@/entities/Category";
import { Container } from "@/shared/ui";
import { Header } from "@/widgets/header";
import { UserCategories } from "@/widgets/UserCategories";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();

onMounted(async () => {
  categoryStore.getData();
});
</script>

<template>
  <Header />
  <div class="mt-10" />
  <Container> <UserCategories /> </Container>
</template>

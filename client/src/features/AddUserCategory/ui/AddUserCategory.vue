<script setup lang="ts">
import { useCategoryStore } from "@/entities/Category";
import { Button } from "@/shared/ui";
const categoryStore = useCategoryStore();
</script>

<template>
  <Button
    class="mt-6 w-full text-3xl"
    @click="() => categoryStore.addEmptyCategory()"
    >Add more</Button
  >
</template>

<script setup lang="ts">
import { Block, Button } from "@/shared/ui";
import { CategoryInDay, useCategoryInDayStore } from "@/entities/CategoryInDay";

const categoryInDayStore = useCategoryInDayStore();
</script>

<template>
  <Block>
    <h2 class="text-3xl text-center font-bold">Detailed</h2>
    <ul class="mt-9 grid grid-cols-2 gap-4">
      <li v-for="category in categoryInDayStore.categories" :key="category.id">
        <CategoryInDay class="cursor-pointer" :category="category" />
      </li>
    </ul>
    <Button class="mt-8 w-full text-3xl">Add more</Button>
  </Block>
</template>

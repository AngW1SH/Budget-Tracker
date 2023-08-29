<script setup lang="ts">
import { Block, Button } from "@/shared/ui";
import { CategoryInDay } from "@/entities/CategoryInDay";
import { ref } from "vue";

const categories = ref<ICategoryInDay[]>([
  {
    id: "1",
    category: "Food",
    subcategory: "Lenta",
    value: 21.25,
  },
  {
    id: "2",
    category: "Gas & fuel",
    value: 201.25,
  },
  {
    id: "3",
    category: "Longass name",
    subcategory: "Lenta",
    value: 21.25,
  },
]);
</script>

<template>
  <Block>
    <h2 class="text-3xl text-center font-bold">Detailed</h2>
    <ul class="mt-9 grid grid-cols-2 gap-4">
      <li v-for="category in categories" :key="category.id">
        <CategoryInDay class="cursor-pointer" :category="category" />
      </li>
    </ul>
    <Button class="mt-8 w-full text-3xl">Add more</Button>
  </Block>
</template>

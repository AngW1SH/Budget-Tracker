<script setup lang="ts">
import { Block } from "@/shared/ui";
import { CategoryShort, useCategoryStore } from "@/entities/Category";
import { AddUserCategory } from "@/features/AddUserCategory";

const categoryStore = useCategoryStore();
</script>

<template>
  <Block>
    <AddUserCategory />
    <div class="mt-5" />
    <div class="flex gap-y-5 flex-wrap justify-between">
      <CategoryShort
        v-for="category in categoryStore.categories"
        class="w-[32%]"
        :category="category"
      />
    </div>
  </Block>
</template>

<script setup lang="ts">
import { Block } from "@/shared/ui";
import { CategoryInMonth } from "@/entities/CategoryInMonth";
</script>

<template>
  <Block>
    <div class="flex font-medium text-center text-2xl px-[24px]">
      <h2 class="mr-auto">Category</h2>
      <h2 class="w-36">Goal</h2>
      <h2 class="w-36">Spent</h2>
    </div>
    <ul class="mt-4">
      <li>
        <CategoryInMonth />
      </li>
    </ul>
  </Block>
</template>

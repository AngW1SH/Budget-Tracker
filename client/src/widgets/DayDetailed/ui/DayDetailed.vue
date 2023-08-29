<script setup lang="ts">
import { Block } from "@/shared/ui";
import { CategoryInDay } from "@/entities/CategoryInDay";
</script>

<template>
  <Block>
    <h2 class="text-3xl text-center font-bold">Detailed</h2>
    <ul class="mt-9 grid grid-cols-2 gap-4">
      <li>
        <CategoryInDay />
      </li>
      <li>
        <CategoryInDay />
      </li>
      <li>
        <CategoryInDay />
      </li>
    </ul>
  </Block>
</template>

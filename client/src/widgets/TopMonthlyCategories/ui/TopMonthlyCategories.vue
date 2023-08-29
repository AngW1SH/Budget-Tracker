<script setup lang="ts">
import { Block } from "@/shared/ui";
import { CategoryList } from "@/entities/Category";
import { LearnMoreButton } from "@/shared/ui";
</script>

<template>
  <Block class="relative">
    <h2 class="text-xl text-title-900 font-medium mb-6">
      Top monthly categories
    </h2>
    <CategoryList />
    <LearnMoreButton class="absolute bottom-0 left-0 right-0 text-xl" />
  </Block>
</template>

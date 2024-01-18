<script setup lang="ts">
import { Block } from "@/shared/ui";
import { CategoryShort } from "@/entities/Category";
import { AddUserCategory } from "@/features/AddUserCategory";
</script>

<template>
  <Block>
    <AddUserCategory />
    <div class="mt-5" />
    <div class="flex justify-between">
      <CategoryShort
        class="w-[32%]"
        :category="{ id: '1', name: 'Food', type: 'expense', userid: '1' }"
      />
      <CategoryShort
        class="w-[32%]"
        :category="{ id: '1', name: 'Food', type: 'expense', userid: '1' }"
      />
      <CategoryShort
        class="w-[32%]"
        :category="{ id: '1', name: 'Food', type: 'expense', userid: '1' }"
      />
    </div>
  </Block>
</template>

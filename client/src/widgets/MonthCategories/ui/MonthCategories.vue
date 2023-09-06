<script setup lang="ts">
import { Block, Button, Modal } from "@/shared/ui";
import { CategoryInMonth } from "@/entities/CategoryInMonth";
import { EditCategoryInMonth } from "@/features/EditCategoryInMonth";
import { ref } from "vue";

const showEditor = ref(false);

const setEdited = (e: MouseEvent) => {
  if (
    e.target instanceof HTMLElement &&
    e.currentTarget instanceof HTMLElement
  ) {
    if (e.currentTarget.contains(e.target)) {
      const editedIndex = Array.from(e.currentTarget.children).findIndex(
        (elem) => elem === e.target || elem.contains(e.target as HTMLElement)
      );

      if (editedIndex == -1) return;

      showEditor.value = true;
    }
  }
};
</script>

<template>
  <Block>
    <div class="flex font-medium text-center text-2xl px-[24px]">
      <h2 class="mr-auto">Category</h2>
      <h2 class="w-36">Goal</h2>
      <h2 class="w-36">Spent</h2>
    </div>
    <ul class="mt-4" @click="setEdited">
      <li class="mb-4">
        <CategoryInMonth />
      </li>
      <li>
        <CategoryInMonth />
      </li>
    </ul>
    <Button class="mt-6 w-full text-3xl">Add more</Button>
    <Modal v-show="showEditor" @click-away="showEditor = false">
      <Block class="bg-white">
        <EditCategoryInMonth />
      </Block>
    </Modal>
  </Block>
</template>

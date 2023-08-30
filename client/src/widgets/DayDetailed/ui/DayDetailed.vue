<script setup lang="ts">
import { Block, Button, Modal } from "@/shared/ui";
import {
  CategoryInDay,
  ICategoryInDay,
  useCategoryInDayStore,
} from "@/entities/CategoryInDay";
import { EditCategoryInDay } from "@/features/EditCategoryInDay";
import { ref, toRaw } from "vue";
import { useDayStore } from "@/entities/Day";

const dayStore = useDayStore();
const categoryInDayStore = useCategoryInDayStore();

const showEditor = ref(false);
const edited = ref<ICategoryInDay | null>(null);

const setEdited = (e: MouseEvent) => {
  if (
    e.target instanceof HTMLElement &&
    e.currentTarget instanceof HTMLElement
  ) {
    if (e.currentTarget.contains(e.target)) {
      const editedIndex = Array.from(e.currentTarget.children).findIndex(
        (elem) => elem === e.target || elem.contains(e.target as HTMLElement)
      );

      edited.value = structuredClone(
        toRaw(categoryInDayStore.categories[editedIndex])
      );
      showEditor.value = true;
    }
  }
};
</script>

<template>
  <Block>
    <h2 class="text-3xl text-center font-bold">Detailed</h2>
    <ul class="mt-9 grid grid-cols-2 gap-4" @click="setEdited">
      <li v-for="category in categoryInDayStore.categories" :key="category.id">
        <CategoryInDay class="cursor-pointer" :category="category" />
      </li>
    </ul>
    <Button
      class="mt-8 w-full text-3xl"
      @click="() => categoryInDayStore.addEmptyCategory(dayStore.date)"
      >Add more</Button
    >
    <Modal
      v-show="showEditor"
      @click-away="
        () => {
          showEditor = false;
        }
      "
    >
      <Block class="bg-white">
        <EditCategoryInDay
          v-if="edited"
          :key="'' + showEditor + edited"
          :category="edited"
          @confirm-edit="showEditor = false"
          @delete-edit="showEditor = false"
        />
      </Block>
    </Modal>
  </Block>
</template>

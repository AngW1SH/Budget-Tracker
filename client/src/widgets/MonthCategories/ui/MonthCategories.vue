<script setup lang="ts">
import { Block, Button, Modal } from "@/shared/ui";
import { CategoryInMonth } from "@/entities/CategoryInMonth";
import { EditCategoryInMonth } from "@/features/EditCategoryInMonth";
import { ref } from "vue";
import { useCategoryInMonthStore } from "@/entities/CategoryInMonth/model/store";
import { ICategoryInMonth } from "@/entities/CategoryInMonth/types/types";
import { useMonthStore } from "@/entities/Month";

const showEditor = ref(false);

const monthStore = useMonthStore();
const categoryInMonthStore = useCategoryInMonthStore();

const edited = ref<ICategoryInMonth | null>(null);
const rerenderKey = ref(0);

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

      edited.value = { ...categoryInMonthStore.categories[editedIndex] };

      showEditor.value = true;
      rerenderKey.value += 1; // without this, clicking away and selecting the same element wouldn't cause a rerender
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
      <li class="mb-4" v-for="category in categoryInMonthStore.categories">
        <CategoryInMonth :category="category" />
      </li>
    </ul>
    <Button
      class="mt-6 w-full text-3xl"
      @click="() => categoryInMonthStore.addEmptyCategory(monthStore.date)"
      >Add more</Button
    >
    <Modal v-show="showEditor" @click-away="showEditor = false">
      <Block class="bg-white">
        <EditCategoryInMonth
          v-if="edited"
          :key="rerenderKey"
          :category-in-month="edited"
          @confirm-edit="showEditor = false"
          @delete-edit="showEditor = false"
        />
      </Block>
    </Modal>
  </Block>
</template>

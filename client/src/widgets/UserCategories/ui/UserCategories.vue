<script setup lang="ts">
import { Block, Modal } from "@/shared/ui";
import { CategoryShort, useCategoryStore } from "@/entities/Category";
import { AddUserCategory } from "@/features/AddUserCategory";
import { EditCategory } from "@/features/EditCategory";
import { ref } from "vue";
import { ICategory } from "@/entities/Category/types/types";

const showEditor = ref(false);

const edited = ref<ICategory | null>(null);
const rerenderKey = ref(0);

const categoryStore = useCategoryStore();

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

      edited.value = { ...categoryStore.categories[editedIndex] };

      showEditor.value = true;
      rerenderKey.value += 1; // without this, clicking away and selecting the same element wouldn't cause a rerender
    }
  }
};
</script>

<template>
  <Block>
    <AddUserCategory />
    <div class="mt-5" />
    <div @click="setEdited" class="flex gap-y-5 flex-wrap justify-between">
      <CategoryShort
        v-for="category in categoryStore.categories"
        class="w-[32%]"
        :category="category"
      />
    </div>
    <Modal v-show="showEditor" @click-away="showEditor = false">
      <Block class="bg-white">
        <EditCategory
          v-if="edited"
          :key="rerenderKey"
          :category="edited"
          @confirm-edit="showEditor = false"
          @delete-edit="showEditor = false"
        />
      </Block>
    </Modal>
  </Block>
</template>

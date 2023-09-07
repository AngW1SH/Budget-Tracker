<script setup lang="ts">
import { CategoryInMonth } from "@/entities/CategoryInMonth";
import { useCategoryStore } from "@/entities/Category";
import {
  Dropdown,
  DashedInput,
  Button,
  ButtonAlt,
  Modal,
  Block,
} from "@/shared/ui";
import { computed, ref } from "vue";
import { ICategoryInMonth } from "@/entities/CategoryInMonth/types/types";
import { useCategoryInMonthStore } from "@/entities/CategoryInMonth/model/store";

const categoryInMonthStore = useCategoryInMonthStore();

const props = defineProps<{
  categoryInMonth: ICategoryInMonth;
}>();

const emit = defineEmits<{
  (e: "confirm-edit");
  (e: "delete-edit");
}>();

const onConfirm = () => {
  categoryInMonthStore.editCategory(data.value);

  emit("confirm-edit");
};

const onDelete = () => {
  categoryInMonthStore.removeCategory(data.value);

  emit("delete-edit");
};

const data = ref(props.categoryInMonth);

const showConfirmDelete = ref(false);

const onCategoryChange = (selected: string) => {
  const selectedCategory = categoryStore.categories.find(
    (category) => category.name == selected
  );

  if (!selectedCategory) return;

  data.value.category = selectedCategory;
};

// todo: move category selector dropdown to a separate entity ui component
const categoryStore = useCategoryStore();

const categoryList = computed(() => {
  return categoryStore.categories.map((category) => category.name);
});
</script>

<template>
  <div class="w-[50vw] py-8 px-20">
    <div>
      <div class="flex font-medium text-center text-xl px-[24px] mb-2">
        <h2 class="pl-4 mr-auto">Category</h2>
        <h2 class="w-36">Goal</h2>
        <h2 class="w-36">Spent</h2>
      </div>
      <CategoryInMonth :category="data" />
    </div>
    <div class="mt-5">
      <div
        class="flex items-center justify-between py-4 border-b border-title-200"
      >
        <p class="font-medium">Category</p>
        <Dropdown
          :model-value="data.category.name"
          @update:model-value="onCategoryChange"
          class="w-44"
          :elements="categoryList"
        />
      </div>
      <div
        class="flex items-center justify-between py-4 border-b border-title-200"
      >
        <p class="font-medium">Goal</p>
        <DashedInput
          class="w-44"
          :model-value="'' + data.goal"
          @update:model-value="(newValue) => (data.goal = +newValue)"
          type="number"
          label=""
        />
      </div>
      <div class="py-4">
        <h3 class="font-medium">Notes</h3>
        <div class="relative bg-[#F6F6F6]">
          <div
            v-if="!data.description.length"
            class="absolute top-3 left-5 text-[#A3A3A3]"
          >
            Enter a description
          </div>
          <div
            contenteditable
            class="relative mt-2 w-full rounded-md py-3 px-5 min-h-[5rem]"
            @input="(e: Event) => data.description = (e.target as HTMLDivElement).innerHTML"
          >
            {{ data.description }}
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 flex gap-7">
      <Button class="flex-[2] text-2xl" @click="onConfirm">Confirm</Button>
      <ButtonAlt class="flex-1" @click="showConfirmDelete = true"
        >Delete</ButtonAlt
      >
    </div>
    <Modal v-show="showConfirmDelete" @click-away="showConfirmDelete = false">
      <Block class="bg-white">
        <div class="px-10">
          <h2 class="font-bold text-2xl text-center text-main-800">
            Are you sure you want to <br />stop tracking this category?
          </h2>
          <div class="mt-8 flex gap-7">
            <Button class="flex-1 text-lg" @click="onDelete">Confirm</Button>
            <ButtonAlt class="flex-1" @click="showConfirmDelete = false"
              >Cancel</ButtonAlt
            >
          </div>
        </div>
      </Block>
    </Modal>
  </div>
</template>

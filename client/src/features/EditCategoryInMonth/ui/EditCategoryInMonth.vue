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

const emit = defineEmits<{
  (e: "confirm-edit");
  (e: "delete-edit");
}>();

const onConfirm = () => {
  emit("confirm-edit");
};

const onDelete = () => {
  emit("delete-edit");
};

const category = ref("");
const value = ref(0);
const description = ref("");

const showConfirmDelete = ref(false);

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
      <CategoryInMonth />
    </div>
    <div class="mt-5">
      <div
        class="flex items-center justify-between py-4 border-b border-title-200"
      >
        <p class="font-medium">Category</p>
        <Dropdown
          :model-value="category"
          class="w-44"
          :elements="categoryList"
        />
      </div>
      <div
        class="flex items-center justify-between py-4 border-b border-title-200"
      >
        <p class="font-medium">Value</p>
        <DashedInput
          class="w-44"
          :model-value="'' + value"
          @update:model-value="(newValue) => (value = +newValue)"
          type="number"
          label=""
        />
      </div>
      <div class="py-4">
        <h3 class="font-medium">Notes</h3>
        <div class="relative bg-[#F6F6F6]">
          <div
            v-if="!description.length"
            class="absolute top-3 left-5 text-[#A3A3A3]"
          >
            Enter a description
          </div>
          <div
            contenteditable
            class="relative mt-2 w-full rounded-md py-3 px-5 min-h-[5rem]"
            @input="(e: Event) => description = (e.target as HTMLDivElement).innerHTML"
          >
            {{ description }}
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

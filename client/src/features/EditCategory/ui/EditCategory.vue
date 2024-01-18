<script setup lang="ts">
import { CategoryShort } from "@/entities/Category";
import { useCategoryStore } from "@/entities/Category";
import { DashedInput, Button, ButtonAlt, Modal, Block } from "@/shared/ui";
import { ref } from "vue";
import { ICategory } from "@/entities/Category/types/types";

const props = defineProps<{
  category: ICategory;
}>();

const emit = defineEmits<{
  (e: "confirm-edit");
  (e: "delete-edit");
}>();

const data = ref(props.category);

const showConfirmDelete = ref(false);

// todo: move category selector dropdown to a separate entity ui component
const categoryStore = useCategoryStore();

const onConfirm = () => {
  categoryStore.editCategory(data.value);

  emit("confirm-edit");
};

const onDelete = () => {
  categoryStore.removeCategory(data.value);

  emit("delete-edit");
};
</script>

<template>
  <div class="w-[50vw] py-8 px-20">
    <div>
      <CategoryShort :category="data" />
    </div>
    <div class="mt-5">
      <div
        class="flex items-center justify-between py-4 border-b border-title-200"
      >
        <p class="font-medium">Name</p>
        <DashedInput
          class="w-44"
          :model-value="'' + data.name"
          @update:model-value="(newValue) => (data.name = newValue)"
          label=""
        />
      </div>
      <div class="py-4">
        <h3 class="font-medium">Notes</h3>
        <div class="relative bg-[#F6F6F6]">
          <div
            v-if="!data.description?.length"
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

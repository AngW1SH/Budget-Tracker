<script setup lang="ts">
import { useCategoryStore } from "@/entities/Category";
import {
  ITransaction,
  TransactionInDay,
  useTransactionStore,
} from "@/entities/Transaction";
import {
  DashedInput,
  Dropdown,
  Button,
  ButtonAlt,
  Modal,
  Block,
  Toggle,
} from "@/shared/ui";
import { computed, ref, watch } from "vue";

const props = defineProps<{
  transaction: ITransaction;
}>();

const emit = defineEmits<{
  (e: "confirm-edit", edited: ITransaction);
  (e: "delete-edit", edited: ITransaction);
}>();

const transactionStore = useTransactionStore();

const categoryStore = useCategoryStore();

const showConfirmDelete = ref(false);

const data = ref<ITransaction>({ ...props.transaction });

const onCategoryChange = (selected: string) => {
  const selectedCategory = categoryStore.categories.find(
    (category) => category.name == selected
  );

  if (!selectedCategory) return;

  data.value.category = selectedCategory;
};

const onConfirm = () => {
  transactionStore.editCategory(data.value);

  emit("confirm-edit", data.value);
};

const onDelete = () => {
  transactionStore.removeCategory(data.value);

  emit("delete-edit", data.value);
};

watch([() => data.value.type], () => {
  data.value.category = { id: "", name: "" };
});

const categoryList = computed(() => {
  return categoryStore.categories
    .filter((category) => category.type == data.value.type)
    .map((category) => category.name);
});
</script>

<template>
  <div class="w-[50vw] py-8 px-20">
    <TransactionInDay class="cursor-pointer" :transaction="data" />
    <Toggle :options="['expense', 'income']" v-model="data.type" class="mt-8" />
    <div class="mt-5">
      <div
        class="flex items-center justify-between py-4 border-b border-title-200"
      >
        <p class="font-medium">Category</p>
        <Dropdown
          :model-value="data.category.name"
          @update:model-value="onCategoryChange"
          class="w-44"
          :key="data.id + data.type"
          :elements="categoryList"
        />
      </div>
      <div
        class="flex items-center justify-between py-4 border-b border-title-200"
      >
        <p class="font-medium">Subcategory</p>
        <DashedInput class="w-44" v-model="data.subcategory" label="" />
      </div>
      <div
        class="flex items-center justify-between py-4 border-b border-title-200"
      >
        <p class="font-medium">Value</p>
        <DashedInput
          class="w-44"
          :model-value="'' + data.value"
          @update:model-value="(value) => (data.value = +value)"
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
            Are you sure<br />you want to delete this transaction?
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

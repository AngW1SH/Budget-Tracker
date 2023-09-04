<script setup lang="ts">
import { Block, Button, Modal } from "@/shared/ui";
import {
  TransactionInDay,
  ITransaction,
  useTransactionStore,
} from "@/entities/Transaction";
import { EditTransaction } from "@/features/EditTransaction";
import { ref } from "vue";
import { useDayStore } from "@/entities/Day";

const dayStore = useDayStore();
const transactionStore = useTransactionStore();

const showEditor = ref(false);
const edited = ref<ITransaction | null>(null);

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

      edited.value = { ...transactionStore.transactions[editedIndex] };
      showEditor.value = true;
      rerenderKey.value += 1; // without this, clicking away and selecting the same element wouldn't cause a rerender
    }
  }
};
</script>

<template>
  <Block>
    <h2 class="text-3xl text-center font-bold">Detailed</h2>
    <ul class="mt-9 grid grid-cols-2 gap-4" @click="setEdited">
      <li
        v-for="transaction in transactionStore.transactions"
        :key="transaction.id"
      >
        <TransactionInDay class="cursor-pointer" :transaction="transaction" />
      </li>
    </ul>
    <Button
      class="mt-8 w-full text-3xl"
      @click="() => transactionStore.addEmptyCategory(dayStore.date)"
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
        <EditTransaction
          v-if="edited"
          :key="rerenderKey"
          :transaction="edited"
          @confirm-edit="showEditor = false"
          @delete-edit="showEditor = false"
        />
      </Block>
    </Modal>
  </Block>
</template>

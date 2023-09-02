<script setup lang="ts">
import { Block, Button, Modal } from "@/shared/ui";
import {
  TransactionInDay,
  ITransaction,
  useTransactionStore,
} from "@/entities/Transaction";
import { EditTransaction } from "@/features/EditTransaction";
import { ref, toRaw } from "vue";
import { useDayStore } from "@/entities/Day";

const dayStore = useDayStore();
const TransactionStore = useTransactionStore();

const showEditor = ref(false);
const edited = ref<ITransaction | null>(null);

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
        toRaw(TransactionStore.transactions[editedIndex])
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
      <li
        v-for="transaction in TransactionStore.transactions"
        :key="transaction.id"
      >
        <TransactionInDay class="cursor-pointer" :transaction="transaction" />
      </li>
    </ul>
    <Button
      class="mt-8 w-full text-3xl"
      @click="() => TransactionStore.addEmptyCategory(dayStore.date)"
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
          :key="'' + showEditor + edited"
          :transaction="edited"
          @confirm-edit="showEditor = false"
          @delete-edit="showEditor = false"
        />
      </Block>
    </Modal>
  </Block>
</template>

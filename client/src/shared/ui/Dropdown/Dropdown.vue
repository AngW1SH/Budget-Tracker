<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { debounce } from "@/shared/utils";

const props = defineProps<{
  elements: string[];
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string);
}>();

const showMenu = ref(false);
const selected = ref(props.modelValue);
const wrapper = ref<HTMLDivElement | null>(null);
const currentElements = ref(props.elements);

const updateElements = debounce(() => {
  currentElements.value = props.elements.filter(
    (element) => element.indexOf(selected.value) != -1
  );
}, 300);

const handleClickOutside = (e: MouseEvent) => {
  if (
    wrapper.value &&
    e.target instanceof HTMLElement &&
    !wrapper.value.contains(e.target)
  ) {
    selected.value = props.modelValue;
    showMenu.value = false;
    emit("update:modelValue", selected.value);
  }
};

const handleChoose = (e: MouseEvent) => {
  if (
    e.currentTarget instanceof HTMLElement &&
    e.target instanceof HTMLElement &&
    e.currentTarget.contains(e.target)
  ) {
    if (e.target instanceof HTMLLIElement) {
      selected.value = e.target.innerHTML.replace("&amp;", "&");
      showMenu.value = false;
      emit("update:modelValue", selected.value);
    }
  }
};

const handleInputKeydown = (e: KeyboardEvent) => {
  if (e.key == "Enter") {
    const index = props.elements.indexOf(
      selected.value.trim().replace("&amp;", "&")
    );
    if (index != -1) {
      showMenu.value = false;
      selected.value = selected.value.trim();
      emit("update:modelValue", selected.value);
    }
  }
};

watch(selected, updateElements);

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="relative" ref="wrapper">
    <input
      @focus="showMenu = true"
      class="border w-full rounded-lg py-2 px-4"
      v-model="selected"
      @keydown="handleInputKeydown"
    />
    <ul
      v-if="showMenu"
      class="absolute top-full left-0 right-0 bg-[#f5f5f5] shadow-lg rounded-lg max-h-[50vh] overflow-auto"
      @click="handleChoose"
    >
      <li
        v-for="element in currentElements"
        class="px-4 py-2 hover:bg-[#dadada] cursor-pointer"
      >
        {{ element }}
      </li>
    </ul>
  </div>
</template>

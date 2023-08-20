<script setup lang="ts">
defineProps<{
  labels: {
    name: string;
    color: string;
    hidden: boolean;
  }[];
}>();
defineEmits<{
  (e: "label-click", name: string);
}>();
</script>

<template>
  <ul class="flex justify-end">
    <li
      v-for="label in labels"
      class="flex items-center ml-5 cursor-pointer"
      @click="$emit('label-click', label.name)"
    >
      <div
        class="h-3 w-3 mr-2 rounded-full"
        :style="{ backgroundColor: label.color }"
      ></div>
      <p :style="{ textDecoration: label.hidden ? 'line-through' : 'none' }">
        {{ label.name }}
      </p>
    </li>
  </ul>
</template>

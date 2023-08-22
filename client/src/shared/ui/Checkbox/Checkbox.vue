<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  label: string;
  id: string;
}>();
defineEmits<{
  (e: "update:modelValue", modelValue: boolean);
}>();
</script>

<template>
  <div>
    <input
      type="checkbox"
      class="hidden"
      :id="id"
      :checked="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
    />

    <label
      class="cursor-pointer flex items-center text-sm font-light text-title-900"
      :for="id"
      ><div class="h-[14px] w-[14px] mr-2 border border-black cursor-pointer">
        <img :class="{ hidden: !modelValue }" src="/input-checked.svg" />
      </div>
      {{ label }}</label
    >
  </div>
</template>

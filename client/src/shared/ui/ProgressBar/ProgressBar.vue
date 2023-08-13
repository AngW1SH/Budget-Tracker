<script setup lang="ts">
defineProps<{
  progress: number;
  goal?: number;
}>();
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="relative mt-px w-full h-2 bg-[#F4EBFF] rounded-lg">
      <div
        class="relative h-full bg-[#7F56D9] rounded-lg"
        :style="{ width: progress + '%' }"
      ></div>
      <div
        v-if="goal !== undefined"
        class="-top-[0.5rem] left-0 absolute rounded-lg h-6 w-[3px] bg-[#53389E]"
        :style="{ left: goal + '%' }"
      ></div>
    </div>
    <div class="w-max ml-[0.625rem] text-sm text-[#344054] font-medium">
      {{ progress + "%" }}
    </div>
  </div>
</template>

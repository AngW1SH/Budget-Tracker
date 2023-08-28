<script setup lang="ts">
defineEmits<{
  (e: "click-away");
}>();

/*
For the transition to work, use v-show on the <Modal /> component
*/
</script>

<template>
  <Transition
    enter-active-class="duration-150 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-100 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div
      class="h-full w-full top-0 left-0 fixed bg-[#00000022] flex justify-center items-center"
      @click.self="$emit('click-away')"
    >
      <slot />
    </div>
  </Transition>
</template>

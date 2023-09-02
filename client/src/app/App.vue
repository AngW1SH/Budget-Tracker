<script setup lang="ts">
import { useUserStore } from "@/entities/User";
import { onMounted } from "vue";

const userStore = useUserStore();

onMounted(() => {
  userStore.prepareUser();
});
</script>

<template>
  <router-view :key="$route.fullPath" />
</template>

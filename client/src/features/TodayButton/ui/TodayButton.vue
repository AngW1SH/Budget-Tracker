<script setup lang="ts">
import { router } from "@/app/main";
import { Button } from "@/shared/ui";
import { formatDateForURL } from "@/shared/utils";

const handleRedirect = () => {
  router.push("./day/" + formatDateForURL(new Date()));
};
</script>

<template>
  <Button @click="handleRedirect">Jump to today's note</Button>
</template>

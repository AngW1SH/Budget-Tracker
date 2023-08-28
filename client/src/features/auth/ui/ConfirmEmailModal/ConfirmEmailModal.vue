<script setup lang="ts">
import { Block, Button } from "@/shared/ui";

defineEmits<{
  (e: "confirm-message");
}>();
</script>

<template>
  <Block class="bg-white px-20 py-14 text-center">
    <h2 class="text-4xl font-medium mb-7">Verification email sent!</h2>
    <p class="mb-7 w-[40vw]">
      We've sent an email to the address you provided.<br />Inside that email is
      a special link that will verify your email<br />
      address and activate your account.
    </p>
    <Button @click="$emit('confirm-message')">Got it!</Button>
  </Block>
</template>

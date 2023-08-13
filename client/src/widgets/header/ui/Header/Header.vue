<script setup lang="ts">
import { Container } from "@/shared/ui";
import Logo from "../Logo/Logo.vue";
import Menu from "../Menu/Menu.vue";
import User from "../User/User.vue";
</script>

<template>
  <div class="py-6 shadow-center-md">
    <Container class="flex items-center">
      <Logo class="mr-14" />
      <Menu class="mt-[0.4rem]" />
      <User class="ml-auto" />
    </Container>
  </div>
</template>

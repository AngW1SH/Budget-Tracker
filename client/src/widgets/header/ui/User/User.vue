<script setup lang="ts">
import { SignupButton, LoginButton } from "@/features/auth";
</script>

<template>
  <div>
    <router-link to="/login"><LoginButton class="mr-6" /></router-link>
    <router-link to="/login"><SignupButton /></router-link>
  </div>
</template>

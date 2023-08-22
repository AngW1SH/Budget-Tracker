<script setup lang="ts">
import { Block } from "@/shared/ui";
import { ref } from "vue";
import { SignIn, SignUp } from "@/features/auth";

const mode = ref<"login" | "register">("login");

const toggleMode = () => {
  mode.value = mode.value == "login" ? "register" : "login";
};
</script>

<template>
  <Block class="px-10">
    <h2 class="font-light text-2xl mb-12">Welcome!</h2>
    <div v-if="mode == 'login'">
      <h1 class="font-medium text-5xl mb-10">Sign in</h1>
      <SignIn />
    </div>
    <div v-if="mode == 'register'">
      <h1 class="font-medium text-5xl mb-10">Sign up</h1>
      <SignUp />
    </div>
    <button @click="toggleMode">Toggle</button>
  </Block>
</template>

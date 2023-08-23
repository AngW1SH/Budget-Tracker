<script setup lang="ts">
import { Block } from "@/shared/ui";
import { ref } from "vue";
import { SSO, SignIn, SignUp } from "@/features/auth";

const mode = ref<"login" | "register">("login");

const toggleMode = () => {
  mode.value = mode.value == "login" ? "register" : "login";
};
</script>

<template>
  <Block class="px-10">
    <h2 class="font-light text-2xl mb-6">Welcome!</h2>
    <div v-if="mode == 'login'">
      <h1 class="font-medium text-5xl mb-6">Sign in</h1>
      <SignIn />
      <p class="mt-5 mb-2 font-light text-sm text-center">or continue with</p>
      <SSO class="mb-4" />
      <p class="font-light text-center">
        Don't have an account?
        <span
          @click="toggleMode"
          class="text-main-900 font-semibold cursor-pointer"
          >Register</span
        >
      </p>
    </div>
    <div v-if="mode == 'register'">
      <h1 class="font-medium text-5xl mb-6">Sign up</h1>
      <SignUp />
      <p class="font-light text-center">
        Already have an account?
        <span
          @click="toggleMode"
          class="text-main-900 font-semibold cursor-pointer"
          >Log in</span
        >
      </p>
    </div>
  </Block>
</template>

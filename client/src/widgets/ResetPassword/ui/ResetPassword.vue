<script setup lang="ts">
import { ResetPassword } from "@/features/auth";
import { Block } from "@/shared/ui";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const getToken = computed(() => {
  if (!route.params.token) return "";

  if (typeof route.params.token == "string") return route.params.token;

  return route.params.token[0];
});

const goToLogin = () => {
  router.push("/login");
};
</script>

<template>
  <Block class="bg-white px-20 py-16 text-center">
    <h2 class="text-4xl font-medium mb-7">Reset password</h2>
    <p class="mb-7">Please provide a new password</p>
    <ResetPassword :token="getToken" @resetpassword-success="goToLogin" />
  </Block>
</template>

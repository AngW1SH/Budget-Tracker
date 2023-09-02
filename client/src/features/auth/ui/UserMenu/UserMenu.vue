<script setup lang="ts">
import LoginButton from "../LoginButton/LoginButton.vue";
import SignupButton from "../SignupButton/SignupButton.vue";
import LogoutButton from "../LogoutButton/LogoutButton.vue";
import { useUserStore } from "@/entities/User";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const handleLogout = async () => {
  const logoutResult = await userStore.logout();

  if (logoutResult == 200) {
    router.push("/login");
  }
};
</script>

<template>
  <div>
    <div v-if="!userStore.loggedIn">
      <router-link to="/login"><LoginButton class="mr-6" /></router-link>
      <router-link to="/login"><SignupButton /></router-link>
    </div>
    <div v-if="userStore.loggedIn">
      <LogoutButton @click="handleLogout" class="mr-3" />
    </div>
  </div>
</template>

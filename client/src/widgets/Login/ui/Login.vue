<script setup lang="ts">
import { Block, Modal } from "@/shared/ui";
import { ref } from "vue";
import {
  SSO,
  SignIn,
  SignUp,
  ConfirmEmailModal,
  ForgotPassword,
} from "@/features/auth";
import { useUserStore } from "@/entities/User";
import { useRouter } from "vue-router";

const userStore = useUserStore();

const router = useRouter();

async function login() {
  userStore.prepareUser();
  router.push("/");
}

const mode = ref<"login" | "register" | "forgotPassword">("login");
const forgotPassword = ref(false);

const toggleMode = () => {
  mode.value = mode.value == "login" ? "register" : "login";
};

const showConfirmEmailModal = ref(false);
</script>

<template>
  <Block class="px-10">
    <h2 class="font-light text-2xl mb-6">Welcome!</h2>
    <div v-if="mode == 'login'">
      <h1 class="font-medium text-5xl mb-6">Sign in</h1>
      <SignIn
        @login-success="login"
        @forgot-password="mode = 'forgotPassword'"
      />
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
      <SignUp @registration-success="showConfirmEmailModal = true" />
      <p class="font-light text-center">
        Already have an account?
        <span
          @click="toggleMode"
          class="text-main-900 font-semibold cursor-pointer"
          >Log in</span
        >
      </p>
    </div>
    <div v-if="mode == 'forgotPassword'">
      <h1 class="font-medium text-3xl mb-6">Forgot password</h1>
      <ForgotPassword
        @forgotpassword-success="forgotPassword = true"
        @forgotpassword-cancel="mode = 'login'"
      />
    </div>

    <Modal v-show="showConfirmEmailModal">
      <ConfirmEmailModal @confirm-message="showConfirmEmailModal = false" />
    </Modal>
    <Modal v-show="forgotPassword">
      <ConfirmEmailModal @confirm-message="forgotPassword = false" />
    </Modal>
  </Block>
</template>

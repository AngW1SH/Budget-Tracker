<script setup lang="ts">
import { Checkbox, LabeledInput, Button } from "@/shared/ui";
import { validate } from "@/shared/utils";
import { ref } from "vue";
import { signInConfig } from "../../utils/SignIn/config";
import { loginUser } from "../../api/login";

const emit = defineEmits<{
  (e: "login-success");
  (e: "forgot-password");
}>();

const inputData = ref({
  username: "",
  password: "",
  rememberMe: false,
});

const confirm = async () => {
  if (!validate(inputData.value, signInConfig).length) {
    await loginUser(inputData.value);
    emit("login-success");
  }
};
</script>

<template>
  <LabeledInput v-model="inputData.username" label="Username" class="mb-10" />
  <LabeledInput
    v-model="inputData.password"
    label="Password"
    class="mb-5"
    type="password"
  />
  <div class="flex justify-between mb-10">
    <Checkbox
      v-model="inputData.rememberMe"
      label="Remember me"
      id="remember-me"
    />
    <button
      class="text-sm font-light text-title-700"
      @click="$emit('forgot-password')"
    >
      Forgot Password?
    </button>
  </div>
  <Button class="w-full text-[1.75rem] font-semibold my-4" @click="confirm"
    >Login</Button
  >
</template>

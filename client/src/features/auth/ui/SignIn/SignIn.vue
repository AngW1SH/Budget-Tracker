<script setup lang="ts">
import { Checkbox, LabeledInput, Button } from "@/shared/ui";
import { ref } from "vue";

const inputData = ref({
  username: "",
  password: "",
  rememberMe: false,
});

const confirm = () => {
  console.log(inputData.value);
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
    <button class="text-sm font-light text-title-700">Forgot Password?</button>
  </div>
  <Button class="w-full text-[1.75rem] font-semibold my-4" @click="confirm"
    >Login</Button
  >
</template>

<script setup lang="ts">
import { LabeledInput, Button } from "@/shared/ui";
import { validate } from "@/shared/utils";
import { ref } from "vue";
import { generateSignUpConfig } from "../../utils/SignUp/config";

const inputData = ref({
  email: "",
  username: "",
  password: "",
  repeatPassword: "",
});

const confirm = () => {
  console.log(validate(inputData.value, generateSignUpConfig(inputData)));
};
</script>

<template>
  <LabeledInput v-model="inputData.email" label="Email" class="mb-5" />
  <LabeledInput v-model="inputData.username" label="Username" class="mb-5" />
  <LabeledInput
    v-model="inputData.password"
    label="Password"
    class="mb-5"
    type="password"
  />
  <LabeledInput
    v-model="inputData.repeatPassword"
    label="Confirm Password"
    class="mb-5"
    type="password"
  />
  <Button class="w-full text-[1.75rem] font-semibold my-4" @click="confirm"
    >Register</Button
  >
</template>
